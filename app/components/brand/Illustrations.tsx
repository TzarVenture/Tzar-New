"use client";

/* Animated card illustrations for the portfolio page.
   Drawn in the brand palette. Animations run while the card is hovered or
   focused (mouse) or while it is on screen (touch), and never when the
   visitor prefers reduced motion. The resting frame is a complete picture. */

import React from "react";

const C = {
  ink: "#0E2015",
  panel: "#12301A",
  line: "#2A4A31",
  green: "#244A2C",
  gold: "#FFAE00",
  mint: "#B6F8DD",
  paper: "#EFE8E0",
};

export type IllustrationName =
  | "crm"
  | "webapp"
  | "store"
  | "wordpress"
  | "creative"
  | "discover"
  | "design"
  | "build"
  | "launch";

const d = (s: number): React.CSSProperties => ({ animationDelay: `${s}s` });

function Window({ children }: { children: React.ReactNode }) {
  return (
    <>
      <rect x="16" y="14" width="208" height="122" rx="9" fill={C.ink} stroke={C.line} />
      <circle cx="28" cy="25" r="2.6" fill={C.line} />
      <circle cx="37" cy="25" r="2.6" fill={C.line} />
      <circle cx="46" cy="25" r="2.6" fill={C.line} />
      {children}
    </>
  );
}

function Crm() {
  const bars = [26, 40, 33, 52, 45, 66];
  return (
    <Window>
      <rect x="22" y="34" width="40" height="96" rx="5" fill={C.panel} />
      {[42, 54, 66, 78, 90].map((y, i) => (
        <rect key={y} x="29" y={y} width={i === 1 ? 26 : 20} height="5" rx="2.5" fill={i === 1 ? C.gold : C.line} />
      ))}
      {[70, 120, 170].map((x, i) => (
        <g key={x}>
          <rect x={x} y="34" width="46" height="24" rx="5" fill={C.panel} />
          <rect x={x + 7} y="40" width="18" height="3.5" rx="1.75" fill={C.mint} opacity="0.6" />
          <rect x={x + 7} y="47" width={[26, 22, 30][i]} height="6" rx="3" fill={C.paper} />
        </g>
      ))}
      <line x1="70" y1="126" x2="216" y2="126" stroke={C.line} />
      {bars.map((h, i) => (
        <rect
          key={i}
          className="pf-a-grow"
          style={d(i * 0.08)}
          x={76 + i * 23}
          y={126 - h}
          width="13"
          height={h}
          rx="3"
          fill={i >= 4 ? C.gold : C.green}
        />
      ))}
      <path
        className="pf-a-draw"
        pathLength={1}
        d="M82 96 L105 84 L128 90 L151 72 L174 78 L197 56"
        fill="none"
        stroke={C.mint}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle className="pf-a-ping" cx="197" cy="56" r="4" fill="none" stroke={C.mint} strokeWidth="1.5" />
      <circle cx="197" cy="56" r="3.2" fill={C.mint} />
    </Window>
  );
}

function WebApp() {
  const lines: [number, number, string][] = [
    [26, 30, C.gold],
    [38, 54, C.mint],
    [38, 40, C.paper],
    [50, 46, C.mint],
    [38, 34, C.paper],
    [26, 22, C.gold],
    [26, 48, C.mint],
  ];
  return (
    <Window>
      {lines.map(([x, w, c], i) => (
        <rect
          key={i}
          className="pf-a-type"
          style={d(i * 0.12)}
          x={x}
          y={40 + i * 12}
          width={w}
          height="5"
          rx="2.5"
          fill={c}
          opacity={c === C.paper ? 0.55 : 0.9}
        />
      ))}
      <rect className="pf-a-blink" x="78" y="112" width="2" height="9" fill={C.gold} />
      <line x1="124" y1="34" x2="124" y2="130" stroke={C.line} />
      <circle cx="174" cy="80" r="30" fill="none" stroke={C.panel} strokeWidth="8" />
      <circle
        className="pf-a-ring"
        cx="174"
        cy="80"
        r="30"
        fill="none"
        stroke={C.gold}
        strokeWidth="8"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray="100"
        strokeDashoffset="4"
        transform="rotate(-90 174 80)"
      />
      <text x="174" y="87" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="20" fill={C.paper}>
        98
      </text>
      <rect x="152" y="118" width="44" height="5" rx="2.5" fill={C.mint} opacity="0.5" />
    </Window>
  );
}

