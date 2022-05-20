import { Request, Response } from 'express';
import {
  returnAllWithColours,
  returnOneFull,
  returnSingleCombo,
  updateProduct,
  addProductWithColours
} from '../models/product.model';

export const findAllProductsController = async (
  req: Request,
  res: Response
) => {
  try {
    const allProducts = await returnAllWithColours();
    res.status(200);
    res.send(allProducts);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const findProductWithDetailsController = async (
  req: Request,
  res: Response
) => {
  try {
    const product = await returnOneFull(req);
    res.status(200);
    res.send(product);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const findProductWithComboController = async (
  req: Request,
  res: Response
) => {
  try {
    const product = await returnSingleCombo(req);
    res.status(200);
    res.send(product);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const addProductController = async (req: Request, res: Response) => {
  try {
    const newProduct = await addProductWithColours(req);
    res.status(201);
    res.send(newProduct);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const updateProductController = async (req: Request, res: Response) => {
  try {
    const updated = await updateProduct(req);
    res.status(200);
    res.send(updated);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
