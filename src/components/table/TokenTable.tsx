"use client";

import { useEffect, useState } from "react";
import { Token } from "@/types/token";
import { tokens as initialTokens } from "@/data/tokens";
import { TokenColumn } from "./TokenColumn";
import { TokenColumnSkeleton } from "./TokenColumnSkeleton";
import { startTokenStream } from "@/services/tokenStream";

type MobileTab = "NEW" | "FINAL" | "MIGRATED";

export function TokenTable() {
  const [tokens, setTokens] = useState<Token[] | null>(null);
  const [activeTab, setActiveTab] = useState<MobileTab>("NEW");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTokens(initialTokens);
    }, 1000);

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
    <>
      {/* MOBILE TABS */}
      <div className="mb-2 flex gap-2 md:hidden">
        {[
          { label: "New Pairs", value: "NEW" },
          { label: "Final Stretch", value: "FINAL" },
          { label: "Migrated", value: "MIGRATED" },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value as MobileTab)}
            className={`rounded-full px-4 py-1 text-sm transition-colors ${
              activeTab === tab.value
                ? "bg-[#1f2933] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* DESKTOP: 3 COLUMNS */}
      <div className="hidden md:grid md:grid-cols-3">
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

      {/* MOBILE: SINGLE COLUMN */}
      <div className="md:hidden">
        {activeTab === "NEW" && (
          <TokenColumn
            title="New Pairs"
            tokens={tokens.filter((t) => t.stage === "NEW")}
          />
        )}

        {activeTab === "FINAL" && (
          <TokenColumn
            title="Final Stretch"
            tokens={tokens.filter((t) => t.stage === "FINAL")}
          />
        )}

        {activeTab === "MIGRATED" && (
          <TokenColumn
            title="Migrated"
            tokens={tokens.filter((t) => t.stage === "MIGRATED")}
          />
        )}
      </div>
    </>
  );
}
