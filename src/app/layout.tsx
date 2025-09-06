import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Aamer Kazi — Portfolio",
  description: "Simulation and Modeling Engineer | R&D Engineer | ML Engineer",
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
