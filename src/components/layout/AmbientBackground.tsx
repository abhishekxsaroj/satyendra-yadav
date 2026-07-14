"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#f4f7fb]" />

      <motion.div
        className="absolute -left-[12%] top-[-8%] h-[55vh] w-[55vh] rounded-full bg-[#93c5fd]/45 blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[10%] top-[15%] h-[50vh] w-[50vh] rounded-full bg-[#7dd3fc]/40 blur-[110px]"
        animate={{ x: [0, -35, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[20%] top-[45%] h-[45vh] w-[45vh] rounded-full bg-[#bfdbfe]/35 blur-[120px]"
        animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-5%] right-[15%] h-[40vh] w-[40vh] rounded-full bg-[#bae6fd]/40 blur-[100px]"
        animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[-5%] h-[35vh] w-[35vh] rounded-full bg-[#cbd5e1]/50 blur-[90px]"
        animate={{ x: [0, 25, 0], y: [0, 20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Geometric line art — edges only, slightly stronger */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.78]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="geoStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#64748B" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Large concentric circles — top right */}
        <motion.g
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "1240px 140px" }}
        >
          <circle cx="1240" cy="140" r="90" stroke="url(#geoStroke)" strokeWidth="1.15" />
          <circle
            cx="1240"
            cy="140"
            r="145"
            stroke="url(#geoStroke)"
            strokeWidth="0.95"
            strokeDasharray="4 8"
          />
          <circle
            cx="1240"
            cy="140"
            r="200"
            stroke="#94a3b8"
            strokeWidth="0.75"
            opacity="0.65"
          />
          <line
            x1="1040"
            y1="140"
            x2="1440"
            y2="140"
            stroke="#94a3b8"
            strokeWidth="0.6"
            opacity="0.55"
          />
          <line
            x1="1240"
            y1="-60"
            x2="1240"
            y2="340"
            stroke="#94a3b8"
            strokeWidth="0.6"
            opacity="0.55"
          />
        </motion.g>

        {/* Hexagon wireframe — far left */}
        <motion.g
          animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "120px 300px" }}
        >
          <polygon
            points="120,200 210,250 210,350 120,400 30,350 30,250"
            stroke="url(#geoStroke)"
            strokeWidth="1.15"
          />
          <polygon
            points="120,235 175,268 175,332 120,365 65,332 65,268"
            stroke="#38BDF8"
            strokeWidth="0.85"
            opacity="0.7"
          />
          <line
            x1="120"
            y1="200"
            x2="120"
            y2="400"
            stroke="#94a3b8"
            strokeWidth="0.6"
            opacity="0.55"
          />
          <line
            x1="30"
            y1="250"
            x2="210"
            y2="350"
            stroke="#94a3b8"
            strokeWidth="0.55"
            opacity="0.45"
          />
          <line
            x1="210"
            y1="250"
            x2="30"
            y2="350"
            stroke="#94a3b8"
            strokeWidth="0.55"
            opacity="0.45"
          />
        </motion.g>

        {/* Triangle constellation — bottom left edge */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <polygon
            points="40,680 170,610 120,800"
            stroke="url(#geoStroke)"
            strokeWidth="1.15"
          />
          <circle cx="40" cy="680" r="4" stroke="#2563EB" strokeWidth="1.1" />
          <circle cx="170" cy="610" r="4" stroke="#38BDF8" strokeWidth="1.1" />
          <circle cx="120" cy="800" r="4" stroke="#64748B" strokeWidth="1.1" />
        </motion.g>

        {/* Isometric cube outline — bottom right edge */}
        <motion.g
          animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M1280 640 L1360 595 L1440 640 L1440 730 L1360 775 L1280 730 Z"
            stroke="url(#geoStroke)"
            strokeWidth="1.15"
          />
          <path
            d="M1280 640 L1360 685 L1440 640"
            stroke="#38BDF8"
            strokeWidth="0.95"
            opacity="0.75"
          />
          <line
            x1="1360"
            y1="685"
            x2="1360"
            y2="775"
            stroke="#94a3b8"
            strokeWidth="0.8"
            opacity="0.6"
          />
        </motion.g>

        {/* Arc — far right edge */}
        <motion.path
          d="M1280 420 A 110 110 0 0 1 1440 500"
          stroke="url(#geoStroke)"
          strokeWidth="1.1"
          strokeDasharray="6 10"
          animate={{ pathLength: [0.35, 1, 0.35], opacity: [0.45, 0.85, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Nested squares rotated — top left corner */}
        <motion.g
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "90px 80px" }}
        >
          <rect
            x="30"
            y="20"
            width="120"
            height="120"
            stroke="url(#geoStroke)"
            strokeWidth="0.95"
          />
          <rect
            x="50"
            y="40"
            width="80"
            height="80"
            stroke="#38BDF8"
            strokeWidth="0.85"
            opacity="0.7"
            transform="rotate(15 90 80)"
          />
        </motion.g>

        {/* Edge construction lines — left & right gutters only */}
        <line
          x1="220"
          y1="0"
          x2="160"
          y2="900"
          stroke="#94a3b8"
          strokeWidth="0.55"
          opacity="0.35"
          strokeDasharray="2 12"
        />
        <line
          x1="1280"
          y1="0"
          x2="1340"
          y2="900"
          stroke="#94a3b8"
          strokeWidth="0.55"
          opacity="0.3"
          strokeDasharray="2 14"
        />

        {/* Small ring — bottom right, away from content */}
        <motion.g
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "1340px 380px" }}
        >
          <circle
            cx="1340"
            cy="380"
            r="32"
            stroke="#2563EB"
            strokeWidth="1"
            opacity="0.55"
          />
          <circle
            cx="1340"
            cy="380"
            r="54"
            stroke="#38BDF8"
            strokeWidth="0.8"
            opacity="0.45"
            strokeDasharray="3 6"
          />
        </motion.g>

        {/* Diamond — bottom left corner */}
        <motion.polygon
          points="60,820 110,770 160,820 110,870"
          stroke="url(#geoStroke)"
          strokeWidth="1.1"
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "110px 820px" }}
        />
        <polygon
          points="85,820 110,795 135,820 110,845"
          stroke="#94a3b8"
          strokeWidth="0.7"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}
