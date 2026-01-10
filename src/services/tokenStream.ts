import { Token } from "@/types/token";

let idCounter = 1000;

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

      return {
        ...token,
        meta: {
          ...token.meta,
          ageSeconds: token.meta.ageSeconds + 3,
          ageLabel: `${token.meta.ageSeconds + 3}s`,
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
      name: `New Token ${idCounter}`,
      symbol: "NEW", // placeholder, real site often omits symbol in UI
      imageUrl: "/placeholder-token.png", // static placeholder for now
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
  }, 3000);

  return () => clearInterval(interval);
}
