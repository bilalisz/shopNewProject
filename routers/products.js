const db = require('../models');
var express = require('express');
var router = express.Router();
router.post('product/add', (req, res) => {
    db.products
        .create({
            title: req.body.title,
            unitPrice: req.body.unitPrice,
            purachasePrice: req.body.purachasePrice,
            quntity: req.body.quntity,
            categariesId: req.body.categayiesId,
        })
        .then((result) => {
            if (result) {
                res.send('saved');
            }
        })
        .catch((err) => {
            console.log('error is ', err);
        });
});
router.get('product/showall', (req, res) => {
    db.products.findAll().then((data) => res.send(data));
});
router.get('product/show', (req, res) => {
    db.products.findById({ id: 2 }).then((data) => res.send(data));
});
module.exports = router;