"use client";

import * as Tooltip from "@radix-ui/react-tooltip";

interface AppTooltipProps {
  label: string;
  children: React.ReactNode;
}

export function AppTooltip({ label, children }: AppTooltipProps) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        {children}
      </Tooltip.Trigger>

      <Tooltip.Portal>
        <Tooltip.Content
          side="top"
          sideOffset={6}
          className="z-50 rounded-md bg-black px-2 py-1 text-xs text-white shadow-lg"
        >
          {label}
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
