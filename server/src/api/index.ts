import express from 'express';
import users from './routes/users';
const router = express.Router();

/* Routes */
router.use('/users', users);

export default router;