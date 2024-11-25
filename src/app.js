import express from 'express';

import receiptsRouter from './receipts/receipts-router.js';

const app = express();

app.use('/receipts', receiptsRouter);

app.use(function errorHandler(error, req, res, next) {
  console.error(error);
  let response = { message: error.message, error };
  res.status(500).json(response);
});

app.listen (8000, () => {
  console.log(`Server listening at http://localhost:8000`);
})