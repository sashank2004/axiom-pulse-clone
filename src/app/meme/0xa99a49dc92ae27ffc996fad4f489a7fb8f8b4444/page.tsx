interface MemePageProps {
  params: {
    address: string;
  };
}

export default function MemePage({ params }: MemePageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-8 space-y-4">
        <h1 className="text-xl font-semibold">
          Token Details
        </h1>

        <div className="text-sm text-gray-400">
          Address:
        </div>

        <div className="break-all text-sm">
          {params.address}
        </div>

        <div className="mt-6 rounded-lg bg-[var(--bg-secondary)] p-6">
          Chart & analytics coming here
        </div>
      </div>
    </main>
  );
}
