import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Sora, Inter } from "next/font/google";
import { tokens } from "@/lib/tokens";

const display = Sora({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: `${tokens.brand.name} — ${tokens.brand.role}`,
  description: tokens.brand.tagline,
  metadataBase: new URL("https://ayush.live"),
  openGraph: {
    title: `${tokens.brand.name} — ${tokens.brand.role}`,
    description: tokens.brand.tagline,
    url: "https://ayush.live",
    siteName: tokens.brand.name,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  alternates: { canonical: "https://ayush.live" },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable}`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
