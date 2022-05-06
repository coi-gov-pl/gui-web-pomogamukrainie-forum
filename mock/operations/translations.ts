import * as express from 'express';
import { translationsList } from '../data';

export function translationsListGet(req: express.Request, res: express.Response): express.Response {
  return res.json(translationsList);
}
