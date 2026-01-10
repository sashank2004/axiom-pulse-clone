import { Token } from "@/types/token";

let idCounter = 1000;

const TOKEN_IMAGES = [
  "/tokens/arrow.webp",
  "/tokens/cat.webp",
  "/tokens/images (1).jpg",
  "/tokens/images.jpg",
  "/tokens/ran.jpg",
  "/tokens/random.jpg",
];

function getRandomTokenImage() {
  return TOKEN_IMAGES[Math.floor(Math.random() * TOKEN_IMAGES.length)];
}

const TOKEN_NAMES = [
  "OrangeMan",
  "BananaDAO",
  "MoonCat",
  "PepeKing",
  "BullRun",
  "DragonCoin",
  "CryptoHorse",
  "GreenLeaf",
  "MetaFox",
  "ShibaMax",
  "LuckyTiger",
  "PandaSwap",
  "GhostChain",
  "SunRise",
  "IronBull",
];

function getRandomTokenName() {
  return TOKEN_NAMES[Math.floor(Math.random() * TOKEN_NAMES.length)];
}


function formatAge(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  return `${Math.floor(seconds / 3600)}h`;
}

export function startTokenStream(
  tokens: Token[],
  onUpdate: (updated: Token[]) => void
) {
  const interval = setInterval(() => {
    /**
     * 1. Update existing tokens (price + age)
     */
    let updatedTokens = tokens.map((token) => {
      const delta = (Math.random() - 0.5) * 0.05; // ±5%

      const nextAge = token.meta.ageSeconds + 1;

      return {
        ...token,
        meta: {
          ...token.meta,
          ageSeconds: nextAge,
          ageLabel: formatAge(nextAge),
        },
        metrics: {
          ...token.metrics,
          marketCap: Math.max(
            0,
            Math.round(token.metrics.marketCap * (1 + delta))
          ),
          volume: Math.max(
            0,
            Math.round(token.metrics.volume * (1 + delta))
          ),
          txCount: token.metrics.txCount + Math.floor(Math.random() * 2),
        },
      };
    });

    /**
     * 2. Occasionally insert a BRAND NEW token (NEW PAIRS)
     */
    if (Math.random() > 0.7) {
      const newToken: Token = {
        id: `new-${idCounter}`,
        name: getRandomTokenName(),
        symbol: "NEW",
        imageUrl: getRandomTokenImage(),
        stage: "NEW",
        meta: {
          address: `0x${Math.random().toString(16).slice(2, 10)}abcd`,
          shortAddress: `0x${Math.random()
            .toString(16)
            .slice(2, 6)}...abcd`,
          ageSeconds: 0,
          ageLabel: "0s",
        },
        metrics: {
          marketCap: Math.floor(Math.random() * 5000) + 500,
          volume: Math.floor(Math.random() * 1000),
          txCount: 1,
        },
      };
      idCounter++;

      /**
       * Put new token at the TOP of NEW PAIRS
       */
      updatedTokens = [
        newToken,
        ...updatedTokens.filter((t) => t.stage === "NEW"),
        ...updatedTokens.filter((t) => t.stage !== "NEW"),
      ];
    }

    onUpdate(updatedTokens);
  }, 1000); // ✅ 1 second tick

  return () => clearInterval(interval);
}
