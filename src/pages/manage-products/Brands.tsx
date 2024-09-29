import { BrandList, Header } from '../../features/brands';

export default function Brands() {
  return (
    <div>
      <Header />
      <div className="p-4">
        <BrandList />
      </div>
    </div>
  );
}
