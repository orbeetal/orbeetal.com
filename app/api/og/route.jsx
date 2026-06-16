import { ImageResponse } from "next/og";
import { ideaContestMeta } from "@/data/ideaContest.js";
import { cvSubmitMeta } from "@/data/cvSubmit.js";

export const runtime = "edge";

const W = 1200;
const H = 630;
const BLUE  = "#3b5bdb";
const CYAN  = "#00c8e0";
const AMBER = "#f59e0b";

// ─── Font ─────────────────────────────────────────────────────────────────────
async function loadFont(weight) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&display=swap`,
      { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" } }
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\)/)?.[1];
    if (!url) return undefined;
    return fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return undefined;
  }
}

// ─── Shared layout shell ──────────────────────────────────────────────────────
function Shell({ accentColor, secondaryGlow, children, barColors }) {
  return (
    <div
      style={{
        width: W, height: H,
        backgroundColor: "#050b17",
        display: "flex", flexDirection: "column",
        padding: "56px 72px",
        position: "relative", overflow: "hidden",
        fontFamily: "Inter",
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      {/* Primary glow — top right */}
      <div style={{
        position: "absolute", top: -180, right: -180,
        width: 640, height: 640, borderRadius: "50%",
        backgroundImage: `radial-gradient(circle at center, ${accentColor}55 0%, ${accentColor}18 45%, transparent 70%)`,
      }} />

      {/* Secondary glow — bottom left */}
      <div style={{
        position: "absolute", bottom: -100, left: -60,
        width: 380, height: 380, borderRadius: "50%",
        backgroundImage: `radial-gradient(circle at center, ${secondaryGlow}30 0%, transparent 65%)`,
      }} />

      {/* Content layer */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", alignItems: "center", textAlign: "center" }}>
        {children}
      </div>

      {/* Bottom accent bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 5,
        backgroundImage: `linear-gradient(to right, ${barColors[0]}, ${barColors[1]}, ${barColors[0]})`,
      }} />
    </div>
  );
}

// ─── Info row item ────────────────────────────────────────────────────────────
function InfoItem({ label, value, highlight, accentColor }) {
  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column", gap: 6, alignItems: "center",
      padding: "14px 24px",
      backgroundColor: highlight ? `${accentColor}18` : "rgba(255,255,255,0.04)",
      border: `1px solid ${highlight ? `${accentColor}45` : "rgba(255,255,255,0.08)"}`,
      borderRadius: 12,
    }}>
      <span style={{ fontSize: 10, fontWeight: 700, color: highlight ? accentColor : "rgba(255,255,255,0.35)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
        {label}
      </span>
      <span style={{ fontSize: 24, fontWeight: 700, color: highlight ? accentColor : "#ffffff", letterSpacing: "-0.5px" }}>
        {value}
      </span>
    </div>
  );
}

// ─── Orbeetal brand mark ──────────────────────────────────────────────────────
function BrandRow({ subtitle }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.9)", letterSpacing: "-0.3px" }}>Orbeetal</span>
      <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.25)" }} />
      <span style={{ fontSize: 15, fontWeight: 400, color: "rgba(255,255,255,0.38)", letterSpacing: "0.01em" }}>{subtitle}</span>
    </div>
  );
}

// ─── Card: Idea Contest ───────────────────────────────────────────────────────
function IdeaContestCard() {
  return (
    <Shell accentColor={AMBER} secondaryGlow={BLUE} barColors={[AMBER, "#f97316"]}>

      <BrandRow subtitle="Idea Contest 2026" />

      {/* Heading block */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "center" }}>
        {/* Accent mark */}
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

      {/* Info strip */}
      <div style={{ display: "flex", gap: 12, alignItems: "stretch", width: "100%" }}>
        <InfoItem label="Idea Submit" value="Open Now" accentColor={AMBER} />
        <InfoItem label="Prize Pool" value={ideaContestMeta.prize.replace("৳", "BDT ")} highlight accentColor={AMBER} />
        <InfoItem label="Deadline" value={ideaContestMeta.deadline} accentColor={AMBER} />
      </div>

    </Shell>
  );
}

// ─── Card: CV Submit ──────────────────────────────────────────────────────────
function CvSubmitCard() {
  return (
    <Shell accentColor={BLUE} secondaryGlow={CYAN} barColors={[BLUE, CYAN]}>

      <BrandRow subtitle={`RCF ${cvSubmitMeta.edition} Career Fair`} />

      {/* Heading block */}
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

      {/* Info strip */}
      <div style={{ display: "flex", gap: 12, alignItems: "stretch", width: "100%" }}>
        <InfoItem label="CV Drop" value="Submit Online" accentColor={CYAN} />
        <InfoItem label="Event Date" value={cvSubmitMeta.eventDate} highlight accentColor={CYAN} />
        <InfoItem label="Venue" value="RUET Campus" accentColor={CYAN} />
      </div>

    </Shell>
  );
}

// ─── Card: Default (Orbeetal) ─────────────────────────────────────────────────
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

// ─── Handler ──────────────────────────────────────────────────────────────────
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const [font400, font700, font900] = await Promise.all([
    loadFont(400),
    loadFont(700),
    loadFont(900),
  ]);

  const fonts = [
    font400 && { name: "Inter", data: font400, weight: 400, style: "normal" },
    font700 && { name: "Inter", data: font700, weight: 700, style: "normal" },
    font900 && { name: "Inter", data: font900, weight: 900, style: "normal" },
  ].filter(Boolean);

  let card;
  if (type === "idea-contest")  card = <IdeaContestCard />;
  else if (type === "cv-submit") card = <CvSubmitCard />;
  else                           card = <DefaultCard />;

  return new ImageResponse(card, { width: W, height: H, fonts });
}
