import * as express from 'express';
import { translationsList, userOffers } from '../data';

export function translationsListGet(req: express.Request, res: express.Response): express.Response {
  return res.json(translationsList);
}

export function translationDelete(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  res.status(204);
  userOffers.content = userOffers.content?.filter((el) => el.id !== Number(id));
  return res.send();
}
