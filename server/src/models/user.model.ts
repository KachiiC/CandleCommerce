import { Address } from '@prisma/client';
import { Request } from 'express';
import Prisma from '.';

export const loginAndRegister = async (req: Request) => {
  const { sub } = req.body;
  const user = await Prisma.user.findUnique({
    where: { sub },
    select: {
      email: true,
      name: true,
      address: true,
      phone_number: true
    }
  });

  if (!user) {
    try {
      const newUser = await Prisma.user.create({
        data: { ...req.body },
        select: {
          email: true,
          name: true,
          address: true,
          phone_number: true
        }
      });
      return newUser;
    } catch (err) {
      console.error(err);
      throw new Error('\nFailed in the model\n');
    }
  } else return user;
};

export const updateDetails = async req => {
  const { sub, name, address, phone_number } = req.body;

  try {
    let user: {
      address: Address[];
      email: string;
      name: string;
      phone_number: string;
    };
    if (address && address.id) {
      user = await Prisma.user.update({
        where: { sub },
        data: {
          name,
          address: { update: { where: { id: address.id }, data: address } },
          phone_number
        },
        select: { email: true, name: true, address: true, phone_number: true }
      });
    } else {
      user = await Prisma.user.update({
        where: { sub },
        data: {
          name,
          address: { create: address },
          phone_number
        },
        select: { email: true, name: true, address: true, phone_number: true }
      });
    }
    return user;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};
