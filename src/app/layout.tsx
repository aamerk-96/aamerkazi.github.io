import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Aamer Kazi — ML & Simulation Engineer",
  description: "ML engineer at Align Technology. PhD in computational mechanics. Building production ML for medical devices under FDA regulatory oversight.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="ripple-overlay" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
