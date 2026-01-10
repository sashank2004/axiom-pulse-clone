"use client";

import { Token } from "@/types/token";
import { AppTooltip } from "@/components/ui/Tooltip";
import { useRouter } from "next/navigation";
import { truncateText } from "@/utils/truncate";

interface TokenCardProps {
  token: Token;
}

export function TokenCard({ token }: TokenCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/meme/${token.meta.address}`)}
      className="cursor-pointer border-b border-[#1f242c] p-4 transition-colors hover:bg-[#141a21]"
    >
      <div className="grid grid-cols-[72px_1fr_auto] gap-4">
        {/* LEFT */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            {/* Avatar: +25% */}
            <div className="h-19 w-19 rounded-lg border-2 border-green-500 bg-gray-700" />
            {/* Status dot: scaled proportionally */}
            <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border border-black bg-green-500" />
          </div>

          <span className="text-[11px] text-[var(--text-muted)]">
            {token.meta.shortAddress}
          </span>
        </div>

        {/* CENTER */}
        <div className="space-y-0">
          {/* Name row: +20% */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">
              {truncateText(token.name, 7)}
            </span>
            <span className="text-xs text-gray-500">⧉</span>
          </div>

          {/* Meta icons row (unchanged) */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-400">{token.meta.ageLabel}</span>
            <span>🍃</span>
            <span>✋</span>
            <span>🔍</span>
          </div>

          {/* Stats row (unchanged) */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>👤1</span>
            <span>🏆0</span>
            <span>👑4/280</span>
          </div>
        </div>

       {/* RIGHT */}
<div className="text-right space-y-0">
  <AppTooltip label="Market Capitalization">
    <div
      className="cursor-help text-xs text-gray-400"
      onClick={(e) => e.stopPropagation()}
    >
      MC{" "}
      <span className="text-blue-400 text-base">
        ${token.metrics.marketCap.toLocaleString()}
      </span>
    </div>
  </AppTooltip>

  <AppTooltip label="Trading Volume">
    <div
      className="cursor-help text-xs text-gray-400"
      onClick={(e) => e.stopPropagation()}
    >
      V{" "}
      <span className="text-blue-400 text-base">
        ${token.metrics.volume.toLocaleString()}
      </span>
    </div>
  </AppTooltip>

  <div className="flex items-center justify-end gap-2 text-xs text-gray-400">
    <span>TX {token.metrics.txCount}</span>

    <div className="h-1 w-10 overflow-hidden rounded bg-gray-700">
      <div className="h-full w-1/2 bg-green-400" />
    </div>
  </div>
</div>
        
      </div>
    </div>
  );
}
