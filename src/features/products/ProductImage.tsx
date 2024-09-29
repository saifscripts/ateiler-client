import { ChangeEvent, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { IoCloseSharp } from 'react-icons/io5';
import { TbPhotoUp } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../../redux/features/products/productApi';
import toBase64 from '../../utils/toBase64';

const ProductImage = () => {
  const [images, setImages] = useState<string[]>([]);
  const { id } = useParams();
  const { data: product } = useGetSingleProductQuery(id);

  useEffect(() => {
    setImages(product?.data?.imageUrls || []);
  }, [product]);

  const {
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useFormContext();

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files?.[0]) return;

    const file = e.target.files[0];
    const base64Data = await toBase64(file);
    setImages([...images, base64Data as string]);
    e.target.value = '';
  };

  const handleRemove = (index: number) => {
    const updatedUrls = [...images];
    updatedUrls.splice(index, 1);
    setImages((images) => {
      const updatedUrls = [...images];
      updatedUrls.splice(index, 1);

      if (updatedUrls.length === 0) {
        setError('imageUrls', { message: 'At least one image is required!' });
      }
      return updatedUrls;
    });
  };

  useEffect(() => {
    if (images.length > 0) {
      setValue('imageUrls', images);
      clearErrors('imageUrls');
    } else {
      setValue('imageUrls', []);
    }
  }, [images, setValue, setError, clearErrors]);

  return (
    <div className="bg-white p-4 rounded-md space-y-4 h-max">
      <h5 className="text-body-1 font-semibold">Product Image</h5>
      <div className="grid grid-cols-4 gap-3">
        {images?.map((url, i) => (
          <div
            key={url}
            style={{ backgroundImage: `url("${url}")` }}
            className="bg-cover bg-center bg-no-repeat relative aspect-square rounded-lg"
          >
            <div className="flex justify-center items-center absolute top-0 right-0 z-10 translate-x-1/2 -translate-y-1/2 rounded-full bg-error-600 hover:bg-error-500 size-5 text-white font-bold cursor-pointer">
              <IoCloseSharp onClick={() => handleRemove(i)} />
            </div>
          </div>
        ))}
        {images?.length < 4 && (
          <div className="relative border-2 border-dashed border-metal-500 aspect-square flex flex-col gap-1 justify-center items-center rounded-sm cursor-pointer bg-metal-100">
            <TbPhotoUp className="cursor-pointer" />
            <p className="text-[10px] text-primary-400 cursor-pointer">
              Upload Image
            </p>
            <input
              onChange={handleUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
              type="file"
              accept="image/*"
            />
          </div>
        )}
      </div>
      {errors.imageUrls && (
        <p className="text-error-400 text-sm" role="alert">
          {errors.imageUrls?.message as string}
        </p>
      )}
    </div>
  );
};

export default ProductImage;
