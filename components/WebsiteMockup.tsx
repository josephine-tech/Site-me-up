import type { ReactNode } from "react";

type Theme = {
  bg: string;
  panel: string;
  accent: string;
  accentSoft: string;
  text: string;
  muted: string;
};

const THEMES: Record<string, Theme> = {
  charcoal: {
    bg: "#3D5D4D",
    panel: "rgba(255,255,255,0.08)",
    accent: "#75A591",
    accentSoft: "rgba(117,165,145,0.25)",
    text: "#FFFFFF",
    muted: "rgba(255,255,255,0.55)",
  },
  beige: {
    bg: "#F5F1EB",
    panel: "rgba(61,93,77,0.05)",
    accent: "#E37156",
    accentSoft: "rgba(227,113,86,0.14)",
    text: "#3D5D4D",
    muted: "rgba(61,93,77,0.5)",
  },
  teal: {
    bg: "#2A2F5F",
    panel: "rgba(255,255,255,0.07)",
    accent: "#EB965C",
    accentSoft: "rgba(235,150,92,0.22)",
    text: "#FFFFFF",
    muted: "rgba(255,255,255,0.5)",
  },
  sage: {
    bg: "#75A591",
    panel: "rgba(255,255,255,0.12)",
    accent: "#3D5D4D",
    accentSoft: "rgba(61,93,77,0.18)",
    text: "#FFFFFF",
    muted: "rgba(255,255,255,0.6)",
  },
  peach: {
    bg: "#F5D3C8",
    panel: "rgba(61,93,77,0.06)",
    accent: "#E37156",
    accentSoft: "rgba(227,113,86,0.16)",
    text: "#3D5D4D",
    muted: "rgba(61,93,77,0.5)",
  },
};

export type MockupLayout =
  | "profile"
  | "portfolio"
  | "studio"
  | "consultant"
  | "creator";

function Bar({
  w,
  h = 8,
  color,
  round = 4,
}: {
  w: string;
  h?: number;
  color: string;
  round?: number;
}) {
  return (
    <div
      style={{
        width: w,
        height: h,
        background: color,
        borderRadius: round,
      }}
    />
  );
}

/**
 * A stylized, abstract preview of a finished personal website.
 * Rendered purely with CSS so it stays crisp at any size and reinforces
 * the "premium, designed" feel without needing real screenshots.
 */
export function WebsiteMockup({
  theme = "charcoal",
  layout = "profile",
  name = "",
  role = "",
}: {
  theme?: keyof typeof THEMES;
  layout?: MockupLayout;
  name?: string;
  role?: string;
}) {
  const t = THEMES[theme] ?? THEMES.charcoal;

  let body: ReactNode = null;

  if (layout === "profile") {
    body = (
      <div className="flex h-full flex-col gap-4 p-6">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-full"
            style={{ background: t.accent }}
          />
          <div className="flex flex-col gap-1.5">
            <Bar w="84px" h={9} color={t.text} />
            <Bar w="56px" h={6} color={t.muted} />
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <Bar w="92%" h={13} color={t.text} />
          <Bar w="74%" h={13} color={t.text} />
          <Bar w="40%" h={13} color={t.accent} />
        </div>
        <div className="mt-1 flex gap-2">
          <Bar w="78px" h={22} color={t.accent} round={11} />
          <Bar w="64px" h={22} color={t.panel} round={11} />
        </div>
        <div className="mt-auto grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg"
              style={{ background: t.panel }}
            />
          ))}
        </div>
      </div>
    );
  } else if (layout === "portfolio") {
    body = (
      <div className="flex h-full flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <Bar w="60px" h={8} color={t.text} />
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <Bar key={i} w="22px" h={6} color={t.muted} />
            ))}
          </div>
        </div>
        <Bar w="70%" h={16} color={t.text} />
        <div className="grid flex-1 grid-cols-2 gap-2.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl"
              style={{
                background: i % 3 === 0 ? t.accentSoft : t.panel,
                border: `1px solid ${t.panel}`,
              }}
            />
          ))}
        </div>
      </div>
    );
  } else if (layout === "studio") {
    body = (
      <div className="flex h-full flex-col p-0">
        <div
          className="flex items-end p-5"
          style={{ height: "58%", background: t.accentSoft }}
        >
          <div className="flex flex-col gap-2">
            <Bar w="120px" h={16} color={t.text} />
            <Bar w="80px" h={10} color={t.text} />
            <div className="mt-1">
              <Bar w="70px" h={20} color={t.accent} round={10} />
            </div>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2 p-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-lg"
              style={{ background: t.panel }}
            />
          ))}
        </div>
      </div>
    );
  } else if (layout === "consultant") {
    body = (
      <div className="flex h-full flex-col gap-3 p-6">
        <Bar w="48px" h={8} color={t.accent} />
        <Bar w="88%" h={15} color={t.text} />
        <Bar w="66%" h={15} color={t.text} />
        <div className="mt-1 grid grid-cols-3 gap-2">
          {["12+", "$2M", "98%"].map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-1.5 rounded-lg p-2.5"
              style={{ background: t.panel }}
            >
              <Bar w="60%" h={12} color={t.accent} />
              <Bar w="80%" h={5} color={t.muted} />
            </div>
          ))}
        </div>
        <div className="mt-auto flex gap-2">
          <Bar w="90px" h={22} color={t.accent} round={11} />
          <Bar w="70px" h={22} color={t.panel} round={11} />
        </div>
      </div>
    );
  } else {
    // creator
    body = (
      <div className="flex h-full flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="h-7 w-7 rounded-full"
              style={{ background: t.accent }}
            />
            <Bar w="56px" h={8} color={t.text} />
          </div>
          <Bar w="50px" h={18} color={t.accent} round={9} />
        </div>
        <div className="grid flex-1 grid-cols-3 grid-rows-2 gap-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="rounded-lg"
              style={{
                background: i % 4 === 0 ? t.accentSoft : t.panel,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lift ring-1 ring-black/5"
      style={{ background: t.bg }}
    >
      {/* faux browser chrome */}
      <div
        className="flex items-center gap-1.5 px-4 py-2.5"
        style={{ background: "rgba(0,0,0,0.12)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        <div className="mx-auto h-4 w-1/2 rounded-full bg-white/10" />
      </div>
      <div style={{ height: "calc(100% - 36px)" }}>{body}</div>
      {(name || role) && (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-5 pb-4 pt-10">
          {name && (
            <p className="font-heading text-sm font-semibold text-white">
              {name}
            </p>
          )}
          {role && <p className="text-xs text-white/70">{role}</p>}
        </div>
      )}
    </div>
  );
}
