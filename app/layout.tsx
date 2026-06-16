import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Advocate MK Yadav in Prayagraj - Legal Services at High Court",
  description: "Advocate MK Yadav in Prayagraj - Professional legal services at High Court. Writ Petitions, Civil & Criminal Cases, Family Law, Property Disputes. Expert legal representation in Prayagraj, Uttar Pradesh",
  keywords: "Advocate, Advocate MK Yadav, Prayagraj, Legal Services, High Court, Civil Law, Criminal Law, Family Law",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
