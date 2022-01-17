const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const courseRouter = require('./routes/course-router');

const server = express();
const { SERVER_PORT } = process.env;

// middlewares
server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());

//  response handlers
server.use('/api/courses', courseRouter);

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant http://localhost:${SERVER_PORT}/`)
});
