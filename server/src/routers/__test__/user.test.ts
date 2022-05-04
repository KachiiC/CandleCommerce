import request from '.';
import {
  newUser,
  newUserResponse,
  userDetails,
  registeredUserDetailsResponse,
  updatedUserAddressResponse
} from './mocks';
import prisma from '../../models/index';

describe('User route', () => {
  afterAll(() => {
    prisma.user.findUnique({ where: { sub: 'gino123' } }).then(res => {
      prisma.address
        .deleteMany({ where: { userId: res.id } })
        .then(() => prisma.user.delete({ where: { sub: 'gino123' } }));
    });
  });

  describe('PUT /signin', () => {
    it('should throw an error if nothing is passed', async () => {
      const res = await request.put('/signin');
      expect(res.statusCode).toEqual(400);
    });
    it('should register a user if not present and return email and username', async () => {
      const res = await request.put('/signin').send(newUser);
      expect(res.statusCode).toEqual(200);
      expect(
        res.text.includes(JSON.stringify(newUserResponse).slice(1, -1))
      ).toBe(true);
    });
    it('should return the user details if already registered', async () => {
      const res = await request.put('/signin').send({ sub: 'abc123' });
      expect(res.statusCode).toEqual(200);
      expect(
        res.text.includes(
          JSON.stringify(registeredUserDetailsResponse).slice(1, -1)
        )
      ).toBe(true);
    });
  });

  describe('PUT /profile', () => {
    it('should throw an error if nothing is passed', async () => {
      const res = await request.put('/signin');
      expect(res.statusCode).toEqual(400);
    });
    it('should return the updated user details', async () => {
      const res = await request.put('/profile').send(userDetails);
      expect(res.statusCode).toEqual(201);
      expect(
        res.text.includes(
          JSON.stringify(updatedUserAddressResponse).slice(1, -1)
        )
      ).toBe(true);
      expect(res.text.includes(JSON.stringify(userDetails.name))).toBe(true);
      expect(res.text.includes(JSON.stringify(userDetails.phone_number))).toBe(
        true
      );
    });
  });
});
