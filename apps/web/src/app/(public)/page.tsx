import type { Metadata } from "next";
import {
  Hero,
  Features,
  Testimonials,
  Newsletter,
  FaqSection,
} from "@/components/public-pages/home";
import { AuthenticatedRedirect } from "@/components/shared";

/**
 * Metadata configuration for the Legal Docs Scanner homepage
 *
 * Defines SEO-optimized title and description for the main landing page.
 * This metadata is used by Next.js for document head generation and
 * social media sharing previews.
 */
export const metadata: Metadata = {
  title: "Legal Docs Scanner - Extract Key Information from Legal Documents",
  description:
    "NLP and machine learning platform for extracting clauses, entities, and key terms from legal documents with accuracy and compliance in mind.",
};

/**
 * Legal Docs Scanner homepage component
 *
 * The main landing page for the Legal Docs Scanner application featuring a complete
 * marketing funnel with hero section, feature showcase, social proof,
 * FAQ answers, and newsletter subscription. Includes authenticated user
 * redirection to prevent logged-in users from seeing the marketing page.
 *
 * Page structure:
 * 1. Hero - Main value proposition and primary CTAs
 * 2. Features - AI tool showcase with interactive cards
 * 3. Testimonials - Client success stories and social proof
 * 4. FAQ - Common questions and answers in accordion format
 * 5. Newsletter - Email subscription for updates and insights
 *
 * @component
 * @returns {JSX.Element} The complete homepage with all marketing sections
 *
 * @example
 * ```tsx
 * // This page is automatically rendered at the root URL (/)
 * // when users visit the application's homepage
 * ```
 *
 * @example
 * // The page includes automatic redirection for authenticated users:
 * // - Unauthenticated users see the full marketing page
 * // - Authenticated users are redirected to their dashboard
 */
export default function Home() {
  return (
    <>
      <AuthenticatedRedirect />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>
    </>
  );
}
