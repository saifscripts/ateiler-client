import { Badge } from 'keep-react';

export default function CategoryBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Badge
      color="success"
      variant="base"
      className="text-[10px] py-1 h-auto rounded-md"
    >
      {children}
    </Badge>
  );
}
