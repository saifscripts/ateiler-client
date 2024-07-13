import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'keep-react';
import { useGetCategoriesQuery } from '../../redux/features/categories/categoryApi';

interface ICategory {
  _id: string;
  title: string;
  thumbnail: string;
}

const CategoryList = () => {
  const { data: categories } = useGetCategoriesQuery('');

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <div className="max-w-[136px]">Category Thumbnail</div>
          </TableHead>
          <TableHead>
            <div>Category Title</div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories?.data?.map((item: ICategory) => (
          <TableRow key={item._id}>
            <TableCell>
              <img className="size-20" src={item.thumbnail} alt="" />
            </TableCell>
            <TableCell>{item.title}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoryList;