function Store() {
  return (
    <>
      {/* Phone */}
      <rect x="34" y="8" width="84" height="134" rx="14" fill={C.ink} stroke={C.line} strokeWidth="1.5" />
      <rect x="62" y="14" width="28" height="5" rx="2.5" fill={C.line} />
      <rect x="42" y="26" width="68" height="56" rx="7" fill={C.paper} />
      <circle cx="76" cy="50" r="15" fill={C.green} />
      <rect x="68" y="44" width="16" height="16" rx="3" fill={C.gold} />
      <rect x="42" y="90" width="44" height="5" rx="2.5" fill={C.paper} opacity="0.8" />
      <rect x="42" y="100" width="26" height="5" rx="2.5" fill={C.mint} opacity="0.7" />
      <g className="pf-a-press" style={{ transformOrigin: "76px 124px" }}>
        <rect x="42" y="114" width="68" height="18" rx="6" fill={C.gold} />
        <rect x="62" y="121" width="28" height="4" rx="2" fill={C.ink} />
      </g>
      {/* Item dropping into the bag */}
      <rect className="pf-a-drop" x="164" y="58" width="22" height="22" rx="4" fill={C.gold} />
      {/* Bag */}
      <path d="M163 60 C163 44 187 44 187 60" fill="none" stroke={C.mint} strokeWidth="3" strokeLinecap="round" />
      <path d="M146 66 H204 L198 128 H152 Z" fill={C.green} stroke={C.line} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="160" y="96" width="30" height="5" rx="2.5" fill={C.mint} opacity="0.6" />
      <g className="pf-a-pop" style={{ transformOrigin: "204px 66px" }}>
        <circle cx="204" cy="66" r="10" fill={C.gold} />
        <text x="204" y="70.5" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="12" fill={C.ink}>
          1
        </text>
      </g>
    </>
  );
}

function WordPress() {
  return (
    <Window>
      {/* Page canvas */}
      <rect x="24" y="34" width="132" height="96" rx="5" fill={C.panel} />
      <rect x="30" y="40" width="120" height="10" rx="3" fill={C.line} />
      <rect x="30" y="56" width="120" height="34" rx="4" fill={C.paper} opacity="0.9" />
      <circle cx="54" cy="73" r="8" fill={C.gold} />
      <path d="M70 90 L92 68 L114 90 Z" fill={C.green} />
      <rect x="30" y="98" width="120" height="26" rx="4" fill="none" stroke={C.mint} strokeDasharray="4 3" opacity="0.6" />
      {/* Block list */}
      <rect x="164" y="34" width="52" height="96" rx="5" fill={C.panel} />
      {[42, 62, 82].map((y, i) => (
        <rect key={y} x="170" y={y} width="40" height="14" rx="3" fill={i === 0 ? C.green : C.line} />
      ))}
      {/* Block being placed, with the cursor */}
      <g className="pf-a-place">
        <rect x="30" y="98" width="120" height="26" rx="4" fill={C.green} />
        <rect x="38" y="105" width="56" height="5" rx="2.5" fill={C.paper} opacity="0.8" />
        <rect x="38" y="114" width="38" height="4" rx="2" fill={C.mint} opacity="0.6" />
        <path d="M138 108 L138 124 L142 120 L146 128 L149 126.5 L145 119 L151 119 Z" fill={C.paper} stroke={C.ink} strokeWidth="1" />
      </g>
    </Window>
  );
}

