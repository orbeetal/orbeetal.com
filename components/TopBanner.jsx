"use client";

import { createElement } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { resolveTopBanner } from "@/lib/siteFeatures.js";
import { resolveIcon } from "@/lib/icons";

export function TopBanner() {
  const banner = resolveTopBanner();
  if (!banner) return null;

  const { content, iconName } = banner;

  return (
    <div className="bg-amber-500 text-black w-full py-2.5 px-4 flex items-center justify-center">
      <div className="flex items-center gap-x-2 sm:gap-x-4 flex-wrap justify-center gap-y-1 text-center">
        {createElement(resolveIcon(iconName) ?? ArrowRight, { className: "w-4 h-4 shrink-0" })}

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
