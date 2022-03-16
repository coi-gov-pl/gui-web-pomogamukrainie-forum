import * as express from 'express';
import { cityResponse } from '../data';

export function cityGet(req: express.Request, res: express.Response): express.Response {
  return res.json(cityResponse);
}
