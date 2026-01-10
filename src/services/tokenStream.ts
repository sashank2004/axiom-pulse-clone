import { Token } from "@/types/token";

/**
 * Simulates a WebSocket stream by mutating token metrics
 */
export function startTokenStream(
  tokens: Token[],
  onUpdate: (updated: Token[]) => void
) {
  const interval = setInterval(() => {
    const updatedTokens = tokens.map((token) => {
      const delta = (Math.random() - 0.5) * 0.05; // ±5%

      return {
        ...token,
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
          txCount: token.metrics.txCount + Math.floor(Math.random() * 3),
        },
      };
    });

    onUpdate(updatedTokens);
  }, 3000);

  return () => clearInterval(interval);
}
