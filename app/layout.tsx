import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paxillin - Healthcare Networking Platform",
  description: "A platform where healthcare professionals connect with each other, not with patients",
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
