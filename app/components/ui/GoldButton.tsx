"use client";

/* The site's gold call-to-action. Styling lives in brand.css (.tz-btn-primary):
   a green line runs around the edge, a light sweeps the surface, hover turns it
   green with white text, and it presses in on tap. Any element with the classes
   "tz-btn tz-btn-primary" gets the same look; this component just saves
   repeating the sizes. */

import React from "react";
import Link from "next/link";

const SIZES = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 sm:h-15 px-8 sm:px-10 text-sm sm:text-base",
} as const;

type Props = {
  children: React.ReactNode;
  size?: keyof typeof SIZES;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: "button" | "submit";
};

export function GoldButton({ children, size = "md", className = "", href, onClick, type = "button" }: Props) {
  const cls = `tz-btn tz-btn-primary inline-flex items-center justify-center gap-2 rounded-full font-montserrat font-bold ${SIZES[size]} ${className}`;
  if (href) {
    const internal = href.startsWith("/");
    return internal ? (
      <Link href={href} onClick={onClick} className={cls}>
        {children}
      </Link>
    ) : (
      <a href={href} onClick={onClick} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export default GoldButton;
