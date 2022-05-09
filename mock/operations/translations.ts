import * as express from 'express';
import { translationsList, translationsOffer } from '../data';

export function translationsListGet(req: express.Request, res: express.Response): express.Response {
  return res.json(translationsList);
}

export function translationsGet(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  const translation = translationsList.content?.find((el) => el.id === Number(id));
  if (translation) {
    return res.json(translation);
  } else {
    res.status(404);
    return res.send();
  }
}

export function translationsPost(req: express.Request, res: express.Response): express.Response {
  return res.json(translationsOffer(req.body));
}
