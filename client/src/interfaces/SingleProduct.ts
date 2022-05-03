export interface SingleProduct {
  id: number;
  pictures: string[];
  price: number;
  description: string;
  title: string;
  inventory: number;
  colours: {
    id: number;
    colour: string;
    scents: { id: number; name: string[] };
  }[];
}
