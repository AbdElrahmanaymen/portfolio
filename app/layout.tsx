import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelrahman Portfolio",
  description:
    "Embark on a captivating journey into my world of robotics and programming innovation. Explore a diverse portfolio where passion converges with technical expertise, giving rise to impactful solutions that redefine the possibilities of technology. Join me on this exciting exploration of cutting-edge projects and discover the transformative potential of my work in shaping the future of robotics and programming.",
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
      "Embark on a captivating journey into my world of robotics and programming innovation. Explore a diverse portfolio where passion converges with technical expertise, giving rise to impactful solutions that redefine the possibilities of technology. Join me on this exciting exploration of cutting-edge projects and discover the transformative potential of my work in shaping the future of robotics and programming.",
    siteName: "Abdelrahman Portfolio",
    images: [
      {
        url: "https://abdelrahmanaymen.tech/og.png",
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
