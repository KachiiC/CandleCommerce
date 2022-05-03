import { Address } from '@prisma/client';
import Prisma from '.';
import { updateDetailsProps } from './props/userModelProps';

export const loginAndRegister = async (sub: string) => {
  // TODO shall we use sub from auth0? // TODO email is already @unique, if duplicate prisma throws an error
  
  const user = await Prisma.user.findUnique({
    where: { sub },
    include: { address: true }
  });

  if (!user) {
    try {
      const newUser = await Prisma.user.create({
        data: { sub },
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
  } else return ({ email, name, address, phone_number } = user);
};

export const updateDetails = async (body: updateDetailsProps) => {

  // TODO check the sub from auth0 is always the same for a given user or changes at every login
  const { sub, name, address, phone_number } = body; 

  try {
    let user: { address: Address[]; email: string; name: string; phone_number: string; };
    if (address && address.id) {
      user = await Prisma.user.update({
        where: { sub },
        data: {
          name,
          address: { update: { where: { id: address.id }, data: address } },
          phone_number
        }, // in prisma, if a field value is undefined no changes are made
        select: { email: true, name: true, address: true, phone_number: true }
      });
    } else {
      user = await Prisma.user.update({
        where: { sub },
        data: {
          name,
          address: { create: address },
          phone_number
        }, // in prisma, if a field value is undefined no changes are made
        select: { email: true, name: true, address: true, phone_number: true }
      });
    }
    return user;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};