function Creative() {
  return (
    <>
      <defs>
        <clipPath id="pf-cr-strip">
          <rect x="16" y="112" width="208" height="28" rx="5" />
        </clipPath>
        <clipPath id="pf-cr-frame">
          <rect x="16" y="10" width="208" height="94" rx="9" />
        </clipPath>
      </defs>
      <g clipPath="url(#pf-cr-frame)">
        <rect x="16" y="10" width="208" height="94" fill={C.panel} />
        <circle cx="172" cy="38" r="14" fill={C.gold} />
        <path d="M16 104 L74 52 L118 92 L150 66 L224 104 Z" fill={C.green} />
        <path d="M16 104 L52 80 L96 104 Z" fill={C.line} />
      </g>
      <rect x="16" y="10" width="208" height="94" rx="9" fill="none" stroke={C.line} />
      <circle className="pf-a-ping" cx="120" cy="57" r="17" fill="none" stroke={C.paper} strokeWidth="1.5" />
      <circle cx="120" cy="57" r="16" fill={C.paper} />
      <path d="M115 49 L128 57 L115 65 Z" fill={C.ink} />
      <g clipPath="url(#pf-cr-strip)">
        <g className="pf-a-scroll">
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x={16 + i * 40} y="114" width="34" height="24" rx="3" fill={[C.green, C.gold, C.line, C.mint][i % 4]} opacity={i % 4 === 3 ? 0.55 : 1} />
          ))}
        </g>
      </g>
    </>
  );
}

function Discover() {
  const nodes: [number, number][] = [
    [40, 40],
    [100, 30],
    [160, 52],
    [70, 96],
    [136, 106],
    [204, 92],
  ];
  return (
    <>
      <path d="M40 40 L100 30 L160 52 L204 92 M100 30 L70 96 L136 106 L204 92 M160 52 L136 106" fill="none" stroke={C.line} strokeWidth="1.5" />
      {nodes.map(([x, y], i) => (
        <rect key={i} x={x - 11} y={y - 7} width="22" height="14" rx="4" fill={i === 2 ? C.gold : C.panel} stroke={C.line} />
      ))}
      <g className="pf-a-scan">
        <circle cx="160" cy="52" r="19" fill={C.mint} fillOpacity="0.08" stroke={C.mint} strokeWidth="3" />
        <line x1="174" y1="66" x2="188" y2="80" stroke={C.mint} strokeWidth="5" strokeLinecap="round" />
      </g>
    </>
  );
}

function Design() {
  return (
    <>
      <rect x="16" y="14" width="208" height="122" rx="9" fill={C.ink} stroke={C.line} />
      <rect x="28" y="26" width="56" height="8" rx="4" fill={C.line} />
      <rect x="28" y="40" width="84" height="6" rx="3" fill={C.line} />
      {[C.gold, C.mint, C.green, C.paper].map((c, i) => (
        <circle key={c} cx={34 + i * 16} cy="120" r="6" fill={c} />
      ))}
      <path
        className="pf-a-draw"
        pathLength={1}
        d="M34 98 C70 30 120 130 164 70 S206 50 210 40"
        fill="none"
        stroke={C.gold}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line x1="164" y1="70" x2="190" y2="46" stroke={C.mint} strokeWidth="1" opacity="0.7" />
      <line x1="164" y1="70" x2="138" y2="94" stroke={C.mint} strokeWidth="1" opacity="0.7" />
      <rect x="160" y="66" width="8" height="8" fill={C.ink} stroke={C.mint} strokeWidth="1.5" />
      <circle cx="190" cy="46" r="3" fill={C.mint} />
      <circle cx="138" cy="94" r="3" fill={C.mint} />
      <rect x="30" y="94" width="8" height="8" fill={C.ink} stroke={C.mint} strokeWidth="1.5" />
    </>
  );
}

function Build() {
  const layer = (y: number, fill: string, i: number) => (
    <g key={i} className="pf-a-stack" style={d(0.18 * (2 - i))}>
      <path d={`M120 ${y} L196 ${y + 22} L120 ${y + 44} L44 ${y + 22} Z`} fill={fill} stroke={C.ink} strokeWidth="1.5" strokeLinejoin="round" />
    </g>
  );
  return (
    <>
      <path d="M44 98 L44 106 L120 128 L196 106 L196 98" fill={C.panel} />
      {layer(76, C.green, 0)}
      {layer(52, C.line, 1)}
      {layer(28, C.gold, 2)}
      <rect x="104" y="46" width="32" height="5" rx="2.5" fill={C.ink} opacity="0.5" />
    </>
  );
}

