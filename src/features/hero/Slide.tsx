import { Link } from 'react-router-dom';

interface ISlideProps {
  backgroundImage: string;
  to: string;
}

const Slide = ({ backgroundImage, to }: ISlideProps) => {
  return (
    <Link to={to}>
      <div className="w-full h-96">
        <img
          src={backgroundImage}
          alt="Sale"
          className="w-full bg-cover bg-center bg-no-repeat"
        />
      </div>
    </Link>
  );
};

export default Slide;
