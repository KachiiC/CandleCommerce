const prisma = require('../models/index');

const checkOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.body;
    const status = await prisma.order.findUnique({
      where: { id: +id },
      select: { fulfilled: true }
    });
    if (!status.fulfilled) next();
    else return res.send('Order already fulfilled, update not possible');
  } catch (err) {
    return res.sendStatus(404);
  }
};

module.exports = { checkOrderStatus };
