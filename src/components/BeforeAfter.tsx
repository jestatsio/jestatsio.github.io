"use client";

import { useId, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  label: string;
};

/**
 * Before/after comparison of two same-size phone screenshots.
 * The concept ("after") sits on top and is clipped from the left
 * by the slider position. A native range input keeps it fully
 * keyboard- and screen-reader-accessible.
 */
export function BeforeAfter({ beforeSrc, afterSrc, beforeAlt, afterAlt, label }: Props) {
  const [pos, setPos] = useState(55);
  const sliderId = useId();

  return (
    <figure className="m-0">
      <div className="relative mx-auto aspect-[390/844] w-full max-w-[300px] select-none overflow-hidden rounded-[22px] border border-white/15 bg-ink-900 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover object-top"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={afterSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
            draggable={false}
          />
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-black/65 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white">
          Today
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/65 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white">
          Concept
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-white/90"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        >
          <span className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/20 bg-white text-sm font-bold text-black shadow">
            ↔
          </span>
        </div>

        <label htmlFor={sliderId} className="sr-only">
          {`Compare current site and concept for ${label}. ${afterAlt}`}
        </label>
        <input
          id={sliderId}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          aria-valuetext={`${pos}% concept visible`}
        />
      </div>
      <figcaption className="mt-3 text-center font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mist-400">
        Drag to compare · {label}
      </figcaption>
    </figure>
  );
}
