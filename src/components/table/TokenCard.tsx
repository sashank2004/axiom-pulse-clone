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
      className="cursor-pointer rounded-xl bg-[var(--bg-secondary)] p-4 transition-colors hover:bg-[#1a1f26]"
    >
      <div className="grid grid-cols-[72px_1fr_auto] gap-4">
        {/* LEFT */}
        <div className="flex flex-col items-center gap-1">
          <div className="relative">
            <div className="h-12 w-12 rounded-lg border-2 border-green-500 bg-gray-700" />
            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border border-black bg-green-500" />
          </div>

          <span className="text-[11px] text-[var(--text-muted)]">
            {token.meta.shortAddress}
          </span>
        </div>

        {/* CENTER */}
        <div className="space-y-1">
          {/* Name row */}
          <div className="flex items-center gap-2">
            <span className="max-w-[180px] truncate whitespace-nowrap text-sm font-medium">
  {token.name}
</span>
            <span className="text-xs text-gray-500">⧉</span>
          </div>

          {/* Meta icons row */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-green-400">{token.meta.ageLabel}</span>
            <span>🍃</span>
            <span>✋</span>
            <span>🔍</span>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>👤 1</span>
            <span>🏆 0</span>
            <span>👑 4/280</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="text-right space-y-1">
          <AppTooltip label="Market Capitalization">
            <div
              className="cursor-help text-xs text-gray-400"
              onClick={(e) => e.stopPropagation()}
            >
              MC{" "}
              <span className="text-blue-400">
                ${token.metrics.marketCap.toLocaleString()}
              </span>
            </div>
          </AppTooltip>

          <AppTooltip label="Trading Volume">
            <div
              className="cursor-help text-xs text-gray-400"
              onClick={(e) => e.stopPropagation()}
            >
              V ${token.metrics.volume.toLocaleString()}
            </div>
          </AppTooltip>

          <div className="text-xs text-gray-400">
            TX {token.metrics.txCount}
          </div>

          <div className="h-1 w-20 overflow-hidden rounded bg-gray-700">
            <div className="h-full w-1/2 bg-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
