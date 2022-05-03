import { NextFunction, Request, Response } from 'express';
import Prisma from '../models/index';

const checkOrderStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const status = await Prisma.order.findUnique({
      where: { id: req.body.id },
      select: { fulfilled: true }
    });
    if (!status.fulfilled) return next();
    else return res.send('Order already fulfilled, update not possible');
  } catch (err) {
    return res.sendStatus(404);
  }
};

export default checkOrderStatus;
