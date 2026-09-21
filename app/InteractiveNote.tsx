"use client";

import { useState } from "react";

type InteractiveNoteProps = {
  symbol: string;
  variant: "one" | "two";
};

export default function InteractiveNote({ symbol, variant }: InteractiveNoteProps) {
  const [wiggleCount, setWiggleCount] = useState(0);
  const wiggle = () => setWiggleCount((count) => count + 1);

  return (
    <button
      key={wiggleCount}
      aria-label="音符を揺らす"
      className={`note note-${variant}${wiggleCount > 0 ? " is-wiggling" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") wiggle();
      }}
      onPointerDown={wiggle}
      type="button"
    >
      {symbol}
    </button>
  );
}
