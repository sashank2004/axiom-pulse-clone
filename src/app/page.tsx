import { ErrorBoundary } from "@/components/ErrorBoundary";
import { TokenTable } from "@/components/table/TokenTable";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-8 space-y-8">
        <h1 className="text-xl font-semibold">Pulse</h1>

        <ErrorBoundary>
          <TokenTable />
        </ErrorBoundary>
      </div>
    </main>
  );
}
