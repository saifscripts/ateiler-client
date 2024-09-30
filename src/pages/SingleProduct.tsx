import { Badge, Button, Skeleton, SkeletonLine } from 'keep-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BrandBadge from '../components/products/badges/BrandBadge';
import CategoryBadge from '../components/products/badges/CategoryBadge';
import StockBadge from '../components/products/badges/StockBadge';
import Rating from '../components/products/Rating';
import { cn } from '../lib/cn';
import { addToCart } from '../redux/features/cart/cartSlice';
import { useGetSingleProductQuery } from '../redux/features/products/productApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export default function SingleProduct() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const product = data?.data;
  const [selectedImage, setSelectedImage] = useState('');
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const quantityAddedToCart = cartItems.find(
    (item) => item?.product?._id === product?._id
  )?.quantity;

  useEffect(() => {
    setSelectedImage(product?.imageUrls[0]);
  }, [product]);

  if (isLoading) return <SingleProductSkeleton />;

  return (
    <div className="container">
      <div className=" bg-white rounded-lg p-6 my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full flex flex-col gap-6 items-center justify-center p-6">
          <div
            className="w-[70%] aspect-square"
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="max-w-full flex gap-2 sm:gap-4 flex-nowrap overflow-x-auto hide-scrollbar">
            {product.imageUrls.map((image: string) => (
              <div
                className={cn(
                  'size-12 sm:size-16 md:size-20 lg:size-24 aspect-square rounded-lg cursor-pointer',
                  selectedImage === image ? 'border-2 border-primary-500' : ''
                )}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center md:items-start">
          <h1 className="text-3xl font-bold text-gray-800 text-center md:text-left">
            {product.name}
          </h1>
          <div className="flex gap-4 items-center">
            <p className="text-xl font-bold text-gray-800">${product.price}</p>
            <Rating value={product.rating} />
          </div>
          <p className="text-sm text-gray-500 text-center md:text-left">
            {product.description}
          </p>
          <div className="flex gap-2">
            <CategoryBadge>{product?.category?.title}</CategoryBadge>
            <BrandBadge>{product.brand.name}</BrandBadge>
            <StockBadge>{product.stockQuantity}</StockBadge>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-4 mt-4 items-center">
            <Button
              onClick={() => dispatch(addToCart(product))}
              color="primary"
              disabled={
                !product.stockQuantity ||
                Number(quantityAddedToCart) >= product.stockQuantity
              }
            >
              Add to cart
            </Button>

            {/* show added quantity at cart */}
            {quantityAddedToCart && (
              <Link to="/cart">
                <Badge color="success" className="text-[10px] px-3 py-1 h-auto">
                  Added to cart: {quantityAddedToCart}
                </Badge>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleProductSkeleton() {
  return (
    <div className="container">
      <Skeleton className=" bg-white rounded-lg p-6 my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full flex flex-col gap-6 items-center justify-center p-6">
          <SkeletonLine className="w-[70%] aspect-square" />
          <div className="max-w-full flex gap-2 sm:gap-4 flex-nowrap overflow-x-auto hide-scrollbar">
            <SkeletonLine className="size-12 sm:size-16 md:size-20 lg:size-24 aspect-square rounded-lg" />
            <SkeletonLine className="size-12 sm:size-16 md:size-20 lg:size-24 aspect-square rounded-lg" />
            <SkeletonLine className="size-12 sm:size-16 md:size-20 lg:size-24 aspect-square rounded-lg" />
            <SkeletonLine className="size-12 sm:size-16 md:size-20 lg:size-24 aspect-square rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center md:items-start">
          <SkeletonLine className="h-8 w-[70%] mb-4" />
          <div className="flex gap-4 items-center mb-8">
            <SkeletonLine className="h-5 w-16" />
            <SkeletonLine className="h-5 w-32" />
          </div>
          <SkeletonLine className="h-4 w-full" />
          <SkeletonLine className="h-4 w-full" />
          <SkeletonLine className="h-4 w-1/2 mb-8" />

          <div className="flex gap-2">
            <SkeletonLine className="h-5 w-16" />
            <SkeletonLine className="h-5 w-16" />
            <SkeletonLine className="h-5 w-16" />
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-4 mt-4 items-center">
            <SkeletonLine className="h-12 w-32" />
          </div>
        </div>
      </Skeleton>
    </div>
  );
}
