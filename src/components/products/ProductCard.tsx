import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'keep-react';
import { Link, useNavigate } from 'react-router-dom';
import { IProduct } from '../../interfaces';
import BrandBadge from './badges/BrandBadge';
import CategoryBadge from './badges/CategoryBadge';
import StockBadge from './badges/StockBadge';
import Rating from './Rating';

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/product/${product._id}`)}
      className="w-full max-w-xs mx-auto p-4 flex flex-col justify-between gap-4 cursor-pointer hover:scale-95 transition-all duration-150 border-gray-200"
      data-aos="zoom-in"
      data-aos-duration="300"
    >
      <CardHeader className="space-y-2">
        <div
          style={{ backgroundImage: `url("${product.imageUrls[0]}")` }}
          className="bg-contain bg-center bg-no-repeat rounded-xl size-40 w-full"
        ></div>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <div className="flex gap-2">
          <CategoryBadge>{product?.category?.title}</CategoryBadge>
          <BrandBadge>{product.brand.name}</BrandBadge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 p-0">
        <CardDescription className="text-sm">
          {product.description.substring(0, 60)}...
        </CardDescription>
        <div className="flex justify-between items-center">
          <Rating value={product.rating} />
          <StockBadge>{product.stockQuantity}</StockBadge>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-2 justify-between items-center text-sm">
          <p className="font-bold text-metal-700">${product.price}</p>
        </div>
        <Link to={`/product/${product._id}`}>
          <Button size="sm" color="primary" className="px-3 py-1">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
