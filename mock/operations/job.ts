import * as express from 'express';
import { jobOffer } from '../data';

export function jobPost(req: express.Request, res: express.Response): express.Response {
  return res.json(jobOffer(req.body));
}
