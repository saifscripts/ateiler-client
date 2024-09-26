import { BrandList, Header } from '../../features/brands';

export default function Brands() {
  return (
    <div>
      <Header />
      <div className="p-6">
        <BrandList />
      </div>
    </div>
  );
}
