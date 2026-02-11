import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeType",
  description: "Buzzfeed-style pop culture archetype quizzes with nostalgic neon vibes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto w-full max-w-5xl p-6 md:p-10">{children}</main>
      </body>
    </html>
  );
}
