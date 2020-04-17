const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routers/categaries');
const routerPro = require('./routers/products');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', [router, routerPro]);

app.listen(8088, () => {
    console.log('server is running ');
});