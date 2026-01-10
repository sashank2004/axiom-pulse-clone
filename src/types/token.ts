export type TokenStage = "NEW" | "FINAL" | "MIGRATED";

export interface TokenMetrics {
  marketCap: number; // MC
  volume: number; // V
  txCount: number; // TX
}

export interface TokenMeta {
  address: string;
  shortAddress: string;

  ageSeconds: number;   // source of truth
  ageLabel: string;     // derived (e.g. "9s")
}



export interface Token {
  id: string;

  // Identity
  name: string; // "Crypto Three Kingdoms"
  symbol: string; // "CTK"
  imageUrl: string;

  // Placement
  stage: TokenStage;

  // Metrics
  metrics: TokenMetrics;

  // Meta
  meta: TokenMeta;
}
