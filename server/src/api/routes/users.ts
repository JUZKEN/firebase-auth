import express from 'express';
import * as Users from '../controllers/users';
import auth from '../middleware/auth';
const router = express.Router();

/* Routes */
router.get('/', auth, Users.index);

export default router;