import express from 'express';
import ReceiptsService from './receipts-service';

const receiptsRouter = express.Router();
const jsonBodyParser = express.json()

receiptsRouter
  .route('/process')
  .post(jsonBodyParser , (req, res, next) => {
    const receipt = req.body;

    for (const [key, value] of Object.entries(receipt)) {
      if (value == null) {
        return res.status(400).json({
          error: `Missing '${key}' in request body.`
        });
      }
    }

    ReceiptsService.insertReceipt(
      receipt
    )
      .then(id => {
        res
          .status(201)
          .json({"id": id})
      })
      .catch(next)
  });

receiptsRouter
  .route('/:receipt_id/points')
  .get((req, res, next) => {
    ReceiptsService.getPointsByReceiptId(
      req.params.receipt_id
    )
      .then(points => {
        res.json(points);
      })
  })

export default receiptsRouter;