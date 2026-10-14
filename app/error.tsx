"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, ArrowLeft } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      {/* Fixed dark backdrop ensuring no light body color bleeds behind footer wave or screen edges */}
      <div
        className="fixed inset-0 z-0 bg-[#061309] pointer-events-none"
        aria-hidden="true"
      />

      <main className="relative z-10 min-h-[calc(100vh-280px)] flex flex-col items-center justify-center pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 text-white">
        <div className="max-w-md w-full mx-auto text-center flex flex-col items-center">
          <h1 className="font-montserrat font-bold text-2xl sm:text-3xl text-white mb-2">
            Something went wrong
          </h1>

          <p className="font-sans text-sm sm:text-base text-white/70 mb-7 max-w-sm leading-relaxed">
            An unexpected error occurred while loading this page.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFAE00] hover:bg-[#FFAE00]/90 text-[#0E2015] font-semibold text-sm transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try again</span>
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to home</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
