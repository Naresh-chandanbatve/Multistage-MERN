
const express = require('express');
const app = express();
const PORT = 5000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.get('/api', (req, res) => {
  res.json({ message: 'Hello World from Express!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
