import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Page Not Found | Tzar Digital Agency",
  description: "The page you are looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      {/* Fixed dark backdrop ensuring no light body color bleeds behind footer wave or screen edges */}
      <div
        className="fixed inset-0 z-0 bg-[#061309] pointer-events-none"
        aria-hidden="true"
      />

      <main className="relative z-10 min-h-[calc(100vh-280px)] flex flex-col items-center justify-center pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 text-white">
        <div className="max-w-lg w-full mx-auto text-center flex flex-col items-center">
          {/* 404 Graphic */}
          <div className="w-full max-w-xs sm:max-w-sm mb-6">
            <Image
              src="/assets/images/custom-404.webp"
              alt="404 Page Not Found"
              width={1672}
              height={941}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Clean, Professional Headline */}
          <h1 className="font-montserrat font-bold text-2xl sm:text-3xl text-white mb-2">
            Page not found
          </h1>

          {/* Clear, Human Description */}
          <p className="font-sans text-sm sm:text-base text-white/70 mb-7 max-w-sm leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Direct Action Buttons */}
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFAE00] hover:bg-[#FFAE00]/90 text-[#0E2015] font-semibold text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to home</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors"
            >
              <span>View services</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
