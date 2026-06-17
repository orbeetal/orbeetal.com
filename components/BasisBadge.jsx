import { ExternalLink } from "lucide-react";
import Image from "next/image";

const BASIS_URL = "https://basis.org.bd/company-profile/26-02-043";

export function BasisBadge() {
  return (
    <a
      href={BASIS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-4 px-5 py-3 mx-4 rounded-xl border border-amber-400/25 bg-amber-400/8 hover:border-amber-400/50 hover:bg-amber-400/12 transition-all duration-300"
    >
      <div className="shrink-0 w-20 h-12 md:w-28 md:h-18 bg-white rounded-lg overflow-hidden flex items-center justify-center">
        <Image
          src="/brand/basis_logo.jpeg"
          alt="BASIS — Bangladesh Association of Software & Information Services"
          width={72}
          height={40}
          className="object-contain w-full h-full -mb-1"
        />
      </div>
      <div>
        <div className="text-amber-300 font-semibold text-xl tracking-wide flex gap-2 group-hover:text-amber-200 transition-colors">
          <span>Proud Member of BASIS</span>
          <ExternalLink className="inline-block size-6 ml-auto mb-2" />
        </div>
        <span className="text-amber-400/50 text-xs hidden sm:block mt-0.5">
          Bangladesh Association of Software &amp; Information Services
        </span>
      </div>
    </a>
  );
}
