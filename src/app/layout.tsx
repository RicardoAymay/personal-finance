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
        className={`${publicSans.variable} antialiased w-screen bg-beige-100 min-h-screen min-w-[375px] flex flex-col justify-center items-center`}
      >
        {children}
      </body>
    </html>
  );
}
