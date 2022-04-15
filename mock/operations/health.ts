import * as express from 'express';
import { healthList } from '../data';

export function healthGet(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  const law = healthList.content?.find((el) => el.id === +id);
  if (law) {
    return res.json(law);
  } else {
    res.status(404);
    return res.send();
  }
}
