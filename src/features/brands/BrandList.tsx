import {
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
  const { data: brands } = useGetBrandsQuery('');

  return (
    <Table className="max-w-sm">
      <TableHeader>
        <TableRow>
          <TableHead className="bg-metal-900 text-metal-50">
            <div>Logo</div>
          </TableHead>
          <TableHead className="bg-metal-900 text-metal-50">
            <div>Name</div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {brands?.data?.length ? (
          brands?.data?.map((item: IBrand) => (
            <TableRow key={item._id}>
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
    </Table>
  );
}
