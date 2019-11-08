const express = require('express');
const server = express();

//import router
const resRouter = require('./resources/resource-router');
const proRouter = require('./projects/project-router');
const taskRouter = require('./tasks/task-router');

server.use(express.json());

server.get('/', (req, res) => {
   res.status(200).json({ message: 'Server is Running' });
});

//router:
server.use('/api/resources', resRouter);
server.use('/api/projects', proRouter);
server.use('/api/tasks', taskRouter);

module.exports = server;
