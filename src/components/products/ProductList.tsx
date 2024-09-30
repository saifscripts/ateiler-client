import {
  Skeleton,
  SkeletonLine,
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
import { useGetProductsQuery } from '../../redux/features/products/productApi';
import DeleteModal from './DeleteModal';

export default function ProductList() {
  const { data: products, isLoading } = useGetProductsQuery({});

  return (
    <div className="h-[calc(100svh-128px)] overflow-y-scroll p-4">
      <div className="overflow-hidden rounded-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-metal-500 text-metal-50">
                <div>Thumbnail</div>
              </TableHead>
              <TableHead className="bg-metal-500 text-metal-50">
                <div>Product Name</div>
              </TableHead>
              <TableHead className="bg-metal-500 text-metal-50">
                <div>Brand</div>
              </TableHead>
              <TableHead className="bg-metal-500 text-metal-50">
                <div>Price</div>
              </TableHead>
              <TableHead className="bg-metal-500 text-metal-50">
                <div>Category</div>
              </TableHead>
              <TableHead className="bg-metal-500 text-metal-50">
                <div>Stock</div>
              </TableHead>
              <TableHead className="bg-metal-500 text-metal-50">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          {isLoading ? (
            <SkeletonBody />
          ) : (
            <TableBody>
              {products?.data?.length ? (
                products?.data?.map((item: IProduct) => (
                  <TableRow key={item?._id} className="hover:bg-gray-50">
                    <TableCell>
                      <div
                        style={{
                          backgroundImage: `url("${item?.imageUrls[0]}")`,
                        }}
                        className="bg-cover bg-center bg-no-repeat rounded-sm size-8"
                      ></div>
                    </TableCell>
                    <TableCell>{item?.name}</TableCell>
                    <TableCell>{item?.brand?.name}</TableCell>
                    <TableCell>{Number(item?.price).toFixed(2)}</TableCell>
                    <TableCell>{item?.category?.title}</TableCell>
                    <TableCell>{item?.stockQuantity}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Link
                          className="hover:bg-primary-50 p-1 rounded-md"
                          to={`/manage-products/update-product/${item?._id}`}
                        >
                          <MdEdit className="text-primary-500 cursor-pointer text-2xl" />
                        </Link>
                        <DeleteModal id={item?._id} name={item?.name} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    No products found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </div>
    </div>
  );
}

function SkeletonRow() {
  return (
    <TableRow>
      <TableCell>
        <Skeleton>
          <SkeletonLine className="h-4 w-24" />
        </Skeleton>
      </TableCell>
      <TableCell>
        <Skeleton>
          <SkeletonLine className="h-4 w-24" />
        </Skeleton>
      </TableCell>
      <TableCell>
        <Skeleton>
          <SkeletonLine className="h-4 w-20" />
        </Skeleton>
      </TableCell>
      <TableCell>
        <Skeleton>
          <SkeletonLine className="h-4 w-16" />
        </Skeleton>
      </TableCell>
      <TableCell>
        <Skeleton>
          <SkeletonLine className="h-4 w-12" />
        </Skeleton>
      </TableCell>
      <TableCell>
        <Skeleton>
          <SkeletonLine className="h-4 w-16" />
        </Skeleton>
      </TableCell>
      <TableCell>
        <Skeleton>
          <SkeletonLine className="h-4 w-20" />
        </Skeleton>
      </TableCell>
      <TableCell>
        <Skeleton>
          <SkeletonLine className="h-4 w-12" />
        </Skeleton>
      </TableCell>
      <TableCell>
        <Skeleton>
          <SkeletonLine className="h-4 w-16" />
        </Skeleton>
      </TableCell>
      <TableCell>
        <Skeleton className="flex gap-2">
          <SkeletonLine className="p-1 rounded-md size-8" />
          <SkeletonLine className="p-1 rounded-md size-8" />
        </Skeleton>
      </TableCell>
    </TableRow>
  );
}

function SkeletonBody() {
  return (
    <TableBody>
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
    </TableBody>
  );
}
