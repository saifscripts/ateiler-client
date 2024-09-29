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
import { ICategory } from '../../interfaces';
import { useGetCategoriesQuery } from '../../redux/features/categories/categoryApi';

export default function CategoryList() {
  const { data: categories, isLoading } = useGetCategoriesQuery('');

  return (
    <Table className="max-w-sm">
      <TableHeader>
        <TableRow>
          <TableHead className="bg-metal-900 text-metal-50">
            <div>Thumbnail</div>
          </TableHead>
          <TableHead className="bg-metal-900 text-metal-50">
            <div>Title</div>
          </TableHead>
        </TableRow>
      </TableHeader>

      {isLoading ? (
        <SkeletonBody />
      ) : (
        <TableBody>
          {categories?.data?.length ? (
            categories?.data?.map((item: ICategory) => (
              <TableRow key={item._id}>
                <TableCell>
                  <img className="size-8" src={item.thumbnail} alt="" />
                </TableCell>
                <TableCell>{item.title}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="text-center" colSpan={2}>
                No Categories Found
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
