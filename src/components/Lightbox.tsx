// src/components/Lightbox.tsx
"use client";

import { useState, useEffect } from "react";

type LightboxProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
};

export default function Lightbox({ isOpen, onClose, src, alt }: LightboxProps) {
  // ปิดเมื่อกด ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl max-h-[90vh]">
        <img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-full object-contain rounded"
          onClick={(e) => e.stopPropagation()} // ป้องกันปิดเมื่อคลิกในรูป
        />
        <button
          className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
          onClick={onClose}
          aria-label="ปิด"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
