// backend/src/index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Product 1', price: 9.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 29.99 },
  ]);
});

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`);
});