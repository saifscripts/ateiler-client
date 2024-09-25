export interface ICategory {
  _id: string;
  title: string;
  thumbnail: string;
  slug: string;
}

export interface IBrand {
  _id: string;
  name: string;
  thumbnail: string;
}

export interface IProduct {
  _id: string;
  name: string;
  category: ICategory;
  description: string;
  imageUrls: string[];
  price: number;
  stockQuantity: number;
  brand: IBrand;
  rating: number;
  isDeleted: boolean;
}
