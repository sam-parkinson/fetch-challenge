import supertest from 'supertest';
import app from '../src/app.js';
import {receipts, responses} from './test-helpers.js';

let testId;

describe('Receipts Endpoints', function() {
  describe(`POST /process`, () => {
    it(`posts a new receipt, responding with the receipt ID`, () => {
      this.retries(3);
      const receipt = receipts[0];

      return supertest(app)
        .post('/receipts/process')
        .send(receipt)
        .expect(201)
        .expect(res => {
          expect(res.body).to.have.property('id')
          testId = res.body.id;
        })
    })
  });
  describe(`GET /receipts/:receipt_id/points`, () => {
    context('Given the receipt is in the store', () => {
      it(`responds with the expected points total`, () => {
        return supertest(app)
          .get(`/receipts/${testId}/points`)
          .expect(200, responses[0]);
      });
    });

    context('Given the receipt is not in the store', () => {
      it(`responds with 404`, () => {
        return supertest(app)
          .get(`/receipts/fizzBuzz/points`)
          .expect(404);
      });
    });
  });
});