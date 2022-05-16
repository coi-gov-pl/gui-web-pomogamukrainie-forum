import * as express from 'express';
import { translationList, translationOffer, userOffers } from '../data';

export function translationListGet(req: express.Request, res: express.Response): express.Response {
  return res.json(translationList);
}

export function translationGet(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  const translation = translationList.content?.find((el) => el.id === Number(id));
  if (translation) {
    return res.json(translation);
  } else {
    res.status(404);
    return res.send();
  }
}

export function translationPost(req: express.Request, res: express.Response): express.Response {
  return res.json(translationOffer(req.body));
}

export function translationDelete(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  res.status(204);
  userOffers.content = userOffers.content?.filter((el) => el.id !== Number(id));
  return res.send();
}
