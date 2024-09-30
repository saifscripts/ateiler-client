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
import { IBrand } from '../../interfaces';
import { useGetBrandsQuery } from '../../redux/features/brands/brandApi';

export default function BrandList() {
  const { data: brands, isLoading } = useGetBrandsQuery('');

  return (
    <Table className="max-w-sm">
      <TableHeader>
        <TableRow>
          <TableHead className="bg-metal-500 text-metal-50">
            <div>Logo</div>
          </TableHead>
          <TableHead className="bg-metal-500 text-metal-50">
            <div>Name</div>
          </TableHead>
        </TableRow>
      </TableHeader>
      {isLoading ? (
        <SkeletonBody />
      ) : (
        <TableBody>
          {brands?.data?.length ? (
            brands?.data?.map((item: IBrand) => (
              <TableRow key={item._id} className="hover:bg-gray-50">
                <TableCell>
                  <img className="size-8" src={item.logo} alt="" />
                </TableCell>
                <TableCell>{item.name}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="text-center" colSpan={2}>
                No Brands Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      )}
    </Table>
  );
}

function SkeletonRow() {
  return (
    <TableRow>
      <TableCell>
        <Skeleton>
          <SkeletonLine className="h-4 w-8" />
        </Skeleton>
      </TableCell>
      <TableCell>
        <Skeleton>
          <SkeletonLine className="h-4 w-24" />
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
