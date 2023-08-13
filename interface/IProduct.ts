export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  weight?: number;
  description: string;
  composition?: string;
  kcal?: number;
  type?: string;
  count: number; 
}
