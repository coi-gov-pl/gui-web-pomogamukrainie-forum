import * as express from 'express';
import { otherList, otherOffer } from '../data';

export function otherPost(req: express.Request, res: express.Response): express.Response {
  return res.json(otherOffer(req.body));
}

export function otherGet(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  const other = otherList.content?.find((el) => el.id === Number(id));
  if (other) {
    return res.json(other);
  } else {
    res.status(404);
    return res.send();
  }
}

export function otherListGet(req: express.Request, res: express.Response): express.Response {
  return res.json(otherList);
}
