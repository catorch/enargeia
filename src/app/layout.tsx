import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Cormorant_Upright, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorantUpright = Cormorant_Upright({
  subsets: ["latin"],
  variable: "--font-cormorant-upright",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArcheMaker - The Philosopher-Oracle",
  description: "A sacred AI temple for meaningful innovation, infusing your products with philosophical resonance and archetypal meaning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorantUpright.variable} ${ibmPlexMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
