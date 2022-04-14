import * as express from 'express';
import { lawList } from '../data';

export function lawGet(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  const law = lawList.content?.find((el) => el.id === +id);
  if (law) {
    return res.json(law);
  } else {
    res.status(404);
    return res.send();
  }
}
