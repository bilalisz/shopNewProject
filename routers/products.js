const express = require('express');
const db = require('../models');
const router = express.Router();
router.get('/products', function(req, res) {
    db.products
        .findAll({
            attributes: ['id', 'title', 'unitPrice', 'quntity'],
            include: [{
                attributes: ['title'],
                model: db.categories,
            }, ],
        })
        .then(rows => {
            res.render('products', { data: rows, total: rows.length });
        })
        .catch(err => {
            res.send(err);
            console.log('err is ' + err);
        });
});

router.get('/newproduct', function(req, res) {
    let data = { message: '' };
    if (req.query.message) data = { message: req.query.message };
    res.render('newproduct', data);
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
            req.saved = 'Record Saved';
            res.redirect('/newproduct?message=Record saved succesfuly.');
        })
        .catch(err => {
            res.send(err);
        });
});

router.get('/delete/:id', (req, res) => {
    console.log('i am here');
    db.products
        .destroy({
            where: {
                id: req.params.id,
            },
        })
        .then(result => {
            res.redirect('/products');
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;