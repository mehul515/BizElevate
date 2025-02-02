import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { UserProvider } from "@/context/UserContext"; // Import UserProvider
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BizElevate",
  description: "Created By Team BizElevate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap the children with UserProvider */}
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
