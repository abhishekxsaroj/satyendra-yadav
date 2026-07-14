import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import { SITE } from "@/constants/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Team Leader · Warehouse Operations`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Warehouse Operations",
    "Supply Chain Management",
    "Team Leader",
    "Fulfillment",
    "Logistics",
    "Satyendra Kumar Yadav",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} | Warehouse Operations Leader`,
    description: SITE.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Warehouse Operations Leader`,
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
