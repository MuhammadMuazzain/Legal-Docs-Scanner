// React & Next.js imports
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Third-party providers
import { ClerkProvider } from "@clerk/nextjs";

// Styles
import "./globals.css";

// Internal providers
import { ThemeProvider, ConvexProvider } from "@/components/providers";

// UI Components
import { Toaster } from "@/components/ui/sonner";

/**
 * Application Metadata Configuration
 *
 * Defines SEO and social media metadata for the application.
 * This metadata is used by search engines, social platforms, and browsers
 * to display information about the application.
 */
export const metadata: Metadata = {
  title: {
    default: "Legal Docs Scanner - AI Legal Information Extraction",
    template: "%s | Legal Docs Scanner",
  },
  description:
    "AI-powered system for extracting key information from legal documents using NLP and machine learning, with a focus on legal terminology, accuracy, and compliance.",
  keywords: [
    "legal document extraction",
    "NLP",
    "machine learning",
    "legal terminology",
    "contract analysis",
    "information extraction",
    "clause extraction",
    "legal tech",
  ],
  authors: [
    {
      name: "Muhammad Muazzain",
      url: "https://github.com/MuhammadMuazzain",
    },
  ],
  creator: "Muhammad Muazzain",
  publisher: "Muhammad Muazzain",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/MuhammadMuazzain/Legal-Docs-Scanner",
    title: "Legal Docs Scanner - AI Legal Information Extraction",
    description:
      "AI-powered system for extracting key information from legal documents using NLP and machine learning.",
    siteName: "Legal Docs Scanner",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Docs Scanner - AI Legal Information Extraction",
    description:
      "AI-powered system for extracting key information from legal documents using NLP and machine learning.",
    creator: "@muhammadmuazzain",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

/**
 * Font Configuration
 *
 * Configures the Inter font family with Latin subset for optimal performance
 * and consistent typography throughout the application.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/**
 * Props for the RootLayout component
 */
interface RootLayoutProps {
  /** Child components and pages to be rendered within the layout */
  children: React.ReactNode;
}

/**
 * Root Layout Component
 *
 * The top-level layout component that wraps all pages and provides essential
 * application-wide functionality including authentication, theming, database
 * connectivity, and global UI components.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ConvexProvider>{children}</ConvexProvider>
          </ThemeProvider>

          {/* Global notification system */}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
