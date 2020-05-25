const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan =  require('morgan')
const server = express();

const { authenticate } = require('../users/users-service.js');
const usersRouter = require('../users/users-router.js');
const strainsRouter = require('../strains/strains-router');


server.use(express.json(),helmet(),cors(),morgan('short'));

server.use('/api/users', usersRouter);
server.use('/api/strains', authenticate(), strainsRouter);

server.get('/', (req,res) => {
    res.json( { api: 'Welcome to the Med Cabinet API.' })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: 'Error processing the request.' })
})

module.exports = server;
