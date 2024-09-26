export interface ICategory {
  _id: string;
  title: string;
  thumbnail: string;
  slug: string;
}

export interface IBrand {
  _id: string;
  name: string;
  logo: string;
}

export interface IProduct {
  _id: string;
  name: string;
  category: ICategory;
  description: string;
  imageUrls: string[];
  price: string;
  discount: string;
  stockQuantity: string;
  brand: IBrand;
  rating: number;
  isDeleted: boolean;
}
