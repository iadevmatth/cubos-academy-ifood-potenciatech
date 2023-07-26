const express = require('express');
const guestControllers = require('./controllers/guestControllers')
const routes = express();

// Routes referring at guest
routes.get('/guests', guestControllers.listGuest);
routes.post('/guests', guestControllers.addGuest);

module.exports = routes