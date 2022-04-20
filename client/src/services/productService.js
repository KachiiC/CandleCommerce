//fetch method for the products

const url = 'http://localhost:3000';

export const getProducts = (product) => {
  return fetch(`${url}/`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(product)
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}