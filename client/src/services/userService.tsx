export interface UserAuth {
  user: {
    sub: string;
    name?: string;
    address?: {
      id?: number;
      address1?: string;
      address2?: string;
      city?: string;
      country?: string;
      post_code?: string;
    };
    phone_number?: string;
  };
}

export const loginOrRegister = (user: UserAuth) => {
  return fetch(process.env.BASE_URL + '/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(response =>
      response.status < 400 ? response : Promise.reject(response)
    )
    .then(response => response.json())
    .catch(err => console.error(err));
};

export const updateUserDetails = (user: UserAuth) => {
  return fetch(process.env.BASE_URL + '/profile', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .catch(err => console.error(err));
};
