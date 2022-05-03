import { NextFunction, Request, Response } from 'express';
import Prisma from '../models';


export const getUserIdIfExists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { sub } = req.body;
    req.body.custId = await Prisma.user.findUnique({
      where: { sub },
      select: { id: true }
    });
    next();
  } catch (err) {
    return res.sendStatus(404);
  }
};

export const checkForAdminRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { sub } = req.body;
    const user = await Prisma.user.findUnique({
      where: { sub },
      select: { role: true }
    });
    if (user.role === 'ADMIN') {
      next()
    } else {
      res.status(400)
      res.send("You're not allowed to perform this action!");
    }
  } catch (err) {
    return res.sendStatus(404);
  }
};
