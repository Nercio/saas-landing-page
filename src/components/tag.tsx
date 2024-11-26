import React from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...rest } = props;
  return (
    <div
      {...rest}
      className={twMerge(
        "inline-flex border border-lime-400 text-lime-400 px-3 py-1 rounded-full uppercase items-center gap-2",
        className
      )}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
}
