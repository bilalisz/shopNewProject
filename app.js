const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routerCatg = require('./routers/category');
const routerProducts = require('./routers/products');
const routerCustomer = require('./routers/customer');

const ejs = require('ejs');
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/api', routerCatg);
app.use('/', [routerProducts, routerCustomer]);
// app.use('/', routerCustomer);

app.get('/index', function(req, res) {
    res.render('index');
});

app.listen(8088, () => {
    console.log('server is running on port 8088 ');
});