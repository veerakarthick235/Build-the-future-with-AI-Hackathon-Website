import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Build the Future with AI — From Code to No-Code | Global Hackathon 2026",
  description:
    "Join the global student hackathon 'Build the Future with AI'. Build real-world AI projects using code or no-code tools. June 1–30, 2026. Online, free, and open worldwide.",
  keywords: [
    "hackathon",
    "AI hackathon",
    "student hackathon",
    "no-code hackathon",
    "machine learning",
    "web development",
    "global hackathon 2026",
    "build the future with AI",
    "innovation",
    "Devpost",
  ],
  authors: [{ name: "Innovation Hacks" }],
  creator: "Innovation Hacks",
  openGraph: {
    title: "Build the Future with AI — From Code to No-Code",
    description:
      "A global student hackathon. Build AI projects. Win prizes. June 1–30, 2026.",
    type: "website",
    locale: "en_US",
    siteName: "Innovation Hacks",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build the Future with AI — Hackathon 2026",
    description: "Join 500+ students building real-world AI projects. Free. Online. Global.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <meta name="theme-color" content="#030712" />
        <link rel="canonical" href="https://build-the-future-with-ai.devpost.com/" />
      </head>
      <body className="min-h-screen bg-[#030712] text-white antialiased overflow-x-hidden font-[var(--font-inter)]">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              setInterval(function() {
                var portals = document.querySelectorAll('nextjs-portal, [data-nextjs-toast]');
                for (var i = 0; i < portals.length; i++) {
                  portals[i].remove();
                }
              }, 100);
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
