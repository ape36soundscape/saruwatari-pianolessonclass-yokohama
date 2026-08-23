import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "猿渡あゆみ ピアノ教室｜横浜・新吉田東",
  description:
    "横浜市港北区新吉田東のピアノ教室。年少から大人まで、ピアノと音符ビッツを学べます。入会金無料・無料体験レッスン受付中。",
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
