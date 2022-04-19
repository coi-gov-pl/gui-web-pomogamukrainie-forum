import * as express from 'express';
import { lawList } from '../data';

export function lawListGet(req: express.Request, res: express.Response): express.Response {
  return res.json(lawList);
}

export function lawGet(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  const law = lawList.content?.find((el) => el.id === Number(id));
  if (law) {
    return res.json(law);
  } else {
    res.status(404);
    return res.send();
  }
}
