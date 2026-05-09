import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Dominiecki | Portfolio",
  description:
    "Personal portfolio for Michael Dominiecki, business marketing student and aspiring product and brand strategist.",
  openGraph: {
    title: "Michael Dominiecki | Portfolio",
    description:
      "Business marketing student focused on marketing, product strategy, branding, and technology.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f3ea"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
