"use client";

export function columnHeaderActions() {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-400">
      
      {/* Lightning */}
      <div className="flex items-center gap-1 rounded-full bg-[#0f1720] px-2 py-1">
        <span className="text-yellow-400">⚡</span>
        <span>0.0</span>
      </div>

      {/* Cube */}
      <div className="flex items-center justify-center rounded-full bg-[#0f1720] px-2 py-1">
        <span className="text-yellow-400">🟨</span>
      </div>

      {/* P1 P2 P3 */}
      <div className="flex items-center gap-1 rounded-full bg-[#0f1720] px-2 py-1">
        <span className="cursor-pointer text-blue-400">P1</span>
        <span className="cursor-pointer hover:text-blue-400">P2</span>
        <span className="cursor-pointer hover:text-blue-400">P3</span>
      </div>

      {/* Filter icon */}
      <div className="flex cursor-pointer items-center justify-center rounded-full bg-[#0f1720] px-2 py-1 hover:bg-[#18202a]">
        <span>🎚️</span>
      </div>
    </div>
  );
}
