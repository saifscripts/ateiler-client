import { useParams } from 'react-router-dom';

const AllProducts = () => {
  const { category } = useParams();
  return <div>Product Category {category}</div>;
};

export default AllProducts;
