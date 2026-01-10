"use client";

import * as Tooltip from "@radix-ui/react-tooltip";

interface TooltipProps {
  label: string;
  children: React.ReactNode;
}

export function AppTooltip({ label, children }: TooltipProps) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            className="rounded-md bg-black px-2 py-1 text-xs text-white shadow-lg"
          >
            {label}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
