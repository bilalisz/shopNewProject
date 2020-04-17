const { categaries } = require('../models');
var express = require('express');
var router = express.Router();

router.post('/add-new-categary', (req, res) => {
    categaries
        .create({ title: req.body.title })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.error('error is ', err);
        });
});
router.get('/categaries', (req, res) => {
    categaries.findAll().then(data => res.send(data));
});

module.exports = router;