import { index, user, socket } from '../../src/controllers/AdminController';
import express from 'express';

const router = express.Router();

router.get('/', index);
router.get('/user', user);
router.get('/socket/:message', socket);

export default router;
