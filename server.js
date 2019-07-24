const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.send('OK');

});

app.listen(5000);