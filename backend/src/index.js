const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Product 1', price: 9.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 29.99 },
  ]);
});

// Export the app without starting the server
module.exports = app;