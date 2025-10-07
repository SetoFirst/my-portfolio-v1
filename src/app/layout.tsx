import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AudioPlayer from "@/components/AudioPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ผลงานของฉัน",
  description: "เว็บไซต์รวมผลงานพัฒนาเว็บและดีไซน์",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={inter.className}>
        {/* พื้นหลังภาพ + overlay มืด */}
        <div
          style={{
            backgroundImage: "url('/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        />
        {/* overlay สีดำกึ่งโปร่งใส */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // ✅ ทำให้มืดลง 50%
            zIndex: -1,
          }}
        />
        <header className="p-4 border-b bg-pink-400 text-white">
          <h1 className="text-xl font-bold">My Portfolio</h1>
        </header>
        {children}
        <footer className="p-4 text-center bg-pink-400 text-white text-sm">
          © {new Date().getFullYear()} ผลงานทั้งหมดโดย SetoFirst
        </footer>

        {/* ปุ่มควบคุมเสียง */}
        <AudioPlayer />
      </body>
    </html>
  );
}
