//router.post('/colors', async (req, res) => {
//   console.log('body', req.body);
//   const { colour, scents } = req.body;
//   try {
//     const newColor = await prisma.colour.create({
//       data: { colour: colour, scents: { connect: scents } },
//       include: { scents: true }
//     });
//     console.log('NC', newColor);
//     res.status(201).send(newColor);
//   } catch (error) {
//     res.status(500).send('Function failed');
//   }
// });
