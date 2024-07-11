import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'keep-react';
import { Link } from 'react-router-dom';
import { IProduct } from './interface';
import Rating from './Rating';

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <Card>
      <CardHeader>
        <img src={product.imageUrl} alt="image" className="w-full rounded-xl" />
      </CardHeader>
      <CardContent className="space-y-3 p-4">
        <CardTitle>{product.name}</CardTitle>
        <div className="flex justify-between items-center">
          <p className="font-semibold">${product.price}</p>
          <Badge color="primary">Brand</Badge>
        </div>
        <CardDescription>{product.description}</CardDescription>
        <Rating value={product.rating} />
        <div className="flex gap-3 items-center">
          <Badge color="success">Category</Badge>
          <Badge color="secondary">
            Quantity: {product.inventory.quantity}
          </Badge>
        </div>
        <CardFooter className="flex gap-3">
          <Button size="xs" color="secondary">
            Add to Cart
          </Button>
          <Link to={`/product/${product._id}`}>
            <Button size="xs" color="secondary" variant="outline">
              View Details
            </Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
