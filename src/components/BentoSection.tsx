"use client"

import React from "react";
import { SkillsCarousel } from "./bento/Skills";
import { RecentBlogs } from "./bento/RecentBlogs";
import Link from "next/link";

export default function BentoGrid() {


  return (
    <div className="w-full max-w-3xl  mx-auto px-4 pt-12 pb-8">
       <div className="text-muted py-6 flex">Want to know more? Explore my <span className="text-foreground px-1">Skills & Blogs</span>.</div>

      <div className="grid grid-cols-1 gap-4">
        {/* Full Width Skills Section */}
        <div className="bg-card rounded-xl shadow-md border border-gray-200 flex items-center justify-center min-h-[120px] md:min-h-[180px]">
          <SkillsCarousel/>
        </div>

        {/* Blogs Section - Two Cards */}
        <div className="space-y-3">
          <h2 className="text-lg font-light text-foreground/80 px-2">Recent Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card rounded-xl shadow-md border border-gray-200 flex items-center justify-center min-h-[120px] md:min-h-[180px]">
              <RecentBlogs showTitle={false} />
            </div>
            <div className="bg-card rounded-xl shadow-md border border-gray-200 flex items-center justify-center min-h-[120px] md:min-h-[180px]">
              <RecentBlogs showTitle={false} />
            </div>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-2">
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-3 text-md lg:text-lg font-normal text-foreground hover:text-foreground/80 transition-all duration-300 hover:gap-4"
          >
            <span>Explore More</span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border/30 group-hover:border-border/60 group-hover:bg-muted/50 transition-all duration-300">
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
