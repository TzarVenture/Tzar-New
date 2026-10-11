"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { TechHeader } from "@/legacy-src/components/layout/TechHeader";
import { TechFooter } from "@/legacy-src/components/layout/TechFooter";

export default function AppLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <div className="w-full min-h-screen bg-[#f8fafc]">{children}</div>;
  }

  return (
    <>
      <TechHeader />
      <div className="flex-1 w-full">{children}</div>
      <TechFooter />
    </>
  );
}
