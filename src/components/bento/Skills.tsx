"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiTableau,
  SiJira,
  SiFigma,
  SiNotion,
  SiGoogleanalytics,
  SiConfluence,
  SiMiro,
} from "react-icons/si";
import { 
  FileSpreadsheet, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  Lightbulb,
  Database,
  PieChart,
  Brain,
  Kanban,
  MapPin,
  Search,
  PenTool,
  TestTube,
  LineChart,
  Rocket,
  FileText,
  Boxes,
  MessageSquare,
  Palette
} from "lucide-react";

const skillIcons = [
  // Product Management
  MapPin, // Roadmapping
  Search, // User Research
  PenTool, // Wireframing
  TrendingUp, // Retention & Churn Analysis
  TestTube, // A/B Testing
  LineChart, // Market Analysis
  Rocket, // Product Strategy
  Boxes, // MVP
  FileText, // PRD
  Target, // OKRs
  
  // Analytics
  Database, // SQL
  FileSpreadsheet, // Excel
  SiTableau, // Tableau
  BarChart3, // Data Visualization
  PieChart, // KPI Tracking
  SiGoogleanalytics, // Google Analytics 4
  TrendingUp, // Mixpanel
  Brain, // Metrics-Driven Insights
  
  // Collaboration
  SiJira, // JIRA
  SiNotion, // Notion
  MessageSquare, // Medium
  SiConfluence, // Confluence
  SiFigma, // Figma
  Palette, // Balsamiq
  Lightbulb, // Whimsical
  SiMiro, // Miro
  Kanban, // Agile/Scrum
  Users, // Stakeholder Management
];

export const SkillsCarousel = () => {
  const repeatedIcons = [...skillIcons, ...skillIcons, ...skillIcons, ...skillIcons];
  const half = Math.ceil(repeatedIcons.length / 2);
  const firstRow = repeatedIcons.slice(0, half);
  const secondRow = repeatedIcons.slice(half);

  return (
    <div className="bg-card rounded-xl p-4 overflow-hidden shadow-md w-full h-full">
      <h2 className="text-lg font-light mb-3">Skills</h2>
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
