//fetch method for the products

const url = 'http://localhost:3000';

export const newUser = (user) => {
  return fetch(`${url}/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}
