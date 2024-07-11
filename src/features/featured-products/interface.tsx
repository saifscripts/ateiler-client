export interface IInventory {
  quantity: number;
  inStock: boolean;
}

export interface IProduct {
  _id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
  inventory: IInventory;
  brand: string;
  rating: number;
  isDeleted: boolean;
}
