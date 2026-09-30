import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "NUST Robotics Club — NRC",
    template: "%s | NRC",
  },
  description:
    "NUST Robotics Club (NRC) is NUST's premier robotics and engineering society. We build, compete, and innovate at the frontier of robotics.",
  keywords: ["NUST", "Robotics", "NRC", "Engineering", "Pakistan", "University", "Robocon", "NERC"],
  authors: [{ name: "NUST Robotics Club" }],
  creator: "NUST Robotics Club",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nrc.nust.edu.pk",
    siteName: "NUST Robotics Club",
    title: "NUST Robotics Club — NRC",
    description:
      "NUST Robotics Club (NRC) is NUST's premier robotics and engineering society. We build, compete, and innovate at the frontier of robotics.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "NUST Robotics Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NUST Robotics Club — NRC",
    description: "We build, compete, and innovate at the frontier of robotics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
