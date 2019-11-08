const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
   res.status(200).json({ message: 'Server is Running' });
});
//server.use('/api/recipes', );

module.exports = server;
