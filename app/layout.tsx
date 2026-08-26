import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.FIREBASE_HOSTING === "true"
    ? "https://ayumi-piano-yokohama.web.app/"
    : "https://ape36soundscape.github.io/saruwatari-pianolessonclass-yokohama/";
const title = "猿渡あゆみ ピアノ教室｜横浜・新吉田東";
const description =
  "横浜市港北区新吉田東のピアノ教室。幼稚園・保育園のお子さまから大学生まで、ピアノと音符ビッツを学べます。その他の年代の方もお気軽にご相談ください。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  verification: {
    google: "KtbsyYZ54aSKXF6a8I-vG8UjqKtoFt2LHMFoJR8sFgU",
  },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: `${siteUrl}og.png`,
        width: 1731,
        height: 909,
        alt: "猿渡あゆみ ピアノ教室｜横浜・新吉田東｜無料体験受付中",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}og.png`],
  },
};

export const viewport: Viewport = {
  themeColor: "#fffafb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
