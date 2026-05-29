"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { floatHover } from "@/lib/animations";

interface PortfolioCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  gradientBar?: boolean;
}

export default function PortfolioCard({
  children,
  className = "",
  gradientBar = true,
  ...props
}: PortfolioCardProps) {
  return (
    <motion.div
      className={`relative portfolio-card portfolio-card-light dark:portfolio-card-dark ${className}`}
      whileHover={floatHover}
      whileTap={floatHover}
      {...props}
    >
      {gradientBar && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
      )}
      {children}
    </motion.div>
  );
}
