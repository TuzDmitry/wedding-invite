import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap"
});

const allegro = localFont({
  src: [
    {
      path: './fonts/allegroscript.otf',
      weight: 'normal',
      style: 'normal',
    },
  ],
  variable: '--font-allegro',
});

export const metadata: Metadata = {
  title: "Свадьба Дмитрия и Екатерины!",
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
    <html lang="en" className={allegro.variable}>
      <body className={inter.className}>
        <div className='h-full w-full'>
            {children}
        </div>
      </body>
    </html>
  );
}
