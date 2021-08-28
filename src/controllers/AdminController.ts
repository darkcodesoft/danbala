import express from 'express';
import Socket from '../socket';

/**
 *
 * @todo
 * @export
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns {Promise<void>}
 */
export async function index (req: express.Request, res: express.Response): Promise<void> {
  res.send({
    "app": "Danbala"
  });
}

/**
 *
 *
 * @export
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns {Promise<void>}
 */
export async function user (req: express.Request, res: express.Response): Promise<void> {
  res.send({
    "first": "Teddy",
    "last": "Moussignac"
  });
}

/**
 * @export
 * socket endpoint
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function socket (req: express.Request, res: express.Response): Promise<void> {
  const message = req.params.message ? req.params.message : 'MESSAGE';
  Socket.static().send(JSON.stringify({ message: message }));
  res.json(message);
}
