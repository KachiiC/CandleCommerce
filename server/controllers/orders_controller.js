const { Order } = require('../models/products')

async function index (req, res) {
  try {
    const allOrders = await Order.find();
    res.status(200);
    res.send(allOrders);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

async function generate (req, res) {
  try {
    const {submittedBy, resolved} = req.body;
    const newOrder = await Order.create({submittedBy, resolved});
    res.status(201);
    res.send(newOrder)
  } catch (err) {
    console.error(err);
    res.status(400);
  }
}

//used to change the status of resolved
async function update (req, res) {
  try {
    const {submittedBy, resolved} = req.body;
    //const newOrder = await Order.create({submittedBy, resolved});
    res.status(201);
    res.send(newOrder)
  } catch (err) {
    console.error(err);
    res.status(400);
  }
}

async function findUserOrders (req, res) {
  try {
    const {submittedBy} = req.body;
    const userOrders = await Order.find( {submittedBy: submittedBy} ); //find all with a condition?
    res.status(200);
    res.send(userOrders);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

module.exports = { index, generate, findUserOrders, update}