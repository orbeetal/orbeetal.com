import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/SocialIcons";

const PLATFORMS = {
  linkedin: { Icon: LinkedinIcon, label: "LinkedIn" },
  github: { Icon: GithubIcon, label: "GitHub" },
  twitter: { Icon: TwitterIcon, label: "Twitter" },
};

export function SocialLinks({ social }) {
  if (!social || Object.keys(social).length === 0) return null;

  return (
    <div className="flex items-center gap-3 sm:ml-auto shrink-0">
      {Object.entries(social).map(([platform, url]) => {
        const config = PLATFORMS[platform];
        if (!config || !url) return null;
        const { Icon, label } = config;
        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white/40 hover:text-primary hover:border-primary/30 text-xs transition-all"
          >
            <Icon className="w-4 h-4" /> {label}
          </a>
        );
      })}
    </div>
  );
}
