import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'keep-react';
import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces';
import DeleteModal from './DeleteModal';

const ProductList = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="h-[calc(100vh-144px)] overflow-y-scroll p-6">
      <Table className="rounded-none">
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="w-20">Thumbnail</div>
            </TableHead>
            <TableHead>
              <div className="w-28">Product Name</div>
            </TableHead>
            <TableHead>
              <div className="w-16">Price</div>
            </TableHead>
            <TableHead>
              <div className="w-16">Category</div>
            </TableHead>
            <TableHead>
              <div className="w-12">Rating</div>
            </TableHead>
            <TableHead>
              <div className="w-[60px]">Stock</div>
            </TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((item) => (
            <TableRow key={item._id}>
              <TableCell>
                <div
                  style={{ backgroundImage: `url("${item.imageUrls[0]}")` }}
                  className="bg-cover bg-center bg-no-repeat rounded-sm w-16 aspect-video "
                ></div>
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.category.title}</TableCell>
              <TableCell>{item.rating}</TableCell>
              <TableCell>{item.rating}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Link
                    className="hover:bg-primary-50 p-1 rounded-md"
                    to={`/manage-products/update-product/${item._id}`}
                  >
                    <MdEdit className="text-primary-500 cursor-pointer text-2xl" />
                  </Link>
                  <DeleteModal id={item._id} name={item.name} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductList;
