import request from '.';
import { newProduct } from './mocks';
import prisma from '../../models/index';

describe('product routes', () => {
  afterAll(async () => {
    await prisma.product.delete({ where: { title: 'Candy bar' } });
  });

  describe('POST /product', () => {
    it('Add a new product to the database', async () => {
      const res = await request.post('/product').send(newProduct);
      expect(res.statusCode).toEqual(201);
      expect(res.text.includes(JSON.stringify(newProduct.title))).toBe(true);
    });
  });

  describe('GET /products', () => {
    it('Returns a list of all products in the database', async () => {
      const res = await request.get('/products');
      expect(res.statusCode).toEqual(200);
      expect(res.text.includes(JSON.stringify(newProduct.title))).toBe(true);
    });
  });
});
