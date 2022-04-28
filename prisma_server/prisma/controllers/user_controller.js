const Prisma = require('/');
const bcrypt = require('bcrypt');

const index = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Prisma.user.findUnique({ where: { email } });
    const validated = await bcrypt.compare(password, user.password);
    if (!validated) throw new Error();
    //req.session.uid = user._id; // TODO do we need express session?
    res.status(200).send(user); // TODO why are we sending back full user?
  } catch (err) {
    console.error(err);
    res.status(500).send('Invalid credentials');
  }
};

// TODO rename function
const create = async (req, res) => {
  const { email, password } = req.body;
  const user = await Prisma.user.findUnique({ where: { email } });
  if (user) {
    res.status(409).send('Invalid credentials');
  }
  try {
    if (password === '') throw new Error();
    const hash = await bcrypt.hash(password, 10);
    // const newUser = { // TODO delete if refactor is working
    //   ...req.body,
    //   password: hash
    // };
    const createdUser = await Prisma.user.create({
      data: { ...req.body, password: hash }
    });
    //req.session.uid = user._id; // TODO do we need express session?
    res.status(201).send(createdUser); // TODO only send back required fields
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .send({ error, message: 'Something went wrong, please try again' });
  }
};

// TODO WHY IS THIS HAPPENING? NO INTERACTION WITH DB
// NOTE FROM TOM: call fetch request when a user logs in to access this data
// when I call this for orders, need to check the isAdmin prop too
const userProfile = async (req, res) => {
  try {
    const { _id, email, firstName, lastName } = req.user;
    const user = { _id, email, firstName, lastName };
    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(404).send('User not found');
  }
};

async function updateDetails(req, res) {
  try {
    // const { email, password, firstName, lastName } = req.body;
    const { password, email } = req.body;
    let hash;
    if (password) {
      hash = await bcrypt.hash(password, 10);
    } else {
      hash = password;
    }
    //const filter = { email: email };
    // const update = {
    //   password: hash,
    //   firstName: firstName,
    //   lastName: lastName
    // };
    // let user = await User.findOneAndUpdate(filter, update);
    //user = await User.findOne(filter); // Filo: { new: true} is the way to go
    const user = await Prisma.user.update({
      where: { email },
      data: { ...req.body, password: hash }
    });
    res.status(201).send(user); // TODO only send back necessary data
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .send({ error, message: 'Something went wrong, please try again' });
  }
}

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

module.exports = { index, create, userProfile, updateDetails, logout };
