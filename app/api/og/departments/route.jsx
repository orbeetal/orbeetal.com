import { ImageResponse } from "next/og";
import { W, H, BLUE, CYAN, loadFonts, PageCard } from "../_shared";

export const runtime = "edge";

export async function GET() {
  const fonts = await loadFonts();
  return new ImageResponse(
    <PageCard
      accentColor={CYAN}
      secondaryGlow={BLUE}
      barColors={[CYAN, BLUE]}
      subtitle="Our Structure"
      tagline="7 Specialized Units"
      titleLine1="OUR"
      titleLine2="DEPARTMENTS"
    />,
    { width: W, height: H, fonts }
  );
}
