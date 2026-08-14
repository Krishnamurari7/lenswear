import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lenswear Films — Wedding · Films · Post-Production · Mumbai",
  description:
    "Lenswear Films is a photography and cinematography studio in Goregaon, Mumbai. Weddings, commercial and fashion, concerts, and post-production. 7+ years, led by Naved Qureshi.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500&family=DM+Sans:wght@400;500&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="is-loading" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
