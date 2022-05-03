//fetch method for the products

export const getAllProducts = () => {
  return fetch(process.env.REACT_APP_BASE_URL!)
    .then(response =>
      response.status < 400 ? response : Promise.reject(response)
    )
    .then(response => response.json())
    .catch(err => console.error(err));
};

export const getOneProduct = (id: number) => {
  return fetch(process.env.REACT_APP_BASE_URL + `/product/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response =>
      response.status < 400 ? response : Promise.reject(response)
    )
    .then(response => response.json())
    .catch(err => console.error(err));
};
