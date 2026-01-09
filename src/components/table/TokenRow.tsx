export function TokenRow() {
  return (
    <div className="flex items-center justify-between rounded-md bg-[var(--bg-secondary)] px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gray-700" />
        <div className="h-4 w-16 rounded bg-gray-700" />
      </div>

      <div className="h-4 w-14 rounded bg-gray-700" />
    </div>
  );
}
