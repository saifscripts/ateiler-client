/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AppForm from '../../components/form/AppForm';
import {
  AddProductHeader,
  GeneralInformation,
  PriceInformation,
  ProductCategory,
  ProductImage,
  StockInformation,
} from '../../features/products';
import { displayToast } from '../../lib/toast';
import { useUploadImageMutation } from '../../redux/features/imageUpload/imageUploadApi';
import { useCreateProductMutation } from '../../redux/features/products/productApi';
import { ProductSchema } from '../../validations/product.validation';

const defaultValues = {
  name: '',
  category: '',
  description: '',
  price: '',
  discount: '',
  stockQuantity: '',
  brand: '',
  imageUrls: [],
};

const AddProduct = () => {
  const [createProduct] = useCreateProductMutation();
  const [uploadImage] = useUploadImageMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (productData) => {
    const uploadPromises = productData.imageUrls.map((image: string) =>
      uploadImage(image)
    );

    productData.imageUrls = (await Promise.all(uploadPromises)).map(
      (item: any) => item?.data?.data?.url
    );

    const result = await createProduct(productData);

    displayToast(result, 'Product added successfully!', {
      action: {
        label: 'See all products',
        onClick: () => navigate('/manage-products/products'),
      },
    });

    return result?.data?.success; // reset form
  };

  return (
    <AppForm
      schema={ProductSchema}
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      className="text-metal-700 space-y-0"
    >
      <AddProductHeader />
      <div className="p-4 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 h-[calc(100vh-144px)] overflow-y-scroll">
        <div className="grid grid-cols-1 gap-4 h-max">
          <GeneralInformation />
          <PriceInformation />
        </div>
        <div className="grid grid-cols-1 gap-4 h-max">
          <ProductImage />
          <ProductCategory />
          <StockInformation />
        </div>
      </div>
    </AppForm>
  );
};

export default AddProduct;
