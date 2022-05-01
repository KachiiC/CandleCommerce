const Prisma = require('.');

const addColour = (req) => {
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
    res.status(201).send(newColor);
  } catch (error) {
    res.status(500).send('\nFailed in the model\n');
  }
}

const deleteColour = (id) => {
  try {
    await Prisma.colour.delete({where: {id: +id}});
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send('\nFailed in the model\n');
  }
}

module.exports = {addColour, deleteColour};
