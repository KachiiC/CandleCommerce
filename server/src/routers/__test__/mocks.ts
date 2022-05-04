export const newColour = {
  colour: 'Gold'
};

export const newColourWithScents = {
  colour: 'Silver',
  scents: [
    'Baltic Amber and Clove',
    'Bubblegum',
    'French Pear',
    'French Vanilla',
    'Fresh Linen',
    'Lime Basil & Mandarin',
    'Pomegranate Noir',
    'Enchanted Jasmine'
  ]
};

export const newProduct = {
  pictures: [
    'https://s3-us-west-2.amazonaws.com/cdn.panda-gossips.com/production/posts/eyecatches/000/001/637/original.jpg?1515668442',
    'https://cdn.shopify.com/s/files/1/0092/5096/3518/products/CA20025_4-TruGlow-Red-Slim-LED-Candles-Christmas_2000x2000.jpg?v=1596631539'
  ],
  price: 18.99,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  title: 'Candy bar',
  colours: [
    'Black',
    'Blue',
    'Cream',
    'Green',
    'Grey',
    'Orange',
    'Pink',
    'Purple',
    'Red',
    'White',
    'Yellow'
  ]
};

export const newUser = {
  name: 'Gino',
  sub: 'gino123',
  email: 'gino@gino.com'
};

export const newUserResponse = {
  email: 'gino@gino.com',
  name: 'Gino'
};

export const userDetails = {
  sub: 'gino123',
  name: 'GinoWithAddress',
  address: {
    address1: '1, remote',
    address2: 'codeworks blvd',
    city: 'Remote',
    country: 'CET',
    postcode: '11111'
  },
  phone_number: '01020304'
};

export const updatedUserAddressResponse = {
  address1: '1, remote',
  address2: 'codeworks blvd',
  country: 'CET',
  city: 'Remote',
  postcode: '11111'
};

export const registeredUserDetailsResponse = {
  email: 'test@test.com',
  name: 'Tester',
  address: [
    {
      id: 3,
      address1: '1 codestreet',
      address2: 'floor1',
      country: 'Yourope',
      city: 'Remote',
      postcode: '0123456',
      userId: 1
    },
    {
      id: 1,
      address1: '1 codestreet',
      address2: 'floor1',
      country: 'Yourope',
      city: 'Remote',
      postcode: '0123456',
      userId: 1
    },
    {
      id: 2,
      address1: '1 codestreet',
      address2: 'floor1',
      country: 'Yourope',
      city: 'Remote',
      postcode: '0123456',
      userId: 1
    }
  ],
  phone_number: '144144144'
};
