export interface UserAuth {
  sub: string;
  name?: string;
  email: string;
  address?: {
    id?: number;
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    postcode?: string;
  };
  phone_number?: string;
}
