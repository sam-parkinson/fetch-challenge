import express from 'express';

import receiptsRouter from './receipts/receipts-router';

const app = express();

app.use('/receipts', receiptsRouter);

app.use(function errorHandler(error, req, res, next) {

  console.error(error);
  let response = { message: error.message, error };
  res.status(500).json(response);
});

