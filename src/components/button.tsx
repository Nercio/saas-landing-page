import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("rounded-full border  font-medium px-6 h-12", {
  variants: {
    variants: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400",
      secundary: "border-white text-white",
    },
    size: {
      sm: "h-10",
    },
  },
});

export default function Button(
  props: {
    variants: "primary" | "secundary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variants, size, className, ...rest } = props;
  return (
    <button
      {...rest}
      className={classes({ variants: props.variants, size, className })}
    />
  );
}
