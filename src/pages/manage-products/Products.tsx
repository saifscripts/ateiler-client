import { ProductList, ProductListHeader } from '../../features/product-list';
import { useGetProductsQuery } from '../../redux/features/products/productApi';

const Products = () => {
  const { data } = useGetProductsQuery('');
  return (
    <>
      <ProductListHeader totalProduct={data?.data?.length} />
      <ProductList products={data?.data} />
    </>
  );
};

export default Products;
