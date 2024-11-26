import { IntegrationsProps } from "@/sections/Integrations";
import Image from "next/image";
import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function IntegrationsCol(props: {
  integrations: IntegrationsProps;
  className?: string;
  reverse?: boolean;
}) {
  const { integrations, className, reverse } = props;
  return (
    <motion.div
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      className={twMerge("flex flex-col gap-4  pb-4", className)}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <Fragment key={index}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  className="size-24 "
                />
              </div>
              <h3 className="mt-6 text-3xl text-center ">{integration.name}</h3>
              <p className="text-center text-white/50 mt-2">
                {integration.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
