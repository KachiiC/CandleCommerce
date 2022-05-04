import { app, server } from '../../index';
import request from 'supertest';
import { newColour, newColourWithScents } from './test.data';
import prisma from '../../models/index';

// group test using describe
describe('colour route', () => {
  afterAll(() => {
    prisma.scent
      .delete({ where: { name: 'Enchanted Jasmine' } })
      .then(() => server.close());
  });

  describe('POST /colour', () => {
    it('returns status code 201 and the newly created colour if passed a new colour', async () => {
      const res = await request(app).post('/colour').send(newColour);
      // toEqual recursively checks every field of an object or array.

      expect(res.statusCode).toEqual(201);
      expect(res.text.includes(',"colour":"Gold"}')).toBe(true);
    });
    it('returns the new colour with the connected scents', async () => {
      const res = await request(app).post('/colour').send(newColourWithScents);
      expect(res.statusCode).toEqual(201);
      expect(res.text.includes('"colour":"Silver"')).toBe(true);
      expect(res.text.includes('"name":"Bubblegum"}')).toBe(true);
      expect(res.text.includes('"name":"French Pear"}')).toBe(true);
      expect(res.text.includes('"name":"French Vanilla"}')).toBe(true);
      expect(res.text.includes('"name":"Fresh Linen"}')).toBe(true);
      expect(res.text.includes('"name":"Pomegranate Noir"}')).toBe(true);
      expect(res.text.includes('"name":"Lime Basil & Mandarin"')).toBe(true);
      expect(res.text.includes('"name":"Enchanted Jasmine"')).toBe(true);
      expect(res.text.includes('"name":"Tropical Mango"')).toBe(false);
    });

    it('returns bad request if body is missing', async () => {
      const res = await request(app).post('/colour').send();
      expect(res.statusCode).toEqual(400);
    });
  });

  describe('DELETE /colour/:colName', () => {
    it('returns status 204 if successfully deleting a colour', async () => {
      const res = await request(app).delete(`/colour/${newColour.colour}`);
      expect(res.statusCode).toEqual(204);
      const resTwo = await request(app).delete(
        `/colour/${newColourWithScents.colour}`
      );
      expect(resTwo.statusCode).toEqual(204);
    });

    it('returns status 400 if no colour to delete', async () => {
      const resOne = await request(app).delete(`/colour/${newColour.colour}`);
      expect(resOne.statusCode).toEqual(400);
    });
  });
});
