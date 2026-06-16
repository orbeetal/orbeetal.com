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
      subtitle="Leadership"
      tagline="7 Visionary Directors"
      titleLine1="MEET THE"
      titleLine2="DIRECTORS"
    />,
    { width: W, height: H, fonts }
  );
}
