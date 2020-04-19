const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/category/all', function(req, res) {
    db.categaries
        .findAll()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/category/add', (req, res) => {
    db.categaries
        .create({
            title: req.body.title,
        })
        .then(() => {
            res.send('<h1>Saved<h1>');
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;