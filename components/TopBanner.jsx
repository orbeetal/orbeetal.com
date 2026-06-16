"use client";

import Link from "next/link";
import { Trophy, ArrowRight, Briefcase } from "lucide-react";
import { activeHero, showTopBanner } from "@/data/siteConfig.js";
import { ideaContestBannerContent } from "@/data/ideaContest.js";
import { cvSubmitBannerContent } from "@/data/cvSubmit.js";

const BANNER_MAP = {
  "idea-contest": { content: ideaContestBannerContent, Icon: Trophy },
  "cv-submit":    { content: cvSubmitBannerContent,    Icon: Briefcase },
};

export function TopBanner() {
  if (!showTopBanner) return null;

  const banner = BANNER_MAP[activeHero];
  if (!banner) return null;

  const { content, Icon } = banner;

  return (
    <div className="bg-amber-500 text-black w-full py-2.5 px-4 flex items-center justify-center">
      <div className="flex items-center gap-x-2 sm:gap-x-4 flex-wrap justify-center gap-y-1 text-center">
        <Icon className="w-4 h-4 shrink-0" />

        <span className="font-semibold text-sm tracking-wide">{content.label}</span>

        <span className="hidden sm:flex items-center gap-x-4 text-sm text-black/70">
          <span>·</span>
          <span>{content.highlight}</span>
          <span>·</span>
          <span>{content.detail}</span>
        </span>

        <Link
          href={content.href}
          className="inline-flex items-center gap-1 text-sm font-bold underline underline-offset-2 hover:no-underline transition-all ml-1"
        >
          {content.cta} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
