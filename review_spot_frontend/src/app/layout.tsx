import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="w-full h-full md:max-w-[1728px] md:max-h-[1152px] md:aspect-[3/2] bg-white">
            <header>{/* nav */}</header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
