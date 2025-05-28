import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

const funnel = Funnel_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://domain"),
  title: {
    default: "Diego Garcia",
    template: `%s | Diego Garcia`,
  },
  description: "Description",
  keywords: [],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Diego Garcia",
    description: "Description",
    images: [""],
    url: "https://domain",
    siteName: "Diego Garcia",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${funnel.className}`}>{children}</body>
    </html>
  );
}
