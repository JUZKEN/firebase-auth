import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import xss from 'xss-clean';
import hpp from 'hpp';
import cors from 'cors';

import { apiLimiter } from '../api/middleware/limiter';
import error from '../api/middleware/error';
import apiRouter from '../api';

module.exports = function(app) {
   // Set security HTTP headers
   app.use(helmet());

   // Enable CORS
   app.use(cors());

   // Compress HTTP responses.
   app.use(compression());

   // Limit request from the same API
   app.use('/api', apiLimiter);

   // Body parser
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));

   // Data sanitization against XSS(clean user input from malicious HTML code)
   app.use(xss());

   // Prevent parameter pollution
   app.use(hpp());

   // Routes
   app.use('/api', apiRouter);

   // Handling undefined routes.
   app.use('*', (_req, res) => {
      res.status(404).json({message: 'Undefined Route'});
   });

   // Handling errors
   app.use(error);
}