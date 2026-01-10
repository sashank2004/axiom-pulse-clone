import { tokens } from "@/data/tokens";
import { Token } from "@/types/token";

export async function fetchTokens(): Promise<Token[]> {
  await new Promise((res) => setTimeout(res, 800)); // simulate latency
  return tokens;
}
