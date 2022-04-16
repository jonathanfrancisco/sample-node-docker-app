import express from 'express';
import faker from '@faker-js/faker';
import { v4 as uuid } from 'uuid';
import 'dotenv/config';

import getDb from './getDb.js';
const PORT = 3000;

const app = express();

app.post('/seed/payments', async (req, res) => {
  const docsToInsert = [];
  for (let i = 0; i < 10; i++) {
    docsToInsert.push({
      product: faker.commerce.product(),
      price: faker.commerce.price(),
      customer: {
        name: faker.name.findName(),
        address: faker.address.city(),
        working_at: faker.company.companyName(),
      },
      purchased_at: faker.date.past(),
    });
  }

  const db = await getDb();
  await db.collection('payments').insertMany(docsToInsert);

  return res.send({
    message: 'sample payments data successfully seeded',
  });
});

app.get('/payments', async (req, res) => {
  const db = await getDb();
  const payments = await db.collection('payments').find({}).toArray();
  return res.send({
    data: payments,
  });
});

app.listen(PORT, () => {
  console.log(`started listening on port ${PORT}`);
});
