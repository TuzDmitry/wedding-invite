import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wedding invite App",
  description: "Wedding invite application",
  icons: [{
    url: '/wedding-rings.svg',
    href: '/wedding-rings.svg',
  }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='h-full w-full'>
            {children}
        </div>
      </body>
    </html>
  );
}
