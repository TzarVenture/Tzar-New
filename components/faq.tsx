"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
const questions = [
  ["What kind of companies does Tzar work with?", "We work with ambitious businesses at the point where their digital experience or internal systems need to catch up with their growth."],
  ["Can you build a CRM or ERP around our current workflow?", "Yes. We start by mapping how work moves through your business, then design the right mix of custom software, integrations and operational clarity."],
  ["Do you handle both the product and its growth?", "Yes. Websites, applications and business systems are paired with technical SEO, performance marketing and content when a joined-up growth plan is needed."],
];
export function FAQ() { const [active, setActive] = useState<number | null>(0); return <div className="divide-y divide-white/15 border-y border-white/15">{questions.map(([question, answer], index) => <div key={question}><button onClick={() => setActive(active === index ? null : index)} className="flex w-full items-center justify-between gap-6 py-6 text-left text-xl font-semibold tracking-[-.03em] sm:text-2xl"><span><span className="mr-4 text-sm font-medium text-[#d4af37]">0{index + 1}</span>{question}</span><ChevronDown className={`h-5 w-5 shrink-0 transition ${active === index ? "rotate-180 text-[#d4af37]" : ""}`} /></button><div className={`grid transition-[grid-template-rows] duration-300 ${active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><p className="overflow-hidden max-w-2xl pb-6 leading-7 text-white/60">{answer}</p></div></div>)}</div>; }
