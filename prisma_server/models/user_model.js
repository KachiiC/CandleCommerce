const Prisma = require('.');

const loginAndRegister = async req => {
  console.log('IN MODEL', req);
  const { sub } = req; // TODO shall we use sub from auth0? // TODO email is already @unique, if duplicate prisma throws an error
  const user = await Prisma.user.findUnique({ where: { sub } });
  if (!user) {
    try {
      const createdUser = await Prisma.user.create({
        data: { ...req }
      });
      return ({ email, name, address, phone_number } = createdUser);
    } catch (err) {
      return err;
    }
  } else return ({ email, name, address, phone_number } = user);
};

const updateDetails = async req => {
  const { sub, name, address, phone_number } = req; // TODO shall we use the sub?
  try {
    const user = await Prisma.user.update({
      where: { sub },
      data: { name, address, phone_number } // in prisma, if a field value is undefined no changes are made
    });
    console.log(user);
    const updatedUser = {
      email: user.email,
      name: user.name,
      address: user.address,
      phone_number: user.phone_number
    };
    return updatedUser;
  } catch (err) {
    return err;
  }
};

// IS IT NECESSARY ?
// const index = async req => {
//   try {
//     const { email } = req.body; // TODO shall we use auth0 instead?
//     const user = await Prisma.user.findUnique({ where: { email } });
//     return ({ email, address } = user);
//   } catch (err) {
//     return err;
//   }
// };

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

module.exports = { loginAndRegister, updateDetails };
