"use client";

import { Token } from "@/types/token";
import { AppTooltip } from "@/components/ui/Tooltip";
import { useRouter } from "next/navigation";
import { truncateText } from "@/utils/truncate";

function getRandomPct(seed: string, max = 20) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % (max + 1);
}

interface TokenCardProps {
  token: Token;
}

export function TokenCard({ token }: TokenCardProps) {
  const router = useRouter();

  const stats = token.meta.stats ?? {
  holdersPct: getRandomPct(token.meta.address + "h"),
  smartPct: getRandomPct(token.meta.address + "s"),
  sniperPct: getRandomPct(token.meta.address + "n"),
};


  return (
    <div
      onClick={() => router.push(`/meme/0xa99a49dc92ae27ffc996fad4f489a7fb8f8b4444`)}
      className="cursor-pointer border-b border-[#1f242c] p-4 transition-colors hover:bg-[#141a21]"
    >
      <div className="grid grid-cols-[72px_1fr_auto] gap-4">
        {/* LEFT */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            <div className="h-19 w-19 rounded-lg border-2 border-green-500 bg-gray-700" />
            <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border border-black bg-green-500" />
          </div>

          <span className="text-[11px] text-[var(--text-muted)]">
            {token.meta.shortAddress}
          </span>

          {/* BELOW-ADDRESS STATS */}
    <div className=" flex items-center gap-1 pl-22">
      <div className="flex items-center gap-1 rounded-full bg-[#0f1720] px-2 py-[1px] text-[11px] text-green-400">
        <span>👤</span>
        <span>{stats.holdersPct}%</span>
      </div>

      <div className="flex items-center gap-1 rounded-full bg-[#0f1720] px-2 py-[1px] text-[11px] text-cyan-400">
        <span>🧠</span>
        <span>{stats.smartPct}%</span>
      </div>

      <div className="flex items-center gap-1 rounded-full bg-[#0f1720] px-2 py-[1px] text-[11px] text-yellow-400">
        <span>🎯</span>
        <span>{stats.sniperPct}%</span>
      </div>
    </div>

        </div>

        {/* CENTER */}
        <div className="space-y-0">
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">
              {truncateText(token.name, 7)}
            </span>
            <span className="text-xs text-gray-500">⧉</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-400">{token.meta.ageLabel}</span>
            <span>🍃</span>
            <span>✋</span>
            <span>🔍</span>
          </div>

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
