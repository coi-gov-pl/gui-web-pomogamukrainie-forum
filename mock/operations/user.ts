import * as express from 'express';
import { loggedUserInfo, userOffers } from '../data';

export function meGet(req: express.Request, res: express.Response): express.Response {
  return res.json(loggedUserInfo);
}

export function myOffersGet(req: express.Request, res: express.Response): express.Response {
  return res.json(userOffers);
}
