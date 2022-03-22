import * as express from 'express';
import { materialAidOffer, materialAidList, userOffers } from '../data';

export function materialAidPost(req: express.Request, res: express.Response): express.Response {
  return res.json(materialAidOffer(req.body));
}

export function materialAidListGet(req: express.Request, res: express.Response): express.Response {
  return res.json(materialAidList);
}

export function materialAidGet(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  return res.json(materialAidList.content?.find((el) => el.id === +id));
}

export function materialAidDelete(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  res.status(204);
  userOffers.content = userOffers.content?.filter((el) => el.id !== +id);
  return res.send();
}
