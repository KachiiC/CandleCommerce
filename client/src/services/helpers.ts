import { User } from '@auth0/auth0-react';

export const sanitiseUserData = (user: User) => {
  return {
    email: user.email,
    sub: user.sub,
    name: user.nickname
  };
};
