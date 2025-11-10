"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { I_Experience } from "../types/type";
import { experienceData } from "../lib/constants";


export const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0); // First accordion open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-12 lg:py-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-10 lg:mb-12">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground mb-2 tracking-tight">
            Experience
          </div>
          <p className="text-md lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in product management and analytics.
          </p>
        </header>

        {/* Experience Accordion */}
        <div className="space-y-4">
          {experienceData.map((exp: I_Experience, idx) => (
            <ExperienceAccordion
              key={`${exp.company_name}-${idx}`}
              experience={exp}
              isOpen={openIndex === idx}
              onToggle={() => toggleAccordion(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceAccordionProps {
  experience: I_Experience;
  isOpen: boolean;
  onToggle: () => void;
}

const ExperienceAccordion: React.FC<ExperienceAccordionProps> = ({
  experience,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border border-border/50 rounded-lg bg-card/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-border/80">
      {/* Accordion Header - Always Visible */}
      <button
        onClick={onToggle}
        className="w-full p-4 lg:p-6 flex items-center gap-4 text-left hover:bg-muted/20 transition-colors"
      >
        {/* Company Logo */}
        <Link
          href={experience.company_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 transition-transform hover:scale-105"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-md overflow-hidden border border-border/30 bg-background">
            <Image
              src={experience.company_logo}
              alt={`${experience.company_name} logo`}
              width={56}
              height={56}
              className="w-full h-full object-cover lg:grayscale lg:hover:grayscale-0 transition-all"
            />
          </div>
        </Link>

        {/* Job Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base lg:text-lg font-medium text-foreground mb-0.5 truncate">
            {experience.job_title}
          </h3>
          <p className="text-sm text-muted-foreground font-medium truncate">
            {experience.company_name}
          </p>
        </div>

        {/* Duration & Arrow */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="hidden sm:block text-xs lg:text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/30 whitespace-nowrap">
            {experience.duration}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Accordion Content - Collapsible */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 lg:px-6 pb-4 lg:pb-6 pt-2 border-t border-border/30">
              {/* Duration on mobile */}
              <div className="sm:hidden mb-3">
                <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/30 inline-block">
                  {experience.duration}
                </span>
              </div>

              {/* Highlights - Bulleted List */}
              {experience.highlights && experience.highlights.length > 0 && (
                <div className="space-y-2">
                  <ul className="space-y-2 ml-1">
                    {experience.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="text-accent-foreground mt-1.5 flex-shrink-0">
                          •
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
