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
      subtitle="Get In Touch"
      tagline="Ready to Launch?"
      titleLine1="CONTACT"
      titleLine2="ORBEETAL"
    />,
    { width: W, height: H, fonts }
  );
}
