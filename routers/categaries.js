const db = require('../models');
var express = require('express');
var router = express.Router();
router.post('category/add', (req, res) => {
    db.categaries
        .create({ title: req.body.title })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.error('error is ', err);
        });
});
router.get('category/all', (req, res) => {
    db.categaries.findAll().then((data) => res.send(data));
});

module.exports = router;