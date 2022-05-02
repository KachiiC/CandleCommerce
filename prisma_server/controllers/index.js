const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;

// TODO delete, only for setup test purpose
// async function main() {
//   await prisma.user.create({
//     data: {
//       email: 'tom@tom.com',
//       password: 'password',
//       firstName: 'Tom',
//       lastName: 'Broad',
//       orders: {
//         create: {
//           submittedBy: 'Filo',
//           resolved: false,
//           products: { create: { price: 19.99, title: "Tom' First Candle" } },
//           totalCost: 19.99
//         }
//       }
//     }
//   });

//   const allUsers = await prisma.product.findMany();
//   console.log(allUsers);
// }

// main()
//   .catch(e => console.error(e))
//   .finally(async () => await prisma.$disconnect());
