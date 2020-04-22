const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/customer/all', function(req, res) {
    db.customers
        .findAll()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.send(err);
        });
});

router.get('/customer', (req, res) => {
    let data = { message: '' };
    if (req.query.message) data = { message: req.query.message };
    res.render('customer', data);
});

router.post('/customer', (req, res) => {
    db.customers
        .create({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
        })
        .then(() => {
            req.saved = 'Record Saved';
            res.redirect('/customer?message=Record saved succesfuly.');
        })
        .catch(err => {
            res.send(err);
        });
});

router.get('/customers', (req, res) => {
    db.customers
        .findAll({
            attributes: ['id', 'name', 'phone', 'address'],
        })
        .then(rows => {
            res.render('showCustomers', { data: rows, total: rows.length });
        })
        .catch(err => {
            res.send(err);
            console.log('err is ' + err);
        });
});

module.exports = router;