require('express-async-errors');
import 'dotenv-safe/config';
import express from 'express';
import admin from 'firebase-admin';
import { createConnection } from 'typeorm';
import { User } from './entities/User';
const app = express();

const main = async () => {
   /* Connect to database */
   await createConnection({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      synchronize: true,
      entities: [User]
   });

   /* Initialize firebase admin */
   const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS!);
   admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
   });

   /* Routes */
   require('./routes')(app);

   const port = process.env.PORT || 5000;
   app.listen(port, () => console.log(`Listening on port ${port}...`));
}

main().catch(err => {
   console.error(err);
});