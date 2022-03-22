import * as express from 'express';
import { transportList, transportOffer, userOffers } from '../data';

export function transportPost(req: express.Request, res: express.Response): express.Response {
  return res.json(transportOffer(req.body));
}

export function transportListGet(req: express.Request, res: express.Response): express.Response {
  return res.json(transportList);
}

export function transportGet(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  return res.json(transportList.content?.find((el) => el.id === +id));
}

export function transportDelete(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  userOffers.content = userOffers.content?.filter((el) => el.id !== +id);

  res.status(204);
  return res.send();
}
