import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



const para = localFont({
  src: "./fonts/Rubik-Italic-VariableFont_wght.ttf",
  variable: "--para",
  weight: "100 900",
});

const joy = localFont({
  src: './fonts/Joyride W05 STD.woff',
  variable: '--joy',
});

const mon = localFont({
  src: './fonts/Montserrat-VariableFont_wght.ttf',
  variable: '--mon',
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
      className={`${joy.variable} ${para.variable} ${mon.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

