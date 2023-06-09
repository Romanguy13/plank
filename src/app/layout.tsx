import "./globals.css";
import { Inconsolata } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inconsolata({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Plank",
  description: "A rock band from California",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.icons.icon} />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
