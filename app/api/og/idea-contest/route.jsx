import { ImageResponse } from "next/og";
import { ideaContestMeta } from "@/data/ideaContest.js";
import { W, H, BLUE, AMBER, loadFonts, Shell, InfoItem, BrandRow } from "../_shared";

export const runtime = "edge";

function IdeaContestCard() {
  return (
    <Shell accentColor={AMBER} secondaryGlow={BLUE} barColors={[AMBER, "#f97316"]}>
      <BrandRow subtitle="Idea Contest 2026" />
      <div style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <div style={{ width: 48, height: 4, backgroundColor: AMBER, borderRadius: 2 }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: `${AMBER}cc`, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            Ideas Today, Impact Tomorrow
          </span>
          <div style={{ width: 48, height: 4, backgroundColor: AMBER, borderRadius: 2 }} />
        </div>
        <span style={{ fontSize: 108, fontWeight: 900, color: AMBER, letterSpacing: "-6px", lineHeight: 0.82 }}>
          IDEA
        </span>
        <span style={{ fontSize: 108, fontWeight: 900, color: "#ffffff", letterSpacing: "-6px", lineHeight: 0.82, marginTop: 6 }}>
          CONTEST
        </span>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "stretch", width: "100%" }}>
        <InfoItem label="Idea Submit" value="Open Now" accentColor={AMBER} />
        <InfoItem label="Prize Pool" value={ideaContestMeta.prize.replace("৳", "BDT ")} highlight accentColor={AMBER} />
        <InfoItem label="Deadline" value={ideaContestMeta.deadline} accentColor={AMBER} />
      </div>
    </Shell>
  );
}

export async function GET() {
  const fonts = await loadFonts();
  return new ImageResponse(<IdeaContestCard />, { width: W, height: H, fonts });
}
