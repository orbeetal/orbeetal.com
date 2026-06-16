import { ImageResponse } from "next/og";
import { W, H, BLUE, CYAN, loadFonts, PageCard } from "../_shared";

export const runtime = "edge";

export async function GET() {
  const fonts = await loadFonts();
  return new ImageResponse(
    <PageCard
      accentColor={BLUE}
      secondaryGlow={CYAN}
      barColors={[BLUE, CYAN]}
      subtitle="Digital Services"
      tagline="What We Offer"
      titleLine1="STRATEGIC"
      titleLine2="CAPABILITIES"
    />,
    { width: W, height: H, fonts }
  );
}
