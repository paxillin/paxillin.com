import type { Metadata } from "next";
import { PAXILLIN_LOGO_SRC } from "@/lib/brand";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paxillin — Healthcare professional network",
  description:
    "Connect with trusted healthcare professionals. A focused space for meaningful collaboration — not a social feed.",
  icons: {
    icon: PAXILLIN_LOGO_SRC,
    apple: PAXILLIN_LOGO_SRC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
