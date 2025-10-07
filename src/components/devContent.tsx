"use client";

import { useState } from "react";
import Lightbox from "@/components/Lightbox"; // ✅ นำเข้า Lightbox ของคุณ

export default function DevContent() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setLightboxOpen(true);
  };

  return (
    <article className="prose prose-gray max-w-none">
      <p>
        เป็นที่เก็บผลงานในการพัฒนา App และ Website โดยเครื่องมือที่ใช้จะเป็น
        Next.js, Tailwind css และ Framework อื่นๆที่เกี่ยวข้อง
      </p>
      <br />
      <h1 className="text-xl font-bold">
        Astral Party Wiki{" "}
        <a
          href="https://github.com/SetoFirst/astral-party-project.git"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          ดูซอร์สโค้ดบน GitHub
        </a>
      </h1>
      <br />
      <p>
        เป็น Website ที่สร้างขึ้นมาเพื่อไว้เก็บไกด์ของเกม Astral Party โดยใน web
        จะมีส่วน login-logout จะเด้งขึ้นมาหน้าแรก
        เป็นการเข้าสู่ระบบและออกจากระบบ โดยต้องสมัครสมาชิกก่อน
        ซึ่งสมาชิกจะเก็บไว้อยู่ใน Neon.tech เป็น database
        ที่เอาไว้เก็บรายชื่อผู้ที่เป็นสมาชิก
      </p>
      <br />
      {/* คลิกที่ div หรือ img เพื่อเปิด lightbox */}
      <div
        className="cursor-pointer"
        onClick={() => openLightbox("/dev/login.png", "หน้าจอเข้าสู่ระบบ")}
      >
        <img
          src="/dev/login.png"
          alt="login"
          className="rounded-lg my-4 w-full max-w-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => openLightbox("/dev/apply.png", "สมัครสมาชิก")}
      >
        <img
          src="/dev/apply.png"
          alt="apply"
          className="rounded-lg my-4 w-full max-w-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => openLightbox("/dev/forgot.png", "ลืมรหัส")}
      >
        <img
          src="/dev/forgot.png"
          alt="forgot"
          className="rounded-lg my-4 w-full max-w-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>
      <br />
      <p>
        ในส่วนนี้จะเป็นหน้าต่างหลักของ Website
        ในนี้จะเป็นเนื้อหาต่างๆที่มีอยู่ในเกม Astral Party
        เกมนี้คือคือเกมปาร์ตี้แบบผู้เล่นหลายคน
        โดยที่ตัวละครจะเป็นอนิเมะสุดน่ารัก! เกมเน้นวางแผนทักษะ, การ์ด,
        สกิลตัวละคร และทอยลูกเต๋าเพื่อสร้าง &quot;ทำลาย&quot;
        มิตรภาพในเกมกระดานนี้ โหมดจะมีให้เลือก 2 โหมด PVP กับ PVE
      </p>
      <br />
      <div
        className="cursor-pointer"
        onClick={() => openLightbox("/dev/astral1.png", "astral1")}
      >
        <img
          src="/dev/astral1.png"
          alt="astral1"
          className="rounded-lg my-4 w-full max-w-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div
        className="cursor-pointer"
        onClick={() => openLightbox("/dev/astral2.png", "astral2")}
      >
        <img
          src="/dev/astral2.png"
          alt="astral2"
          className="rounded-lg my-4 w-full max-w-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div
        className="cursor-pointer"
        onClick={() => openLightbox("/dev/astral3.png", "astral3")}
      >
        <img
          src="/dev/astral3.png"
          alt="astral3"
          className="rounded-lg my-4 w-full max-w-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div
        className="cursor-pointer"
        onClick={() => openLightbox("/dev/astral4.png", "astral4")}
      >
        <img
          src="/dev/astral4.png"
          alt="astral4"
          className="rounded-lg my-4 w-full max-w-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div
        className="cursor-pointer"
        onClick={() => openLightbox("/dev/astral5.png", "astral5")}
      >
        <img
          src="/dev/astral5.png"
          alt="astral5"
          className="rounded-lg my-4 w-full max-w-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div
        className="cursor-pointer"
        onClick={() => openLightbox("/dev/astral6.png", "astral6")}
      >
        <img
          src="/dev/astral6.png"
          alt="astral6"
          className="rounded-lg my-4 w-full max-w-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* Lightbox สำหรับขยายภาพ */}
      {selectedImage && (
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          src={selectedImage.src}
          alt={selectedImage.alt}
        />
      )}
    </article>
  );
}
