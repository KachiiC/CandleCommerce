const router = require('express').Router();
const prisma = require('../controllers/index');

// populates one colour at a time connecting or creating related scents
router.post('/colors', async (req, res) => {
  const { colour, scents } = req.body;
  try {
    const newColor = await prisma.colour.create({
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
    res.status(500).send('Function failed');
  }
});

module.exports = router;
