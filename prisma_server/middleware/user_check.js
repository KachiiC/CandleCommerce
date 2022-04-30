const prisma = require('../models/index');

const getUserIdIfExists = async (req, res, next) => {
  try {
    const { sub } = req.body;
    req.body.custId = await prisma.user.findUnique({
      where: { sub },
      select: { id: true }
    });
    next();
  } catch (err) {
    return res.sendStatus(404);
  }
};

module.exports = { getUserIdIfExists };
