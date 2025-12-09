// server.js
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

let orders = [];

app.use(express.static('public'));
app.use(express.json());

// Receive order from customer
app.post('/order', (req, res) => {
  const order = req.body;
  order.served = false;
  orders.push(order);
  res.sendStatus(200);
});

// Get all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

// Mark order as served
app.post('/serve', (req, res) => {
  const { index } = req.body;
  if (orders[index]) {
    orders[index].served = true;
  }
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
