"use client";

import React, { useState } from "react";
import { ProjectCard } from "@/src/components/ui/project-card";
import { projects, caseStudies } from "@/src/lib/constants";
import DockBar from "@/src/components/Dock";
import Title from "@/src/components/ui/title";
import { InteractiveGridPattern } from "@/src/components/ui/interactive-grid-pattern";

const ProofOfWorkPage = () => {
  const [activeTab, setActiveTab] = useState<"projects" | "case-studies">("projects");

  const displayedItems = activeTab === "projects" ? projects : caseStudies;

  return (
    <div className="min-h-screen min-w-full bg-background relative overflow-hidden font-display antialiased selection:bg-pink-600 selection:text-foreground">
      <InteractiveGridPattern />
      <div className="relative z-10 max-w-xl sm:max-w-4xl mx-auto lg:mx-96 mt-6 px-4 sm:px-10 py-12 sm:py-16 mb-4">
        {/* Section Header */}
        <header className="text-center mb-8 lg:mb-12">
          <Title 
            title="Proof Of Work" 
            subtitle="Showcasing impactful product management and analytics projects."
          />
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 p-1 bg-muted/30 rounded-lg border border-border/30">
            <button
              onClick={() => setActiveTab("projects")}
              className={`
                px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300
                ${activeTab === "projects" 
                  ? "bg-background text-foreground shadow-sm border border-border/50" 
                  : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("case-studies")}
              className={`
                px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300
                ${activeTab === "case-studies" 
                  ? "bg-background text-foreground shadow-sm border border-border/50" 
                  : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              Case Studies
            </button>
          </div>
        </div>

        {/* Count Badge */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-muted/40 rounded-full text-sm text-muted-foreground border border-border/30">
            {displayedItems.length} {activeTab === "projects" ? "Projects" : "Case Studies"}
          </span>
        </div>

        {/* Projects/Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {displayedItems.map((item, index) => (
            <div
              key={item.title}
              className="group h-full"
              style={{
                animationDelay: `${index * 120}ms`,
                animationFillMode: "both",
              }}
            >
              <ProjectCard
                title={item.title}
                description={item.description}
                tech={item.tech}
                imageSrc={item.imageSrc}
                link={item.link}
                source={item.code}
              />
            </div>
          ))}
        </div>
        <DockBar />
      </div>
    </div>
  );
};

export default ProofOfWorkPage;
