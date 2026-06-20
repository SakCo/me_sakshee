"use client";
import React from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SqlIcon,
  Route01Icon,
  UserSearch01Icon,
  DashboardSquare01Icon,
  TestTube01Icon,
  ChartIncreaseIcon,
  Rocket01Icon,
  PackageIcon,
  FileEditIcon,
  Target01Icon,
  PieChart01Icon,
  DashboardSpeed01Icon,
  ArrowReloadHorizontalIcon,
  UserGroup02Icon,
} from "@hugeicons/core-free-icons";
import { logos } from "../../lib/logos";

// Real Microsoft Excel mark (Iconify's logos set has no Excel icon).
const ExcelLogo = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="18" rx="3" fill="#1D6F42" />
    <path
      fill="#fff"
      d="M8.3 7.5h2.1L12 10.2l1.6-2.7h2.1L13 12l2.7 4.5h-2.1L12 13.8l-1.6 2.7H8.3L11 12 8.3 7.5Z"
    />
  </svg>
);

// `logo` = real multi-color brand logo (Iconify logos set).
// `Custom` = hand-built brand mark. `huge` = modern HugeIcons (colored) for
// generic concepts and soft / product skills.
type Skill = {
  name: string;
  logo?: IconifyIcon;
  Custom?: React.FC<{ size?: number }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  huge?: any;
  color?: string;
};

// Top row — technical / tools (actual logos)
const tools: Skill[] = [
  { name: "Python", logo: logos.python },
  { name: "SQL", huge: SqlIcon, color: "#38bdf8" },
  { name: "MySQL", logo: logos.mysql },
  { name: "PostgreSQL", logo: logos.postgresql },
  { name: "Pandas", logo: logos.pandas },
  { name: "NumPy", logo: logos.numpy },
  { name: "Excel", Custom: ExcelLogo },
  { name: "Tableau", logo: logos.tableau },
  { name: "Power BI", logo: logos.powerbi },
  { name: "Google Analytics 4", logo: logos.googleAnalytics },
  { name: "Mixpanel", logo: logos.mixpanel },
  { name: "Matplotlib", logo: logos.matplotlib },
  { name: "JIRA", logo: logos.jira },
  { name: "Notion", logo: logos.notion },
  { name: "Confluence", logo: logos.confluence },
  { name: "Figma", logo: logos.figma },
  { name: "Miro", logo: logos.miro },
  { name: "Git / GitHub", logo: logos.github },
];

// Bottom row — product / soft skills (modern HugeIcons, colored)
const softSkills: Skill[] = [
  { name: "Roadmapping", huge: Route01Icon, color: "#6366f1" },
  { name: "User Research", huge: UserSearch01Icon, color: "#0ea5e9" },
  { name: "Wireframing", huge: DashboardSquare01Icon, color: "#ec4899" },
  { name: "A/B Testing", huge: TestTube01Icon, color: "#a855f7" },
  { name: "Market Analysis", huge: ChartIncreaseIcon, color: "#22c55e" },
  { name: "Product Strategy", huge: Rocket01Icon, color: "#f43f5e" },
  { name: "MVP", huge: PackageIcon, color: "#f97316" },
  { name: "PRD", huge: FileEditIcon, color: "#3b82f6" },
  { name: "OKRs", huge: Target01Icon, color: "#ef4444" },
  { name: "Data Visualization", huge: PieChart01Icon, color: "#f59e0b" },
  { name: "KPI Tracking", huge: DashboardSpeed01Icon, color: "#10b981" },
  { name: "Agile / Scrum", huge: ArrowReloadHorizontalIcon, color: "#06b6d4" },
  { name: "Stakeholder Management", huge: UserGroup02Icon, color: "#14b8a6" },
];

const SkillBadge = ({ skill }: { skill: Skill }) => {
  const { name, logo, Custom, huge, color } = skill;
  return (
    <div className="group/skill relative flex-shrink-0">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm transition-transform duration-200 group-hover/skill:scale-110">
        {logo ? (
          <Icon icon={logo} width={32} height={32} />
        ) : Custom ? (
          <Custom size={32} />
        ) : (
          <HugeiconsIcon icon={huge} size={32} color={color} strokeWidth={1.8} />
        )}
      </div>
      {/* Tooltip */}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 shadow-md transition-opacity duration-200 group-hover/skill:opacity-100">
        {name}
      </span>
    </div>
  );
};

export const SkillsCarousel = () => {
  return (
    <div className="w-full h-full overflow-x-clip overflow-y-visible rounded-xl border border-border/50 bg-card p-4 py-6 shadow-md">
      <h2 className="mb-5 text-lg font-light">Skills</h2>
      <div className="space-y-8">
        {/* Row 1 — tools / tech */}
        <div className="overflow-x-clip overflow-y-visible">
          <div className="skills-track flex w-max gap-5">
            {[...tools, ...tools].map((skill, idx) => (
              <SkillBadge key={`tools-${idx}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2 — soft / product skills */}
        <div className="overflow-x-clip overflow-y-visible">
          <div className="skills-track-reverse flex w-max gap-5">
            {[...softSkills, ...softSkills].map((skill, idx) => (
              <SkillBadge key={`soft-${idx}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
