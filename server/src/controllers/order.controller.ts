import { Request, Response } from 'express';
import {
  getAllOrders,
  getUserOrders,
  updateOrder,
  generateOrder,
  shipOrder,
  deleteOrder
} from '../models/order.model';

export const findAllOrdersController = async (req: Request, res: Response) => {
  try {
    const allOrders = await getAllOrders();
    res.status(200);
    res.send(allOrders);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.sendStatus(500);
  }
};

export const findUserOrdersController = async (req: Request, res: Response) => {
  try {
    const userOrders = await getUserOrders(req);
    res.status(200);
    res.send(userOrders);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const newOrder = await generateOrder(req);
    res.status(201);
    res.send(newOrder);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const updateOrderController = async (req: Request, res: Response) => {
  try {
    const updated = await updateOrder(req);
    res.status(200);
    res.send(updated);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const shipOrderController = async (req: Request, res: Response) => {
  try {
    const shipped = await shipOrder(req);
    res.status(200);
    res.send(shipped);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const deleteOrderController = async (req: Request, res: Response) => {
  try {
    await deleteOrder(req);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
