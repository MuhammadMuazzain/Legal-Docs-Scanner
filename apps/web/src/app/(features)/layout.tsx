import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Docs Scanner Dashboard",
  description:
    "Your Legal Docs Scanner dashboard: view analytics, manage legal documents, and access AI-powered contract insights in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}
