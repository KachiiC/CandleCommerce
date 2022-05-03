import Prisma from '.';
import { addColourModelProps } from './props/colorModelProps';

export const addColour = async (body: addColourModelProps) => {

  const { colour, scents } = body;

  try {
    const newColor = await Prisma.colour.create({
      include: { scents: true },
      data: {
        colour: colour,
        scents: {
          connectOrCreate: scents.map((scent: any) => {
            return {
              where: { name: scent },
              create: { name: scent }
            };
          })
        }
      },
    });

    return newColor;
  } catch (error) {
    console.error(error)
    throw new Error('\nFailed in the model\n');
  }
};

export const deleteColour = async (id: string | number) => {
  try {
    await Prisma.colour.delete({ where: { id: +id } });
    return;
  } catch (error) {
    console.error(error)
    throw (new Error('\nFailed in the model\n'));
  }
};
