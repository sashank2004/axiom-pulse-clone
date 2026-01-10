import { TokenCardSkeleton } from "./TokenCardSkeleton";

interface TokenColumnSkeletonProps {
  title: string;
}

export function TokenColumnSkeleton({ title }: TokenColumnSkeletonProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-medium text-gray-300">{title}</h2>

      <div className="flex flex-col gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <TokenCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
