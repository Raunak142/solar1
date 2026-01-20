"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "outline" | "dark";
  className?: string;
  icon?: ReactNode;
}

const SlideButton = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  icon,
}: SlideButtonProps) => {
  const baseStyles =
    "relative overflow-hidden font-semibold rounded-lg transition-all duration-300";

  const variantStyles = {
    primary:
      "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30",
    outline:
      "border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white",
    dark: "bg-slate-800 hover:bg-slate-900 text-white",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span className="relative block overflow-hidden group px-6 py-3">
        {/* Default text - slides down on hover */}
        <span className="flex items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:translate-y-full">
          {children}
          {icon}
        </span>

        {/* Clone text - slides in from top on hover */}
        <span className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 ease-out -translate-y-full group-hover:translate-y-0">
          {children}
          {icon}
        </span>
      </span>
    </motion.button>
  );
};

export default SlideButton;
