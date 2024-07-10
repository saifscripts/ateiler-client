import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { slug } = useParams();

  return <div>SingleProduct: {slug}</div>;
};

export default SingleProduct;
