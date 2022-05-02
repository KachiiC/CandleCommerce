const { addColour, deleteColour } = require('../models/colour_model');

const addOne = async (req, res) => {
  try {
    const newColorWithScents = await addColour(req.body);
    res.status(201).send(newColorWithScents);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .send({ err, message: 'Something went wrong, please try again' });
  }
};

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteColour(id);
    res.status(204);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .send({ err, message: 'Something went wrong, please try again' });
  }
};

module.exports = { addOne, deleteOne };
