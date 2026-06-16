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
      subtitle="Our Work"
      tagline="Projects We're Proud Of"
      titleLine1="OUR"
      titleLine2="PORTFOLIO"
    />,
    { width: W, height: H, fonts }
  );
}
