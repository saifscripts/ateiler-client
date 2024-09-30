import { Badge } from 'keep-react';

export default function BrandBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Badge
      color="primary"
      variant="base"
      className="text-[10px] py-1 h-auto rounded-md"
    >
      {children}
    </Badge>
  );
}
