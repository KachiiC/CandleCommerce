const { loginAndRegister, updateDetails } = require('../models/user_model');

const userCheck = async (req, res) => {
  try {
    const user = await loginAndRegister(req.body);
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .send({ err, message: 'Something went wrong, please try again' });
  }
};

const userUpdate = async (req, res) => {
  try {
    const user = await updateDetails(req.body);
    res.status(201).send(user);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .send({ err, message: 'Something went wrong, please try again' });
  }
};

module.exports = { userCheck, userUpdate };
