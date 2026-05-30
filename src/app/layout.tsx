import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Aamer Kazi - ML & Simulation Engineer",
  description: "ML engineer at Align Technology. PhD in computational mechanics.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&amp;display=swap" rel="stylesheet" />
      </head>
      <body>
        <div id="ripple-overlay" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
