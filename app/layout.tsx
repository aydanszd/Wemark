import localFont from "next/font/local";
import "./globals.css";

const hoves = localFont({
  src: [
    { path: "../src/fonts/TTHoves-Regular.otf", weight: "400", style: "normal" },
    { path: "../src/fonts/TTHoves-Medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-hoves",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${hoves.variable} antialiased`}>{children}</body>
    </html>
  );
}