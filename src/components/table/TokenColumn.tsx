import { TokenRow } from "./TokenRow";

interface TokenColumnProps {
  title: string;
}

export function TokenColumn({ title }: TokenColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-medium text-gray-300">
        {title}
      </h2>

      <div className="flex flex-col gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <TokenRow key={i} />
        ))}
      </div>
    </div>
  );
}
