import express from 'express';

const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
  res.json('hello world');
});

app.listen(PORT, () => {
  console.log(`server is listening on the port ${PORT}...`);
});
