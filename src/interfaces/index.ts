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
  price: number;
  discount: string;
  stockQuantity: number;
  brand: IBrand;
  rating: number;
  isDeleted: boolean;
}

export interface IRoute {
  icon: React.ElementType;
  name: string;
  path: string;
  dropdown?: IRoute[];
}
