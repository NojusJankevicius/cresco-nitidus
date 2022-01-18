const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const courseRouter = require('./routes/course-router');

const server = express();
const { SERVER_PORT, DB_CONNECTION } = process.env;

// middlewares
server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());

//  response handlers
server.use('/api/courses', courseRouter);

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant http://localhost:${SERVER_PORT}/`);
  (async () =>{
    try {
      await Mongoose.connect(DB_CONNECTION);
      console.log('Prisijungta prie duomenų bazės');
    } catch (error) {
      console.error('Nepavyko prisijungti prie duomenų bazės');
    }
  })();
});
