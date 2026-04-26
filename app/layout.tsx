import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paxillin — Healthcare professional network",
  description:
    "Connect with trusted healthcare professionals. A focused space for meaningful collaboration — not a social feed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-montserrat">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
