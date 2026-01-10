import { Token } from "@/types/token";

interface TokenCardProps {
  token: Token;
}

export function TokenCard({ token }: TokenCardProps) {
  return (
    <div className="rounded-xl bg-[var(--bg-secondary)] p-4 hover:bg-[#1a1f26] transition-colors">
      <div className="flex gap-4">
        {/* Token Image */}
        <div className="h-12 w-12 rounded-lg bg-gray-700 flex-shrink-0" />

        {/* Token Info */}
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{token.symbol}</span>
            <span className="text-sm text-[var(--text-muted)]">
              {token.name}
            </span>
          </div>

          <div className="text-xs text-[var(--text-muted)]">
            {token.meta.address}
          </div>

          <div className="text-xs text-green-400">
            {token.meta.ageLabel}
          </div>
        </div>

        {/* Metrics */}
        <div className="text-right space-y-1">
          <div className="text-sm font-medium">
            MC ${token.metrics.marketCap.toLocaleString()}
          </div>
          <div className="text-xs text-[var(--text-muted)]">
            V ${token.metrics.volume.toLocaleString()}
          </div>
          <div className="text-xs text-[var(--text-muted)]">
            TX {token.metrics.txCount}
          </div>
        </div>
      </div>
    </div>
  );
}
