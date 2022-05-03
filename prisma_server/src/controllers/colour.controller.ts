import { Request, Response } from 'express';
import { addColour, deleteColour } from '../models/colour.model';


export const addColourController = async (req: Request, res: Response) => {
  try {
    const newColorWithScents = await addColour(req.body);
    res.status(201)
    res.send(newColorWithScents);
  } catch (err) {
    console.error(err);
    res.sendStatus(400)
  }
};

export const deleteColourController = async (req: Request, res: Response) => {
  try {
    await deleteColour(req.params.id);
    res.status(204);
    res.send('deleted!')
  } catch (err) {
    console.error(err);
    res.sendStatus(400)
  }
};
