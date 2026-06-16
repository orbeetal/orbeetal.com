import { ImageResponse } from "next/og";
import { W, H, BLUE, CYAN, loadFonts, Shell, BrandRow } from "./_shared";

export const runtime = "edge";

function DefaultCard() {
  return (
    <Shell accentColor={BLUE} secondaryGlow={CYAN} barColors={[BLUE, CYAN]}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>Orbeetal</span>
        <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.25)" }} />
        <span style={{ fontSize: 15, color: "rgba(255,255,255,0.38)" }}>Software Company</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <div style={{ width: 48, height: 4, backgroundColor: BLUE, borderRadius: 2 }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: `${BLUE}cc`, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            Elevate Above the Competition
          </span>
          <div style={{ width: 48, height: 4, backgroundColor: BLUE, borderRadius: 2 }} />
        </div>
        <span style={{ fontSize: 108, fontWeight: 900, color: "#ffffff", letterSpacing: "-6px", lineHeight: 0.82 }}>
          ORBEETAL
        </span>
      </div>
      <span style={{ fontSize: 20, fontWeight: 400, color: "rgba(255,255,255,0.38)", maxWidth: 580, lineHeight: 1.65, textAlign: "center" }}>
        A forward-thinking software company dedicated to building smart, impactful
        technology — empowering businesses through innovation.
      </span>
    </Shell>
  );
}

export async function GET() {
  const fonts = await loadFonts();
  return new ImageResponse(<DefaultCard />, { width: W, height: H, fonts });
}
