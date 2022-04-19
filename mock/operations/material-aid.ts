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
  const materialAid = materialAidList.content?.find((el) => el.id === Number(id));
  if (materialAid) {
    return res.json(materialAid);
  } else {
    res.status(404);
    return res.send();
  }
}

export function materialAidDelete(req: express.Request, res: express.Response): express.Response {
  const { id } = req.params;
  res.status(204);
  userOffers.content = userOffers.content?.filter((el) => el.id !== Number(id));
  return res.send();
}
