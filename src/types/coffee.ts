export type CartItem = { productId: number; size: string; milk: string; quantity: number };
export type Order = {
  code: string;
  cafe: string;
  items: CartItem[];
  address: string;
  total: number;
  discount: number;
  status: number;
  created: string;
};
