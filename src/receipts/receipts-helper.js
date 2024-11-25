const ReceiptsHelper = {
  calculatePoints(receipt) {
    let points = 0;

    for (let i = 0; i < receipt.retailer.length; i++) {
      const c = receipt.retailer.charCodeAt(i);
      if ((c > 47 && c < 58) ||
          (c > 64 && c < 91) ||
          (c > 96 && c < 123)) {
            points++;
          }
    }

    const intTotal = receipt.total * 100;
    if (intTotal % 100 == 0) {
      points += 50;
    }

    if (intTotal % 25 == 0) {
      points += 50;
    }

    points += (Math.floor(receipt.items.length / 2) * 5);

    for (const item of receipt.items) {
      if (item.shortDescription.trim().length % 3 == 0) {
        points += Math.ceil((item.price * 100) / 500);
      }
    }

    if (receipt.purchaseDate.slice(-1) % 2 == 1) {
      points += 6;
    }

    const hour = receipt.purchaseTime.split(":")[0];
    if (hour >= 14 && hour < 16) {
      points += 10
    }

    return points;
  }
}

export default ReceiptsHelper;