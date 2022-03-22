import * as express from 'express';
import { accommodationOffer, accommodationsList, userOffers } from '../data';

export function accommodationsPost(req: express.Request, res: express.Response): express.Response {
  return res.json(accommodationOffer(req.body));
}

export function accommodationsListGet(req: express.Request, res: express.Response): express.Response {
  return res.json(accommodationsList);
}

export function accommodationGet(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  const accommodation = accommodationsList.content?.find((el) => el.id === +id);
  if (accommodation) {
    return res.json(accommodation);
  } else {
    res.status(404);
    return res.send();
  }  
}

export function accommodationDelete(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  res.status(204);
  userOffers.content = userOffers.content?.filter((el) => el.id !== +id);
  return res.send();
}
