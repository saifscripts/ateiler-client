import { Badge } from 'keep-react';

export default function StockBadge({
  children: stockQuantity,
}: {
  children: number;
}) {
  return (
    <Badge
      color={Number(stockQuantity) > 0 ? 'secondary' : 'error'}
      variant="base"
      className="text-[10px] py-1 h-auto rounded-md"
    >
      {Number(stockQuantity) > 0 ? `Stock: ${stockQuantity}` : 'Out of Stock'}
    </Badge>
  );
}
