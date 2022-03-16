import * as express from 'express';
import { accommodationOffer } from '../data';

export function acommodationsPost(req: express.Request, res: express.Response): express.Response {
  return res.json(accommodationOffer(req.body));
}
