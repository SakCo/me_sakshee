"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiTableau,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiJira,
  SiFigma,
  SiNotion,
  SiGoogleanalytics,
  SiMongodb,
} from "react-icons/si";
import { Database, BarChart3, TrendingUp, Users, Target, Lightbulb, FileSpreadsheet, PieChart, Brain, Kanban } from "lucide-react";

const baseIcons = [
  SiTableau,
  SiPython,
  FileSpreadsheet, // Excel
  PieChart, // Power BI
  SiPostgresql,
  SiMysql,
  SiJira,
  SiFigma,
  SiNotion,
  SiGoogleanalytics,
  SiMongodb,
  Database,
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Lightbulb,
  Brain,
  Kanban,
];

export const SkillsCarousel = () => {
  const repeatedIcons = [...baseIcons, ...baseIcons, ...baseIcons, ...baseIcons]; 
  const half = Math.ceil(repeatedIcons.length / 2);
  const firstRow = repeatedIcons.slice(0, half);
  const secondRow = repeatedIcons.slice(half);

  return (
    <div className="bg-card rounded-xl p-4 overflow-hidden shadow-md   w-full h-full">
      <h2 className="text-lg font-light  mb-3">Skills</h2>
      <div className="space-y-4">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -1920] }} 
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            }
          }}
        >
          {[...firstRow, ...firstRow, ...firstRow].map((Icon, idx) => (
            <Icon key={`row1-${idx}`} size={32} className="text-secondary flex-shrink-0" />
          ))}
        </motion.div>

        <motion.div
          className="flex gap-6 mt-8"
          animate={{ x: [-1920, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            }
          }}
        >
          {[...secondRow, ...secondRow, ...secondRow].map((Icon, idx) => (
            <Icon key={`row2-${idx}`} size={32} className="text-secondary flex-shrink-0" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
