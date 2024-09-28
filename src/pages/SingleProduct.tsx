import { Badge, Button } from 'keep-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../features/products/Rating';
import { cn } from '../lib/cn';
import { useGetSingleProductQuery } from '../redux/features/products/productApi';

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const product = data?.data;
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    setSelectedImage(product?.imageUrls[0]);
  }, [product]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className=" bg-white rounded-lg p-6 my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full flex flex-col gap-6 items-center justify-center p-6">
          <div
            className="w-[80%] aspect-square"
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
            <Badge color="success" className="text-[10px] px-3 py-1 h-auto">
              {product?.category?.title}
            </Badge>
            <Badge color="primary" className="text-[10px] px-3 py-1 h-auto">
              {product.brand.name}
            </Badge>
            <Badge
              color={Number(product?.stockQuantity) > 0 ? 'secondary' : 'error'}
              className="text-[10px] px-3 py-1 h-auto"
            >
              {Number(product?.stockQuantity) > 0
                ? `Stock: ${product?.stockQuantity}`
                : 'Out of Stock'}
            </Badge>
          </div>

          <div className="flex gap-4 mt-4">
            <Button color="secondary">Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
