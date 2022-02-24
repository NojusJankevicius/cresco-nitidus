const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const courseRouter = require('./routes/course-router');
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');
const categoryRouter = require('./routes/category-router');
const productRouter = require('./routes/product-router');
const imageRouter = require('./routes/image-router');

const server = express();
const { SERVER_DOMAIN, SERVER_PORT, DB_CONNECTION, PUBLIC_PATH } = process.env;

const corsOptions ={
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200
};

// middlewares
server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());
server.use(cors(corsOptions));
server.use(express.static(PUBLIC_PATH));

//  response handlers
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/products', productRouter);
server.use('/api/images', imageRouter);
server.use('/api/courses', courseRouter);

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant ${SERVER_DOMAIN}:${SERVER_PORT}/`);
  (async () =>{
    try {
      await Mongoose.connect(DB_CONNECTION);
      console.log('Prisijungta prie duomenų bazės');
    } catch (error) {
      console.error('Nepavyko prisijungti prie duomenų bazės');
    }
  })();
});
