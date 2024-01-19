import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelrahman Portfolio",
  description:
    "Explore my world of robotics and programming innovation, where passion drives impactful solutions.",
  icons: {
    icon: [
      {
        url: "/icon/favicon.ico",
        href: "/icon/favicon.ico",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "http://abdelrahmanaymen.tech",
    title: "Abdelrahman Portfolio",
    description:
      "Explore my world of robotics and programming innovation, where passion drives impactful solutions.",
    siteName: "Abdelrahman Portfolio",
    images: [
      {
        url: "http://abdelrahmanaymen.tech/og.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
