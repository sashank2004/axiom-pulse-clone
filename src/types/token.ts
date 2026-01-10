export type TokenStage = "NEW" | "FINAL" | "MIGRATED";

export interface TokenMetrics {
  marketCap: number; // MC
  volume: number; // V
  txCount: number; // TX
}

export interface TokenMeta {
  ageLabel: string; // "5s", "9h", "52m"
  address: string; // "0x37...4444"
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
