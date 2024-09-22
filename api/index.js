import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRouter from './routes/user.route.js';

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

app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`server is listening on the port ${PORT}...`);
});

// mongodb+srv://Rahul:I1jJGfsfaFRluvT7@nodeexpressprojects.bjn2qat.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProjects/Personal_Blog_App
