import {
  features,
  activeHero,
  activeTopBanner,
  customBannerContent,
} from "@/data/siteConfig.js";
import { ideaContestBannerContent } from "@/data/ideaContest.js";
import { cvSubmitBannerContent } from "@/data/cvSubmit.js";

const EVENT_NAV_LINKS = {
  ideaContest: { name: "Idea Contest", route: "/idea-contest" },
  cvSubmit: { name: "Career Fair", route: "/cv-submit" },
};

const BANNER_MAP = {
  "idea-contest": { content: ideaContestBannerContent, iconName: "Trophy" },
  "cv-submit": { content: cvSubmitBannerContent, iconName: "Briefcase" },
};

export function isIdeaContestEnabled() {
  return features.ideaContest === true;
}

export function isCvSubmitEnabled() {
  return features.cvSubmit === true;
}

export function resolveActiveHero() {
  if (activeHero === "idea-contest" && !isIdeaContestEnabled()) return "hero";
  if (activeHero === "cv-submit" && !isCvSubmitEnabled()) return "hero";
  return activeHero;
}

export function resolveTopBanner() {
  if (!activeTopBanner) return null;

  if (activeTopBanner === "custom") {
    return {
      content: customBannerContent,
      iconName: customBannerContent.icon ?? "Megaphone",
    };
  }

  return BANNER_MAP[activeTopBanner] ?? null;
}

export function getEnabledEventNavLinks() {
  const links = [];
  if (isIdeaContestEnabled()) links.push(EVENT_NAV_LINKS.ideaContest);
  if (isCvSubmitEnabled()) links.push(EVENT_NAV_LINKS.cvSubmit);
  return links;
}
