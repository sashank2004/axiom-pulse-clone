import { Token } from "@/types/token";

export const tokens: Token[] = [
  {
    id: "1",
    name: "Crypto Three Kingdoms",
    symbol: "CTK",
    imageUrl: "/placeholder.png",
    stage: "NEW",
    metrics: {
      marketCap: 5760,
      volume: 934,
      txCount: 4,
    },
    meta: {
      ageLabel: "5s",
      address: "0x37...4444",
    },
  },
  {
    id: "2",
    name: "Weird Horse",
    symbol: "HORS",
    imageUrl: "/placeholder.png",
    stage: "FINAL",
    metrics: {
      marketCap: 57600,
      volume: 16000,
      txCount: 806,
    },
    meta: {
      ageLabel: "9h",
      address: "0xd1...4444",
    },
  },
  {
    id: "3",
    name: "Labor in Shu Road",
    symbol: "LSR",
    imageUrl: "/placeholder.png",
    stage: "MIGRATED",
    metrics: {
      marketCap: 110000,
      volume: 879000,
      txCount: 7271,
    },
    meta: {
      ageLabel: "52m",
      address: "0xe0...4444",
    },
  },
];
