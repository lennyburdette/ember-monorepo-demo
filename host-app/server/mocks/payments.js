/* eslint-env node */
'use strict';

function randomAmount() {
  return Math.round(Math.random()*5000);
}

function randomInt() {
  return Math.floor(Math.random() * 10);
}

function randomSuffix() {
  return new Array(4).fill(true).map(_ => randomInt()).join('');
}

function randomDate() {
  let date = new Date() - (Math.random() *  1000*60*60*24*32);
  date = new Date(date);
  date.setUTCHours(Math.random() * 12 - 8);
  return date;
}

function makePayment(i) {
  return {
    id: String(i),
    capturedAt: randomDate(),
    amount: randomAmount(),
    paymentCard: `•••• •••• •••• ${randomSuffix()}`
  };
}

const DB = new Array(50).fill(true)
  .map((_, i) => makePayment(i))
  .sort((a, b) => b.capturedAt - a.capturedAt);

module.exports = function(app) {
  const express = require('express');
  let paymentsRouter = express.Router();

  paymentsRouter.get('/', function(req, res) {
    res.send({
      'payments': DB
    });
  });

  paymentsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  paymentsRouter.get('/:id', function(req, res) {
    res.send({
      'payments': {
        id: req.params.id
      }
    });
  });

  paymentsRouter.put('/:id', function(req, res) {
    res.send({
      'payments': {
        id: req.params.id
      }
    });
  });

  paymentsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/payments', require('body-parser').json());
  app.use('/api/payments', paymentsRouter);
};
