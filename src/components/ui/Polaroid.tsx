"use client";

import { cn } from "@/lib/utils";

interface PolaroidProps {
  src: string;
  alt: string;
  rotation?: number;
  className?: string;
}

export function Polaroid({ src, alt, rotation = 0, className }: PolaroidProps) {
  return (
    <div
      className={cn(
        "group relative bg-white p-3 pb-8 shadow-lg",
        "transition-all duration-300 ease-out",
        "hover:scale-105 hover:shadow-2xl hover:-translate-y-2",
        "cursor-pointer",
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
  );
}
