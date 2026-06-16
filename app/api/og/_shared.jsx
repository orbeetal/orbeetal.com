// Shared utilities for all OG image routes
export const W = 1200;
export const H = 630;
export const BLUE  = "#3b5bdb";
export const CYAN  = "#00c8e0";
export const AMBER = "#f59e0b";

export async function loadFont(weight) {
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

export async function loadFonts() {
  const [font400, font700, font900] = await Promise.all([
    loadFont(400), loadFont(700), loadFont(900),
  ]);
  return [
    font400 && { name: "Inter", data: font400, weight: 400, style: "normal" },
    font700 && { name: "Inter", data: font700, weight: 700, style: "normal" },
    font900 && { name: "Inter", data: font900, weight: 900, style: "normal" },
  ].filter(Boolean);
}

export function Shell({ accentColor, secondaryGlow, children, barColors }) {
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
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div style={{
        position: "absolute", top: -180, right: -180,
        width: 640, height: 640, borderRadius: "50%",
        backgroundImage: `radial-gradient(circle at center, ${accentColor}55 0%, ${accentColor}18 45%, transparent 70%)`,
      }} />
      <div style={{
        position: "absolute", bottom: -100, left: -60,
        width: 380, height: 380, borderRadius: "50%",
        backgroundImage: `radial-gradient(circle at center, ${secondaryGlow}30 0%, transparent 65%)`,
      }} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", alignItems: "center", textAlign: "center" }}>
        {children}
      </div>
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 5,
        backgroundImage: `linear-gradient(to right, ${barColors[0]}, ${barColors[1]}, ${barColors[0]})`,
      }} />
    </div>
  );
}

export function InfoItem({ label, value, highlight, accentColor }) {
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

export function BrandRow({ subtitle }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.9)", letterSpacing: "-0.3px" }}>Orbeetal</span>
      <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.25)" }} />
      <span style={{ fontSize: 15, fontWeight: 400, color: "rgba(255,255,255,0.38)", letterSpacing: "0.01em" }}>{subtitle}</span>
    </div>
  );
}

export function PageCard({ accentColor, secondaryGlow, barColors, subtitle, tagline, titleLine1, titleLine2 }) {
  return (
    <Shell accentColor={accentColor} secondaryGlow={secondaryGlow} barColors={barColors}>
      <BrandRow subtitle={subtitle} />
      <div style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 48, height: 4, backgroundColor: accentColor, borderRadius: 2 }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: `${accentColor}cc`, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            {tagline}
          </span>
          <div style={{ width: 48, height: 4, backgroundColor: accentColor, borderRadius: 2 }} />
        </div>
        {titleLine1 && (
          <span style={{ fontSize: 96, fontWeight: 900, color: accentColor, letterSpacing: "-5px", lineHeight: 0.85 }}>
            {titleLine1}
          </span>
        )}
        {titleLine2 && (
          <span style={{ fontSize: 96, fontWeight: 900, color: "#ffffff", letterSpacing: "-5px", lineHeight: 0.85, marginTop: 8 }}>
            {titleLine2}
          </span>
        )}
      </div>
      <span style={{ fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.38)", maxWidth: 560, lineHeight: 1.65, textAlign: "center" }}>
        orbeetal.com
      </span>
    </Shell>
  );
}
