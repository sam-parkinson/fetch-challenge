import { nanoid } from "nanoid";
import ReceiptsHelper from "./receipts-helper.js";

const store = {};

const ReceiptsService = {
  getPointsByReceiptId(id) {
    return id in store 
      ? { "points": store[id].points }
      : null;
  },
  insertReceipt(receipt) {
    const id = nanoid(16);
    const points = ReceiptsHelper.calculatePoints(receipt);

    receipt.points = points;
    store[id] = receipt;

    return { "id": id }
  }
}

export default ReceiptsService;