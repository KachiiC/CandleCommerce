import { sanitiseUserData } from './helpers';
export interface UserAuth {
  userData: {
    sub?: string;
    name?: string;
    address?: {
      id?: number;
      address1?: string;
      address2?: string;
      city?: string;
      country?: string;
      postcode?: string;
    };
    phone_number?: string;
  };
}

export const loginOrRegister = (user: UserAuth) => {
  const loggedUser = sanitiseUserData(user);
  return fetch(process.env.REACT_APP_BASE_URL + '/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loggedUser)
  })
    .then(response =>
      response.status < 400 ? response : Promise.reject(response)
    )
    .then(response => response.json())
    .catch(err => console.error(err));
};

export const updateUserDetails = (user: UserAuth) => {
  return fetch(process.env.REACT_APP_BASE_URL + '/profile', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user.userData)
  })
    .then(response =>
      response.status < 400 ? response : Promise.reject(response)
    )
    .then(response => response.json())
    .catch(err => console.error(err));
};
