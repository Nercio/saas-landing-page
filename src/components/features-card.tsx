import React from "react";
import { twMerge } from "tailwind-merge";
export default function FeaturesCard(props: {
  children?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "bg-neutral-900 border border-white/10 p-6 rounded-3xl",
        props.className
      )}
    >
      <div className="aspect-video">{props.children}</div>
      <div>
        <h3 className="text-3xl font-medium mt-6">{props.title}</h3>
        <p className="text-white/50 mt-2">{props.description}</p>
      </div>
    </div>
  );
}
