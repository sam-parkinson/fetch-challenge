import { nanoid } from "nanoid";

const store = {};

const ReceiptsService = {
  getPointsByReceiptId(id) {
    return { "points": store[id].points };
  },
  insertReceipt(receipt) {
    return { "id": id }
  }
}

export default ReceiptsService;