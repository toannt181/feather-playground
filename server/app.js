const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const MesssageService = require('./services/MesssageService')
const memory = require('feathers-memory');

const app = express(feathers());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
// app.use('messages', new MesssageService());
app.use('messages', memory({
  paginate: {
    default: 10,
    max: 25
  }
}));


app.use(express.errorHandler());
const server = app.listen(3030);

app.service('messages').create({
  text: 'Hello from the server'
});

server.on('listening', () => console.log('Feathers REST API started at http://localhost:3030'));