function Launch() {
  return (
    <Window>
      <rect x="62" y="20" width="116" height="10" rx="5" fill={C.panel} />
      <rect x="28" y="40" width="56" height="18" rx="9" fill={C.panel} />
      <circle className="pf-a-ping" cx="40" cy="49" r="5" fill="none" stroke={C.mint} strokeWidth="1.5" />
      <circle cx="40" cy="49" r="4" fill={C.mint} />
      <rect x="50" y="46.5" width="26" height="5" rx="2.5" fill={C.paper} />
      <path d="M28 120 H212" stroke={C.line} />
      <path
        className="pf-a-draw"
        pathLength={1}
        d="M28 104 L58 100 L84 106 L112 92 L140 96 L168 80 L212 74"
        fill="none"
        stroke={C.gold}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="194" cy="49" r="13" fill={C.gold} />
      <path d="M188 49 L192.5 53.5 L200 45" fill="none" stroke={C.ink} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </Window>
  );
}

const MAP: Record<IllustrationName, () => React.JSX.Element> = {
  crm: Crm,
  webapp: WebApp,
  store: Store,
  wordpress: WordPress,
  creative: Creative,
  discover: Discover,
  design: Design,
  build: Build,
  launch: Launch,
};

export function CardIllustration({ name, className = "" }: { name: IllustrationName; className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Art = MAP[name];
  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-inview={inView ? "true" : "false"}
      className={`pf-illo relative overflow-hidden rounded-xl bg-[#0A1C10] border border-[#1E3D25] ${className}`}
    >
      <svg viewBox="0 0 240 150" className="block w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <Art />
      </svg>
    </div>
  );
}

/* System architecture beside the platforms heading: web and mobile apps
   call one API, which routes to CRM, billing and dialer services that share
   a database. Requests travel the routes as small packets (one slow loop);
   reduced-motion visitors get the still diagram. */
const ROUTES = [
  "M104 45 C130 45 130 75 156 75 L236 75 C262 75 262 32 288 32 L372 32 C392 32 392 75 412 75",
  "M104 105 C130 105 130 75 156 75 L412 75",
  "M104 45 C130 45 130 75 156 75 L236 75 C262 75 262 118 288 118 L372 118 C392 118 392 75 412 75",
];

function Box({ x, y, w, h, label, tone = "panel" }: { x: number; y: number; w: number; h: number; label: string; tone?: "panel" | "api" }) {
  const api = tone === "api";
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={api ? C.ink : C.panel} stroke={api ? C.gold : C.line} strokeWidth={api ? 1.5 : 1} />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4}
        textAnchor="middle"
        fontFamily="Montserrat, sans-serif"
        fontWeight="700"
        fontSize={api ? 14 : 11.5}
        fill={api ? C.gold : C.paper}
      >
        {label}
      </text>
    </g>
  );
}

export function SystemFlow({ className = "" }: { className?: string }) {
  const [still, setStill] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setStill(mq.matches);
    const on = () => setStill(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  return (
    <svg viewBox="0 0 480 150" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      {ROUTES.map((d) => (
        <path key={d} d={d} fill="none" stroke={C.line} strokeWidth="1.5" strokeDasharray="3 4" />
      ))}

      {/* Packets travel under the boxes, so they look processed at each stop */}
      {!still &&
        ROUTES.map((d, i) => (
          <circle key={`p${i}`} r="4" fill={i === 1 ? C.mint : C.gold} opacity="0">
            <animateMotion dur="3.6s" begin={`${i * 1.2}s`} repeatCount="indefinite" path={d} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.9;1" dur="3.6s" begin={`${i * 1.2}s`} repeatCount="indefinite" />
          </circle>
        ))}

      <Box x={16} y={30} w={88} h={30} label="Web app" />
      <Box x={16} y={90} w={88} h={30} label="Mobile app" />
      <Box x={156} y={45} w={80} h={60} label="API" tone="api" />
      <Box x={288} y={18} w={84} h={28} label="CRM" />
      <Box x={288} y={61} w={84} h={28} label="Billing" />
      <Box x={288} y={104} w={84} h={28} label="Dialer" />

      {/* Database */}
      <path d="M412 56 V94 C412 104 464 104 464 94 V56" fill={C.panel} stroke={C.line} />
      <ellipse cx="438" cy="56" rx="26" ry="8" fill={C.green} stroke={C.line} />
      <path d="M412 69 C412 78 464 78 464 69 M412 82 C412 91 464 91 464 82" fill="none" stroke={C.line} />
      <text x="438" y="122" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="11" fill={C.mint}>
        Database
      </text>
    </svg>
  );
}
