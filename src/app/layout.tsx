import "./globals.css";
import { Kanit } from 'next/font/google';

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from '@/components/Navbar/page';

const kanit = Kanit({
  weight: '300', // หรือ 500, 600 ตามต้องการ
  subsets: ['latin', 'thai'], // รองรับทั้งภาษาอังกฤษและไทย
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
