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
  const transport = transportList.content?.find((el) => el.id === Number(id));
  if (transport) {
    return res.json(transport);
  } else {
    res.status(404);
    return res.send();
  }
}

export function transportDelete(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  userOffers.content = userOffers.content?.filter((el) => el.id !== Number(id));

  res.status(204);
  return res.send();
}
