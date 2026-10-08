'use client';

import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   01. FRAMEWORK DATA & CLEAN CODE SNIPPETS
────────────────────────────────────────────────────────────────────────── */
export type TechFrameworkId = 'nextjs' | 'react' | 'shopify' | 'wordpress' | 'tailwind';

interface TechSpec {
  id: TechFrameworkId;
  name: string;
  fileName: string;
  codeSnippet: string[];
}

const TECH_SPECS: Record<TechFrameworkId, TechSpec> = {
  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    fileName: 'app/storefront/page.tsx',
    codeSnippet: [
      '// Next.js 15 High-Converting Storefront',
      'export default async function StorefrontPage() {',
      '  const products = await getFeaturedCatalog();',
      '  return (',
      '    <StorefrontLayout',
      '      products={products}',
      '      instantCheckout={true}',
      '      shiprocketTracking={true}',
      '    />',
      '  );',
      '}',
    ],
  },
  react: {
    id: 'react',
    name: 'React',
    fileName: 'components/checkout/CartDrawer.tsx',
    codeSnippet: [
      '// Real-Time Cart & Checkout Drawer',
      'export function CartDrawer({ items, total }: CartProps) {',
      '  const [isOpen, setIsOpen] = useState(false);',
      '  return (',
      '    <SlideOverCart isOpen={isOpen}>',
      '      <CartItemList items={items} />',
      '      <InstantUPICheckout total={total} />',
      '    </SlideOverCart>',
      '  );',
      '}',
    ],
  },
  shopify: {
    id: 'shopify',
    name: 'Shopify',
    fileName: 'sections/product-showcase.liquid',
    codeSnippet: [
      '{% comment %} Custom Shopify Fast-Checkout PDP {% endcomment %}',
      '<div class="product-showcase-container">',
      '  <h1 class="brand-title">{{ product.title }}</h1>',
      '  <div class="pricing-tag">{{ product.price | money }}</div>',
      '  <button class="buy-now-cta" data-upi="enabled">',
      '    Buy Now with Razorpay / UPI',
      '  </button>',
      '</div>',
    ],
  },
  wordpress: {
    id: 'wordpress',
    name: 'WordPress',
    fileName: 'woocommerce/order-pipeline.php',
    codeSnippet: [
      '// WooCommerce Order & Shiprocket Courier Setup',
      'add_action("woocommerce_order_status_completed", function($order_id) {',
      '  $order = wc_get_order($order_id);',
      '  Shiprocket_API::generate_courier_label($order);',
      '  WhatsApp_Notification::send_dispatch_alert($order);',
      '});',
    ],
  },
  tailwind: {
    id: 'tailwind',
    name: 'Tailwind CSS',
    fileName: 'styles/brand-tokens.css',
    codeSnippet: [
      '/* Brand Theme & Design System Tokens */',
      ':root {',
      '  --color-spruce-dark: #061309;',
      '  --color-racing-green: #1D4224;',
      '  --color-amber-gold: #FFAE00;',
      '  --color-sage-tint: #EAF1EB;',
      '  --font-heading: "Montserrat", sans-serif;',
      '}',
    ],
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   02. AUTHENTIC TECHNOLOGY SVG / LOGO ICONS
────────────────────────────────────────────────────────────────────────── */
const NextJsIcon = () => (
  <svg viewBox="0 0 180 180" className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" fill="none">
    <circle cx="90" cy="90" r="90" fill="#000000" />
    <path
      d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
      fill="url(#next_icon_g1)"
    />
    <rect x="115" y="54" width="12" height="72" fill="url(#next_icon_g2)" />
    <defs>
      <linearGradient id="next_icon_g1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="next_icon_g2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 fill-[#38BDF8]">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const WordPressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 fill-[#21759B]">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm-1.077 18.423L7.14 8.797c.563-.03 1.096-.089 1.096-.089.475-.059.416-.772-.06-.743 0 0-1.424.119-2.344.119-.119 0-.267 0-.416-.03A10.33 10.33 0 0 1 12 1.688c2.43 0 4.658.832 6.435 2.228-.089.03-.178.059-.267.059-1.008 0-1.72.861-1.72 1.81 0 .743.416 1.396.861 2.167.356.624.772 1.396.772 2.523 0 1.128-.416 2.463-.861 4.156l-3.324 9.943c-.03.059-.06.119-.089.178A10.276 10.276 0 0 1 12 22.312c-.386 0-.772-.03-1.146-.089l.069-.214zm9.35-6.423c0-2.435-.861-4.127-1.602-5.404-.593-1.008-1.157-1.84-1.157-2.82 0-1.097.832-2.108 2.019-2.108.06 0 .119 0 .178.03A10.264 10.264 0 0 1 22.312 12c0 2.998-1.277 5.702-3.324 7.603l1.246-3.71c.624-1.78.793-3.235.793-4.293zM1.688 12c0 1.93.535 3.737 1.455 5.285l4.335-12.556C4.417 5.674 1.688 8.524 1.688 12zm7.662 9.588l-3.77-10.953 3.65 10.656c.03.09.06.208.12.297z" />
  </svg>
);

const ShopifyIcon = () => (
  <img
    src="/assets/images/icons/shopify2.png"
    alt="Shopify"
    className="w-4 h-4 sm:w-4.5 sm:h-4.5 object-contain shrink-0"
  />
);

/* ──────────────────────────────────────────────────────────────────────────
   03. MAIN TECH CONSOLE VIEW COMPONENT
────────────────────────────────────────────────────────────────────────── */
interface WebTechFlowCanvasProps {
  className?: string;
}

export default function WebTechFlowCanvas({ className = '' }: WebTechFlowCanvasProps) {
  const [selectedTech, setSelectedTech] = useState<TechFrameworkId>('nextjs');

  const frameworksList: TechFrameworkId[] = ['nextjs', 'react', 'shopify', 'wordpress', 'tailwind'];
  const currentSpec = TECH_SPECS[selectedTech];

  const renderIcon = (id: TechFrameworkId) => {
    switch (id) {
      case 'nextjs':
        return <NextJsIcon />;
      case 'react':
        return <ReactIcon />;
      case 'shopify':
        return <ShopifyIcon />;
      case 'wordpress':
        return <WordPressIcon />;
      case 'tailwind':
        return <TailwindIcon />;
      default:
        return null;
    }
  };

  return (
    <div className={`w-full relative select-none ${className}`}>
      
      {/* ── Framework Switcher Pills ── */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 scrollbar-none">
        {frameworksList.map((fwId) => {
          const spec = TECH_SPECS[fwId];
          const isSelected = selectedTech === fwId;
          return (
            <button
              key={fwId}
              type="button"
              onClick={() => setSelectedTech(fwId)}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-montserrat font-bold flex items-center gap-2 shrink-0 transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#1D4224] text-[#FFAE00] border-2 border-[#FFAE00] shadow-[0_0_12px_rgba(255,174,0,0.25)]'
                  : 'bg-[#0B1E13]/90 text-white/80 border border-[#234E2D] hover:bg-[#153420] hover:text-white hover:border-[#4ADE80]/50'
              }`}
            >
              {renderIcon(fwId)}
              <span>{spec.name}</span>
            </button>
          );
        })}
      </div>

      {/* ── Clean macOS Code Card ── */}
      <div className="w-full rounded-2xl bg-[#08150D] border border-[#22C55E]/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
        
        {/* macOS Chrome Header Bar */}
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 bg-[#0F2417] border-b border-[#22C55E]/20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-medium text-white/90">
            <Terminal className="w-3.5 h-3.5 text-[#FFAE00]" />
            <span>{currentSpec.fileName}</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-[10px] font-sans font-bold text-[#4ADE80] uppercase tracking-wider">
              Live
            </span>
          </div>
        </div>

        {/* Syntax Code Editor */}
        <div className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed font-mono bg-[#050E08] overflow-x-auto scrollbar-none select-text">
          {currentSpec.codeSnippet.map((line, idx) => {
            const isComment = line.startsWith('//') || line.startsWith('/*') || line.endsWith('*/') || line.includes('comment');
            const isKeyword = line.includes('function') || line.includes('const') || line.includes('export') || line.includes('default') || line.includes('async');
            const isMethod = line.includes('return') || line.includes('await') || line.includes('add_action');
            const isTag = line.includes('<') || line.includes('>') || line.includes('{%') || line.includes('%}');
            const isCssToken = line.includes(':root') || line.includes('--');

            return (
              <div key={idx} className="flex gap-4 leading-6 hover:bg-white/3 rounded px-1 -mx-1 transition-colors">
                <span className="text-[#64748B] select-none text-[11px] sm:text-xs w-5 text-right shrink-0 font-mono">
                  {idx + 1}
                </span>
                <span
                  className={
                    isComment
                      ? 'text-[#86EFAC] italic'
                      : isKeyword
                      ? 'text-[#FB7185] font-semibold'
                      : isMethod
                      ? 'text-[#38BDF8]'
                      : isTag
                      ? 'text-[#FBBF24]'
                      : isCssToken
                      ? 'text-[#A78BFA]'
                      : 'text-[#F8FAFC]'
                  }
                >
                  {line}
                </span>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
