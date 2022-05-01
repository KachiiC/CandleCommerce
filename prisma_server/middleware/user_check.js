const Prisma = require('../models/index');

const getUserIdIfExists = async (req, res, next) => {
  try {
    const { sub } = req.body;
    req.body.custId = await Prisma.user.findUnique({
      where: { sub },
      select: { id: true }
    });
    next();
  } catch (err) {
    return res.sendStatus(404);
  }
};

const checkForAdminRole = async (req, res, next) => {
  try {
    const { sub } = req.body;
    const user = await Prisma.user.findUnique({
      where: { sub },
      select: { role: true }
    });
    user.role === 'ADMIN'
      ? next()
      : res.status(400).send("You're not allowed to perform this action!");
  } catch (err) {
    return res.sendStatus(404);
  }
};

module.exports = { getUserIdIfExists, checkForAdminRole };
