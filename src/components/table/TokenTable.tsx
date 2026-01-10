"use client";

import { useEffect, useState } from "react";
import { tokens as initialTokens } from "@/data/tokens";
import { TokenColumn } from "./TokenColumn";
import { Token } from "@/types/token";
import { startTokenStream } from "@/services/tokenStream";

export function TokenTable() {
  const [tokens, setTokens] = useState<Token[]>(initialTokens);

  useEffect(() => {
    const stop = startTokenStream(tokens, setTokens);
    return stop;
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <TokenColumn
        title="New Pairs"
        tokens={tokens.filter((t) => t.stage === "NEW")}
      />
      <TokenColumn
        title="Final Stretch"
        tokens={tokens.filter((t) => t.stage === "FINAL")}
      />
      <TokenColumn
        title="Migrated"
        tokens={tokens.filter((t) => t.stage === "MIGRATED")}
      />
    </div>
  );
}
