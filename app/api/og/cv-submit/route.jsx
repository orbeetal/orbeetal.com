import { ImageResponse } from "next/og";
import { cvSubmitMeta } from "@/data/cvSubmit.js";
import { W, H, BLUE, CYAN, loadFonts, Shell, InfoItem, BrandRow } from "../_shared";

export const runtime = "edge";

function CvSubmitCard() {
  return (
    <Shell accentColor={BLUE} secondaryGlow={CYAN} barColors={[BLUE, CYAN]}>
      <BrandRow subtitle={`RCF ${cvSubmitMeta.edition} Career Fair`} />
      <div style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <div style={{ width: 48, height: 4, backgroundColor: CYAN, borderRadius: 2 }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: `${CYAN}bb`, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            Your Career Starts Here
          </span>
          <div style={{ width: 48, height: 4, backgroundColor: CYAN, borderRadius: 2 }} />
        </div>
        <span style={{ fontSize: 108, fontWeight: 900, color: CYAN, letterSpacing: "-6px", lineHeight: 0.82 }}>
          CAREER
        </span>
        <span style={{ fontSize: 108, fontWeight: 900, color: "#ffffff", letterSpacing: "-6px", lineHeight: 0.82, marginTop: 6 }}>
          FAIR
        </span>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "stretch", width: "100%" }}>
        <InfoItem label="CV Drop" value="Submit Online" accentColor={CYAN} />
        <InfoItem label="Event Date" value={cvSubmitMeta.eventDate} highlight accentColor={CYAN} />
        <InfoItem label="Venue" value="RUET Campus" accentColor={CYAN} />
      </div>
    </Shell>
  );
}

export async function GET() {
  const fonts = await loadFonts();
  return new ImageResponse(<CvSubmitCard />, { width: W, height: H, fonts });
}
