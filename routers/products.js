const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/products', function(req, res) {
    db.products
        .findAll({
            attributes: ['id', 'title', 'unitPrice', 'quntity'],
        })
        .then(result => {
            res.render('products', { data: result, count: 1 });
        })
        .catch(err => {
            res.send(err);
            console.log('err is ' + err);
        });
});

router.get('/newproduct', function(req, res) {
    res.render('newproduct');
});

router.post('/newproduct', (req, res) => {
    db.products
        .create({
            title: req.body.title,
            unitPrice: req.body.unitPrice,
            purachasePrice: req.body.purachasePrice,
            quntity: req.body.quntity,
            categoryId: 1,
        })
        .then(result => {
            if (result) {
                res.send('saved');
            }
            res.send('not save');
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;