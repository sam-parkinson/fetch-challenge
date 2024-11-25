import express from 'express';
import ReceiptsService from './receipts-service.js';

const receiptsRouter = express.Router();
const jsonBodyParser = express.json()

receiptsRouter
  .route('/process')
  .post(jsonBodyParser , (req, res, next) => {
    const { 
      retailer,
      purchaseDate,
      purchaseTime,
      items,
      total
    } = req.body;

    const receipt = {
      retailer: retailer,
      purchaseDate: purchaseDate,
      purchaseTime: purchaseTime,
      items: items,
      total: total
    };

    for (const [key, value] of Object.entries(receipt)) {
      if (value == null) {
        return res.status(400).json({
          error: `Missing '${key}' in request body.`
        });
      }
    }

    const id = ReceiptsService.insertReceipt(receipt)

    res.status(201).json(id);
  });

receiptsRouter
  .route('/:receipt_id/points')
  .get((req, res, next) => {
    const points = ReceiptsService.getPointsByReceiptId(
      req.params.receipt_id
    )

    if (points != null) {
      res.json(points);
    } else {
      res.status(404).send(`Receipt with ID ${receipt_id} not found`);
    }
  })

export default receiptsRouter;