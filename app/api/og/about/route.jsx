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
      subtitle="Who We Are"
      tagline="BASIS Certified · Dhaka, Bangladesh"
      titleLine1="ABOUT"
      titleLine2="ORBEETAL"
    />,
    { width: W, height: H, fonts }
  );
}
