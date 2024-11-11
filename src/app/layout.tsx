import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const publicSans = localFont({
  src: "./fonts/PublicSans-VariableFont_wght.ttf",
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Personal Finance Plus",
  description: "Control your finances. Have your freedom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} antialiased max-w-screen-maxDefined min-h-screen flex-1`}
      >
        {children}
      </body>
    </html>
  );
}
