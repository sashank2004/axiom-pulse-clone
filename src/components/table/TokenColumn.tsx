import { Token } from "@/types/token";
import { TokenCard } from "./TokenCard";

interface TokenColumnProps {
  title: string;
  tokens: Token[];
}

export function TokenColumn({ title, tokens }: TokenColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-medium text-gray-300">
        {title}
      </h2>

      <div className="flex flex-col gap-3">
        {tokens.map((token) => (
          <TokenCard key={token.id} token={token} />
        ))}
      </div>
    </div>
  );
}
