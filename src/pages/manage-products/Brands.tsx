import { BrandList, Header } from '../../features/brands';

export default function Brands() {
  return (
    <div>
      <Header />
      <div className="p-4 h-[calc(100svh-128px)] overflow-y-scroll">
        <BrandList />
      </div>
    </div>
  );
}
