// Create web server with Node.js
// Created by Jesse Jurman
// Created on 10/08/2019

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

var comments = [];

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.send('Comment added!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
