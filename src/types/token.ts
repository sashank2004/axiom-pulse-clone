export type TokenStage = "NEW" | "FINAL" | "MIGRATED";

export interface TokenMetrics {
  marketCap: number; // MC
  volume: number; // V
  txCount: number; // TX
}

export interface TokenMeta {
  address: string;       // full address (for routing)
  shortAddress: string;  // display version
  ageLabel: string;
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
