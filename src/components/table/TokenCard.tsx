"use client";

import { Token } from "@/types/token";
import { AppTooltip } from "@/components/ui/Tooltip";
import { useRouter } from "next/navigation";

interface TokenCardProps {
  token: Token;
}

export function TokenCard({ token }: TokenCardProps) {
  const router = useRouter();
  return (
    <div
  onClick={() => router.push(`/meme/${token.meta.address}`)}
  className="cursor-pointer rounded-xl bg-[var(--bg-secondary)] p-4 hover:bg-[#1a1f26] transition-colors"
>
      <div className="flex gap-4">
        {/* Token Image + Address */}
        <div className="flex w-16 flex-col items-center gap-1">
          <div className="h-12 w-12 rounded-lg bg-gray-700" />

          <span className="text-[11px] text-[var(--text-muted)]">
            {token.meta.shortAddress}
          </span>
        </div>


        {/* Token Info */}
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{token.symbol}</span>
            <span className="text-sm text-[var(--text-muted)]">
              {token.name}
            </span>
          </div>

          <div className="text-xs text-green-400">
            {token.meta.ageLabel}
          </div>
        </div>

        {/* Metrics */}
        <div className="text-right space-y-1">
        <AppTooltip label="Market Capitalization">
          <div className="text-sm font-medium cursor-help">
            MC ${token.metrics.marketCap.toLocaleString()}
          </div>
        </AppTooltip>

        <AppTooltip label="Trading Volume">
          <div className="text-xs text-[var(--text-muted)] cursor-help">
            V ${token.metrics.volume.toLocaleString()}
          </div>
        </AppTooltip>

        <div className="text-xs text-[var(--text-muted)]">
          TX {token.metrics.txCount}
        </div>
      </div>
      </div>
    </div>
  );
}
