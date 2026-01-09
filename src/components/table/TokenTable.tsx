import { TokenColumn } from "./TokenColumn";

export function TokenTable() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <TokenColumn title="New Pairs" />
      <TokenColumn title="Final Stretch" />
      <TokenColumn title="Migrated" />
    </div>
  );
}
