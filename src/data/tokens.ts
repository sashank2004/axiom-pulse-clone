import { Token } from "@/types/token";

export const tokens: Token[] = [
  // ================= NEW PAIRS =================
  {
    id: "new-1",
    name: "AlphaPepe",
    symbol: "ALPHA",
    imageUrl: "/placeholder-token.png",
    stage: "NEW",
    meta: {
      address: "0xaaa111",
      shortAddress: "0xaaa...111",
      ageSeconds: 2,
      ageLabel: "2s",
    },
    metrics: {
      marketCap: 1200,
      volume: 400,
      txCount: 3,
    },
  },
  {
    id: "new-2",
    name: "BetaCoin",
    symbol: "BETA",
    imageUrl: "/placeholder-token.png",
    stage: "NEW",
    meta: {
      address: "0xaaa222",
      shortAddress: "0xaaa...222",
      ageSeconds: 5,
      ageLabel: "5s",
    },
    metrics: {
      marketCap: 1800,
      volume: 650,
      txCount: 6,
    },
  },
  {
    id: "new-3",
    name: "GammaX",
    symbol: "GAMMA",
    imageUrl: "/placeholder-token.png",
    stage: "NEW",
    meta: {
      address: "0xaaa333",
      shortAddress: "0xaaa...333",
      ageSeconds: 9,
      ageLabel: "9s",
    },
    metrics: {
      marketCap: 900,
      volume: 300,
      txCount: 2,
    },
  },
  {
    id: "new-4",
    name: "DeltaDog",
    symbol: "DELTA",
    imageUrl: "/placeholder-token.png",
    stage: "NEW",
    meta: {
      address: "0xaaa444",
      shortAddress: "0xaaa...444",
      ageSeconds: 14,
      ageLabel: "14s",
    },
    metrics: {
      marketCap: 2500,
      volume: 900,
      txCount: 10,
    },
  },

  // ================= FINAL STRETCH =================
  {
    id: "final-1",
    name: "MoonCat",
    symbol: "MOON",
    imageUrl: "/placeholder-token.png",
    stage: "FINAL",
    meta: {
      address: "0xbbb111",
      shortAddress: "0xbbb...111",
      ageSeconds: 120,
      ageLabel: "120s",
    },
    metrics: {
      marketCap: 12000,
      volume: 5400,
      txCount: 120,
    },
  },
  {
    id: "final-2",
    name: "RocketInu",
    symbol: "RKT",
    imageUrl: "/placeholder-token.png",
    stage: "FINAL",
    meta: {
      address: "0xbbb222",
      shortAddress: "0xbbb...222",
      ageSeconds: 180,
      ageLabel: "180s",
    },
    metrics: {
      marketCap: 18000,
      volume: 8200,
      txCount: 210,
    },
  },
  {
    id: "final-3",
    name: "StarBase",
    symbol: "STAR",
    imageUrl: "/placeholder-token.png",
    stage: "FINAL",
    meta: {
      address: "0xbbb333",
      shortAddress: "0xbbb...333",
      ageSeconds: 240,
      ageLabel: "240s",
    },
    metrics: {
      marketCap: 22000,
      volume: 9100,
      txCount: 300,
    },
  },
  {
    id: "final-4",
    name: "NovaFi",
    symbol: "NOVA",
    imageUrl: "/placeholder-token.png",
    stage: "FINAL",
    meta: {
      address: "0xbbb444",
      shortAddress: "0xbbb...444",
      ageSeconds: 300,
      ageLabel: "300s",
    },
    metrics: {
      marketCap: 28000,
      volume: 12000,
      txCount: 420,
    },
  },

  // ================= MIGRATED =================
  {
    id: "mig-1",
    name: "LegacyDAO",
    symbol: "LEG",
    imageUrl: "/placeholder-token.png",
    stage: "MIGRATED",
    meta: {
      address: "0xccc111",
      shortAddress: "0xccc...111",
      ageSeconds: 3600,
      ageLabel: "1h",
    },
    metrics: {
      marketCap: 150000,
      volume: 54000,
      txCount: 5000,
    },
  },
  {
    id: "mig-2",
    name: "OldChain",
    symbol: "OLD",
    imageUrl: "/placeholder-token.png",
    stage: "MIGRATED",
    meta: {
      address: "0xccc222",
      shortAddress: "0xccc...222",
      ageSeconds: 4200,
      ageLabel: "70m",
    },
    metrics: {
      marketCap: 220000,
      volume: 88000,
      txCount: 8200,
    },
  },
  {
    id: "mig-3",
    name: "ChainX",
    symbol: "CHX",
    imageUrl: "/placeholder-token.png",
    stage: "MIGRATED",
    meta: {
      address: "0xccc333",
      shortAddress: "0xccc...333",
      ageSeconds: 5000,
      ageLabel: "83m",
    },
    metrics: {
      marketCap: 300000,
      volume: 120000,
      txCount: 12000,
    },
  },
  {
    id: "mig-4",
    name: "VaultNet",
    symbol: "VLT",
    imageUrl: "/placeholder-token.png",
    stage: "MIGRATED",
    meta: {
      address: "0xccc444",
      shortAddress: "0xccc...444",
      ageSeconds: 7200,
      ageLabel: "2h",
    },
    metrics: {
      marketCap: 450000,
      volume: 200000,
      txCount: 20000,
    },
  },
];
