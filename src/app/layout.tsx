import "./globals.css";
import { Kanit } from 'next/font/google';
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from '@/components/Navbar/page';

const kanit = Kanit({
  weight: '300', 
  subsets: ['latin', 'thai'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={kanit.className}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
