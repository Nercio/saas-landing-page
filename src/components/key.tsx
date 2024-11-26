import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={twMerge(
        "size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl font-medium text-neutral-950",
        className
      )}
    >
      {children}
    </div>
  );
}
