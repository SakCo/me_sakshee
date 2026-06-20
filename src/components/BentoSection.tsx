"use client"

import React from "react";
import { SkillsCarousel } from "./bento/Skills";

export default function BentoGrid() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-12 pb-8">
      <div className="text-muted py-6 flex">Want to know more? Explore my <span className="text-foreground px-1">Skills</span>.</div>

      <SkillsCarousel />
    </div>
  );
}
