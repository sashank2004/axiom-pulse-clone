import { tokens } from "@/data/tokens";
import { TokenColumn } from "./TokenColumn";

export function TokenTable() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <TokenColumn
        title="New Pairs"
        tokens={tokens.filter((t) => t.stage === "NEW")}
      />
      <TokenColumn
        title="Final Stretch"
        tokens={tokens.filter((t) => t.stage === "FINAL")}
      />
      <TokenColumn
        title="Migrated"
        tokens={tokens.filter((t) => t.stage === "MIGRATED")}
      />
    </div>
  );
}
