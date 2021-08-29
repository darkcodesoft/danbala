import { index, user, socket, streaming } from '../../src/controllers/AdminController';
import express from 'express';

const router = express.Router();

router.get('/', index);
router.get('/user', user);
router.get('/socket/:message', socket);
router.get('/streaming', streaming);

export default router;
