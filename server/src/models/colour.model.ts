import { Request } from 'express';
import Prisma from '.';
import { addColourModelProps } from './props/colorModelProps';

export const addColour = async (req: Request) => {
  const { colour, scents } = req.body;

  try {
    const newColor = await Prisma.colour.create({
      include: { scents: true },
      data: {
        colour: colour,
        scents: {
          connectOrCreate: scents.map((scent: string) => {
            return {
              where: { name: scent },
              create: { name: scent }
            };
          })
        }
      }
    });

    return newColor;
  } catch (error) {
    console.error(error);
    throw new Error('\nFailed in the model\n');
  }
};

export const deleteColour = async (req: Request) => {
  try {
    const { id } = req.params;
    await Prisma.colour.delete({ where: { id: +id } });
    return;
  } catch (error) {
    console.error(error);
    throw new Error('\nFailed in the model\n');
  }
};
