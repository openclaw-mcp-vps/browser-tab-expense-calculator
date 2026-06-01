import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TabCost — Calculate Memory Costs of Your Browser Tabs",
  description: "Track browser tab memory usage and calculate equivalent cloud computing costs. Built for web developers and DevOps teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b9c2bc89-7ff8-4c87-852a-d7a1b40cd7ce"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
