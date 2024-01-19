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
        url: "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/abdelrahmanaymen.tech/Abdelrahman%20Portfolio/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Fa16aea57-f8c4-4df6-bf53-7210e181033d.jpg%3Ftoken%3DNRyHOnn4vhj28BUyQ37RIp4Iwl0tuSpZlFYtasntcxc%26height%3D401%26width%3D750%26expires%3D33241663994/og.png",
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
