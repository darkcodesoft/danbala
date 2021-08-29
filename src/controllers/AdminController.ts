import {AxiosError, AxiosResponse} from 'axios';
import express from 'express';
import {Order, Query as StreamingQuery, Service as StreamingService} from '../services/Streaming';
import Socket from '../socket';

/**
 *
 *
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns {Promise<void>}
 */
export async function index (req: express.Request, res: express.Response): Promise<void> {
  res.json({
    "app": "Danbala"
  });
}

/**
 *
 *
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns {Promise<void>}
 */
export async function user (req: express.Request, res: express.Response): Promise<void> {
  res.json({
    "first": "Teddy",
    "last": "Moussignac"
  });
}

/**
 *
 * socket endpoint
 * @param {express.Request} req
 * @param {express.Response} res
 */
export async function socket (req: express.Request, res: express.Response): Promise<void> {
  const message = req.params.message ? req.params.message : 'MESSAGE';
  Socket.static().send(JSON.stringify({ message: message }));
  res.json(message);
}

/**
 *
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns {Promise<void>}
 */
export async function streaming (req: express.Request, res: express.Response): Promise<void> {
  const query = new StreamingQuery();
  query.services = [StreamingService.APPLE];
  query.order = Order.YEAR;
  query.desc = "true";
  query.fetch().then((response: AxiosResponse) => {
    res.json(response.data);
  }).catch((error: AxiosError) => {
    res.send(error.toJSON());
  });
}
