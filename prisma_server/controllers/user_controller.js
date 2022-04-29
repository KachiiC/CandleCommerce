const Prisma = require('.');

const index = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Prisma.customer.findUnique({ where: { email } });
    //req.session.uid = user._id; // TODO do we need express session?
    res.status(200).send(user); // TODO why are we sending back full user?
  } catch (err) {
    console.error(err);
    res.status(500).send('Invalid credentials');
  }
};

// TODO rename function
const create = async (req, res) => {
  const { email } = req.body;
  console.log('bodycontroller', req.body);
  const user = await Prisma.customer.findUnique({ where: { email } });
  if (user) {
    res.status(409).send('Invalid credentials');
  }
  try {
    const createdUser = await Prisma.customer.create({
      data: { ...req.body }
    });
    //req.session.uid = user._id; // TODO do we need express session?
    res.status(201).send(createdUser); // TODO only send back required fields
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .send({ err, message: 'Something went wrong, please try again' });
  }
};

const updateDetails = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Prisma.customer.update({
      where: { email },
      data: { ...req.body }
    });
    res.status(201).send(user); // TODO only send back necessary data
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .send({ error, message: 'Something went wrong, please try again' });
  }
};

// TODO express session related
const logout = (req, res) => {
  req.session.destroy(error => {
    if (error) {
      console.error(error);
      res.status(500).send('Could not log out, please try again');
    } else {
      res.clearCookie('sid');
      res.status(200).send(true);
    }
  });
};

module.exports = { index, create, updateDetails, logout };
