import { Request, Response } from 'express';
import {
  returnAllWithColours,
  returnOneFull,
  returnSingleCombo,
  updateProduct,
  addProductWithColours
} from '../models/product.model';

// TODO rename function
export const findAllProductsController = async (req: Request, res: Response) => {
  try {
    const allProducts = await returnAllWithColours();
    res.status(200)
    res.send(allProducts);
  } catch (err) {
    console.error(err);
    res.status(500)
    res.sendStatus(500)
  }
};

export const findProductWithDetailsController = async (req: Request, res: Response) => {
  try {
    const product = await returnOneFull(req.params.id);
    res.status(200)
    res.send(product);
  } catch (err) {
    console.error(err);
    res.status(500)
    res.sendStatus(500)
  }
};

export const findProductWithComboController = async (req: Request, res: Response) => {
  try {
    const product = await returnSingleCombo(req.params.id, req.body);
    res.status(201)
    res.send(product);
  } catch (err) {
    console.error(err);
    res.status(500)
    res.sendStatus(500)
  }
};

// TODO add controller for the admin to add a product
export const addProductController = async (req: Request, res: Response) => {
  try {
    const newProduct = await addProductWithColours(req.body);
    res.status(201)
    res.send(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500)
    res.sendStatus(500)
  }
};

export const updateProductController = async (req: Request, res: Response) => {
  try {
    const updated = await updateProduct(req.params.id, req.body);
    res.status(200)
    res.send(updated);
  } catch (err) {
    console.error(err);
    res.status(500)
    res.sendStatus(500)
  }
};