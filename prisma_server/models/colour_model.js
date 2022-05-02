const Prisma = require('.');

const addColour = async req => {
  const { colour, scents } = req;
  try {
    const newColor = await Prisma.colour.create({
      data: {
        colour: colour,
        scents: {
          connectOrCreate: scents.map(scent => {
            return { where: { name: scent }, create: { name: scent } };
          })
        }
      },
      include: { scents: true }
    });
    return newColor;
  } catch (error) {
    throw new Error('\nFailed in the model\n');
  }
};

const deleteColour = async id => {
  try {
    await Prisma.colour.delete({ where: { id: +id } });
    return;
  } catch (err) {
    throw new Error('\nFailed in the model\n');
  }
};

module.exports = { addColour, deleteColour };
