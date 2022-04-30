const Prisma = require('.');

const loginAndRegister = async req => {
  const { sub } = req; // TODO shall we use sub from auth0? // TODO email is already @unique, if duplicate prisma throws an error
  const user = await Prisma.user.findUnique({ where: { sub } });
  if (!user) {
    try {
      const newUser = await Prisma.user.create({
        data: { ...req },
        select: { email: true, name: true, address: true, phone_number: true }
      });
      return newUser;
    } catch (err) {
      return err;
    }
  } else return ({ email, name, address, phone_number } = user);
};

const updateDetails = async req => {
  const { sub, name, address, phone_number } = req; // TODO check the sub from auth0 is always the same for a given user or changes at every login
  try {
    const user = await Prisma.user.update({
      where: { sub },
      data: { name, address, phone_number }, // in prisma, if a field value is undefined no changes are made
      select: { email: true, name: true, address: true, phone_number: true }
    });
    return user;
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
