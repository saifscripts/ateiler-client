import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Skeleton,
  SkeletonLine,
} from 'keep-react';

export default function ProductSkeleton() {
  return (
    <div className="bg-white p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton key={index} className="w-full">
          <Card className="w-full p-4 flex flex-col justify-between gap-4">
            <CardHeader className="space-y-2">
              <SkeletonLine className="size-40 w-full" />
              <SkeletonLine className="h-6 w-[70%]" />

              <div className="flex gap-2 mb-4">
                <SkeletonLine className="h-4 w-16" />
                <SkeletonLine className="h-4 w-16" />
              </div>
            </CardHeader>

            <CardContent className="space-y-2 p-0">
              <SkeletonLine className="h-2 w-full" />
              <SkeletonLine className="h-2 w-1/2 mb-4" />
              <div className="flex justify-between items-center">
                <SkeletonLine className="h-3 w-20" />
                <SkeletonLine className="h-4 w-16" />
              </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <SkeletonLine className="h-4 w-12" />
              <SkeletonLine className="h-8 w-20" />
            </CardFooter>
          </Card>
        </Skeleton>
      ))}
    </div>
  );
}
