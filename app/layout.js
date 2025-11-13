import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Awakening - Live in Concert",
  description:
    "Israel James Live in Concert - An Evening of Restoration through the Sound of Pure Worship at Greenfield University",
  generator: "v0.app",
  openGraph: {
    title: "Awakening - Live in Concert",
    description: "Join Israel James for an evening of pure worship",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true,
  themeColor: "#1a1a1a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-space-grotesk antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
