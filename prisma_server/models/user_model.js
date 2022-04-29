const Prisma = require('.');

const index = async (req, res) => {
  try {
    const { email } = req.body; // TODO shall we use auth0 instead?
    const user = await Prisma.customer.findUnique({ where: { email } });
    return ({ email, address } = user);
  } catch (err) {
    return err;
  }
};

// TODO rename function
const create = async (req, res) => {
  // const { email } = req.body; // TODO shall we use sub from auth0? // TODO email is already @unique, if duplicate prisma throws an error
  // const user = await Prisma.customer.findUnique({ where: { email } });
  // if (!user) {
  try {
    const createdUser = await Prisma.customer.create({
      data: { ...req.body }
    });
    return ({ email, address } = createdUser);
  } catch (err) {
    return err;
  }
  // }
};

const updateDetails = async (req, res) => {
  const { email } = req.body; // TODO shall we use the sub?
  try {
    const user = await Prisma.customer.update({
      where: { email },
      data: { ...req.body }
    });
    return ({ email, address } = user); // TODO only send back necessary data
  } catch (err) {
    return err;
  }
};

// // TODO express session related
// const logout = (req, res) => {
//   req.session.destroy(error => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Could not log out, please try again');
//     } else {
//       res.clearCookie('sid');
//       res.status(200).send(true);
//     }
//   });
// };

module.exports = { index, create, updateDetails, logout };
