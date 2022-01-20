const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const courseRouter = require('./routes/course-router');
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');

const server = express();
const { SERVER_PORT, DB_CONNECTION } = process.env;

const corsOptions ={
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200
};

// middlewares
server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());
server.use(cors(corsOptions));

//  response handlers
server.use('/api/courses', courseRouter);
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

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
