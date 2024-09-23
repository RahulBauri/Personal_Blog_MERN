import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import errorHandlerMiddleware from './middlewares/errorHandler.middleware.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    return console.log('MongoDB is connected!');
  })
  .catch((err) => {
    return console.log(err);
  });

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/test', (req, res) => {
  res.json('hello world');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`server is listening on the port ${PORT}...`);
});
