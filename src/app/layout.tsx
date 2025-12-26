import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentic WhatsApp Support | Ecommerce Customer Care",
  description:
    "Launch a high-converting WhatsApp customer support experience for your ecommerce brand with automation, routing, and storefront integrations.",
  openGraph: {
    title: "Agentic WhatsApp Support for Ecommerce",
    description:
      "Turn WhatsApp conversations into loyal customers with automation, shared inboxes, and catalog-aware replies.",
    url: "https://agentic-8e4ca3fe.vercel.app",
    siteName: "Agentic Support Suite",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic WhatsApp Support for Ecommerce",
    description:
      "Instant WhatsApp care for online stores. Automate FAQs, track orders, and close sales in the chat your customers love.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
