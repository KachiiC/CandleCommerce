import { Request } from 'express';
import Prisma from '.';

export const addColour = async (req: Request) => {
  try {
    const { colour, scents } = req.body;

    if (scents) {
      const newColourWithScents = await Prisma.colour.create({
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
      return newColourWithScents;
    } else {
      const newColor = await Prisma.colour.create({
        data: { colour }
      });
      return newColor;
    }
  } catch (error) {
    console.error(error);
    throw new Error('\nFailed in the model\n');
  }
};

export const deleteColour = async (req: Request) => {
  try {
    const { colName } = req.params;
    await Prisma.colour.delete({ where: { colour: colName } });
    return;
  } catch (error) {
    console.error(error);
    throw new Error('\nFailed in the model\n');
  }
};
