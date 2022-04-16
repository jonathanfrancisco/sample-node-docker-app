import { Db, MongoClient } from 'mongodb';

const url = `mongodb://${config.database.username}:${config.database.password}@${config.database.host}:${config.database.port}`;
const client = new MongoClient(url);

import config from './config.js';

export default async () => {
  try {
    console.log('connecting to the database...');
    await client.connect();
    console.log('succesfully connected to the database');
  } catch (err) {
    console.log('cannot connect to the database ', err);
  }

  return client.db(config.database.name);
};
