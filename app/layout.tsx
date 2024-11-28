import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Inter for body text - clean and professional
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Cormorant Garamond for headings - elegant and sophisticated
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: "Ahm & Co. Advocates",
  description: "Intelligent Solutions",
  icons: {
    icon: "/favicon.png",
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
        className={`${cormorant.className} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
