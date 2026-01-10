export function TokenCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl bg-[var(--bg-secondary)] p-4">
      <div className="grid grid-cols-[72px_1fr_auto] gap-4">
        {/* LEFT */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-12 w-12 rounded-lg bg-gray-700" />
          <div className="h-3 w-12 rounded bg-gray-700" />
        </div>

        {/* CENTER */}
        <div className="space-y-2">
          <div className="h-4 w-3/4 rounded bg-gray-700" />
          <div className="h-3 w-1/3 rounded bg-gray-700" />
          <div className="h-3 w-1/2 rounded bg-gray-700" />
        </div>

        {/* RIGHT */}
        <div className="space-y-2">
          <div className="h-3 w-16 rounded bg-gray-700" />
          <div className="h-3 w-12 rounded bg-gray-700" />
          <div className="h-3 w-10 rounded bg-gray-700" />
        </div>
      </div>
    </div>
  );
}
