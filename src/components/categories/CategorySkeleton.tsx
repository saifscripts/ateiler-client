import { Skeleton, SkeletonLine } from 'keep-react';

export default function CategorySkeleton() {
  return (
    <div className="container">
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <Skeleton key={index} className="w-full">
            <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 rounded-lg bg-white p-2 sm:p-3 md:p-4">
              <SkeletonLine className="rounded-md w-full aspect-square" />
              <SkeletonLine className="h-4 w-full rounded-md" />
            </div>
          </Skeleton>
        ))}
      </div>
    </div>
  );
}
