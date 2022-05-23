import * as express from 'express';
import { otherOffer } from '../data';

export function otherPost(req: express.Request, res: express.Response): express.Response {
  return res.json(otherOffer(req.body));
}
