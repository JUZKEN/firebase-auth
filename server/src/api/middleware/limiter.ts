const rateLimit = require("express-rate-limit");

// Limit request from the same API 
export const apiLimiter = rateLimit({
   max: 100,
   windowMs: 15 * 60 * 1000, // 15 minutes
   message: 'Too Many Requests from this IP, please try again in 15 minutes',
});