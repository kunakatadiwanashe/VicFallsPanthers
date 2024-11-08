import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VicFalls Panthers",
  description: "Victoria Falls Panthers Basketball",
  icons: {
    icon: [
      { 
        url: '/favicon.ico', 
        sizes: '32x32', 
        type: 'image/x-icon' 
      },
      { 
        url: '/logo.png', 
        sizes: '16x16', 
        type: 'image/png' 
      },
      { 
        url: '/logo.png', 
        sizes: '32x32', 
        type: 'image/png' 
      }
    ],
    apple: [
      { 
        url: '/logo.png', 
        sizes: '180x180' 
      }
    ]
  },
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
        {children}
      </body>
    </html>
  );
}
