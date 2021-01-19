const express = require('express')
const { env } = require("process");
const app = express()
const { google } = require('googleapis')
app.use(express.static(__dirname + '/'));

const cGoogle = require('./controllers/google.controller')


const credentials = require('./../credentials.json').web;

let auth = new google.auth.OAuth2(
    credentials.client_id,
    credentials.client_secret
);
console.log(auth);
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/google', function (req, res) {
    console.log(req.body)
    res.send('Hello World')
})

app.get('/login', cGoogle.login);
app.get('/events', cGoogle.listEvents)

app.listen(env.PORT, () => {
    console.log(`Server is running on port:[${env.PORT}]`);
})