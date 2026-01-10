import { Token } from "@/types/token";
import { TokenCard } from "./TokenCard";
import clsx from "clsx";
import { ColumnHeaderActions } from "./columnHeaderActions";

interface TokenColumnProps {
  title: string;
  tokens: Token[];
  withLeftBorder?: boolean;
}

export function TokenColumn({
  title,
  tokens,
  withLeftBorder,
}: TokenColumnProps) {
  return (
    <div
      className={clsx(
        "flex h-[calc(100vh-200px)] flex-col bg-[#0b0f14]",
        withLeftBorder && "border-l border-[#1f242c]"
      )}
    >
      {/* HEADER */}
       <div className="flex items-center justify-between border-b border-[#1f242c] px-3 py-2">
        <h2 className="text-sm font-medium text-gray-300">{title}</h2>
         <ColumnHeaderActions />
      </div>

      {/* SCROLL AREA */}
      <div className="flex-1 overflow-y-auto axiom-scrollbar">

        {tokens.map((token) => (
          <TokenCard key={token.id} token={token} />
        ))}
      </div>
    </div>
  );
}
