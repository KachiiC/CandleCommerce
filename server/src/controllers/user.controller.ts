import { Request, Response } from 'express';
import { loginAndRegister, updateDetails } from '../models/user.model';

export const userCheck = async (req: Request, res: Response) => {
  try {
    const user = await loginAndRegister(req);
    res.status(200);
    res.send(user);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
};

export const userUpdate = async (req: Request, res: Response) => {
  try {
    const user = await updateDetails(req);
    res.status(201);
    res.send(user);
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }
};
