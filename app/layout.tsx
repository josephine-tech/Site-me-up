import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sitemeup.co"),
  title: {
    default: "Site Me Up — You Deserve To Be Taken Seriously",
    template: "%s — Site Me Up",
  },
  description:
    "Premium personal websites for ambitious people. Designed, written, and delivered in days — not months. Looks like a $2,000 website. Costs $50.",
  keywords: [
    "personal website",
    "portfolio website",
    "personal brand",
    "freelancer website",
    "job seeker website",
    "consultant website",
  ],
  openGraph: {
    title: "Site Me Up — You Deserve To Be Taken Seriously",
    description:
      "Premium personal websites for ambitious people. Looks like a $2,000 website. Costs $50.",
    type: "website",
    siteName: "Site Me Up",
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Me Up — You Deserve To Be Taken Seriously",
    description: "Premium personal websites that look like $2,000. Cost $50.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-white text-charcoal antialiased">{children}</body>
    </html>
  );
}
