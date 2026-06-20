"use client";
import Image from "next/image";
import Link from "next/link";
import BorderFrame from "./ui/BorderFrame";
import { FlipWords } from "./ui/flip-words";
import { words } from "../lib/constants";
import {
  BadgeCheck,
  FileText,
  ExternalLink
} from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SourceCodeIcon,
  Location01Icon,
  Mail01Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import Text from "./ui/text";

export const Hero = () => {
  return (
    <section className="relative pb-6 lg:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-8 mb-4 sm:mb-6">
          {/* Profile Picture */}

          <div className="group flex items-start">
            <BorderFrame className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 ">
              <Image
                src="/assets/SakshiAnime.png"
                width={128}
                height={128}
                alt="Sakshi Singh"
                className="
        w-full h-full object-cover
        transition-all duration-300
      "
                priority
              />
            </BorderFrame>
          </div>







          <div className="flex-1  ">
            <div className="text-xl sm:text-2xl lg:text-3xl font-medium mb-1 leading-tight flex items-center gap-2 ">
              Sakshi Singh
              <BadgeCheck className="text-foreground/80" />
            </div>
            <FlipWords
              words={words}
              className="text-md sm:text-lg text-muted-foreground/80 font-medium"
            />
          </div>
        </div>

        {/* Professional Info */}
        <div className="space-y-1 max-w-2xl mx-auto sm:mx-0">
          <div className="text-muted my-8 text-md lg:text-lg">
            Aspiring <span className="text-foreground">Product Manager</span>, <span className="text-foreground">Business Analyst</span> and <span className="text-foreground">Data Analyst</span> with a strong foundation in analytics, product thinking and strategy. I turn data and user insights into clear product direction and measurable impact, working across product, growth and operations to build things people actually use.
          </div>
          <div className="flex items-start lg:items-center gap-3 ">
            <HugeiconsIcon icon={SourceCodeIcon} size={20} color="#6366f1" strokeWidth={1.8} className="flex-shrink-0" />
            <Text text="Product · Business Analysis · Data · Strategy" />

          </div>

          <div className="flex items-center gap-3">
            <HugeiconsIcon icon={Location01Icon} size={20} color="#f43f5e" strokeWidth={1.8} className="flex-shrink-0" />
            <Text text="Ahmedabad, Gujarat" />


          </div>

          <div className="flex items-center gap-3">
            <HugeiconsIcon icon={Mail01Icon} size={20} color="#0ea5e9" strokeWidth={1.8} className="flex-shrink-0" />
            <Link
              href="mailto:sakshisinghpie@gmail.com"
              className="text-base sm:text-lg text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              <Text text="sakshisinghpie@gmail.com" />

            </Link>
          </div>

          <div className="flex items-center gap-3 text-foreground/80 text-base sm:text-lg">
            <HugeiconsIcon icon={UserCircleIcon} size={20} color="#a855f7" strokeWidth={1.8} className="flex-shrink-0" />
            <Text text="She/Her" />


          </div>

          {/* Open for Work badge + Resume */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide">Open for Work</span>
            </span>

            <Link
              href="/assets/Sakshi_Singh_Resume_L1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm text-sm font-medium text-foreground hover:border-border/80 hover:bg-muted/30 transition-all"
            >
              <FileText className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span>View Resume</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
