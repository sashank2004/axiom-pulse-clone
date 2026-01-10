"use client";

import { useEffect, useState } from "react";
import { Token } from "@/types/token";
import { tokens as initialTokens } from "@/data/tokens";
import { TokenColumn } from "./TokenColumn";
import { TokenColumnSkeleton } from "./TokenColumnSkeleton";
import { startTokenStream } from "@/services/tokenStream";

export function TokenTable() {
  const [tokens, setTokens] = useState<Token[] | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTokens(initialTokens);
    }, 1000); // simulate initial fetch

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!tokens) return;
    const stop = startTokenStream(tokens, setTokens);
    return stop;
  }, [tokens]);

  if (!tokens) {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <TokenColumnSkeleton title="New Pairs" />
        <TokenColumnSkeleton title="Final Stretch" />
        <TokenColumnSkeleton title="Migrated" />
      </div>
    );
  }

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
