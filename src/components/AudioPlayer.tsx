// src/components/AudioPlayer.tsx
"use client";

import { useState, useEffect, useRef } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // 0.0 ถึง 1.0
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasInteractedRef = useRef(false); // ตรวจสอบว่าผู้ใช้คลิกแล้วหรือยัง

  // เมื่อ volume เปลี่ยน → ปรับระดับเสียง
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // ฟังก์ชันเริ่มเล่น (ต้องเรียกหลังผู้ใช้คลิก)
  const startPlayback = () => {
    if (hasInteractedRef.current || !audioRef.current) return;

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        hasInteractedRef.current = true;
      })
      .catch((e) => {
        console.log("Playback failed:", e);
      });
  };

  // ฟังก์ชัน toggle เล่น/หยุด
  const togglePlay = () => {
    if (!hasInteractedRef.current) {
      startPlayback();
    } else {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    }
  };

  // เมื่อคลิกที่ไหนก็ได้ในหน้า → เริ่มเล่น (ครั้งแรกเท่านั้น)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteractedRef.current) {
        startPlayback();
        window.removeEventListener("click", handleFirstInteraction);
        window.removeEventListener("touchstart", handleFirstInteraction);
      }
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/Double-Rainbow.mp3"
        loop
        preload="auto"
      />

      {/* ปุ่มควบคุมหลัก */}
      <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-60 text-white rounded-lg p-3 flex flex-col items-center space-y-2">
        <button
          onClick={togglePlay}
          className="text-xl hover:text-pink-300 transition-colors"
          aria-label={isPlaying ? "ปิดเสียง" : "เปิดเสียง"}
        >
          {isPlaying ? "🔊" : "🔇"}
        </button>

        {/* แถบปรับระดับเสียง */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-16 accent-pink-500"
          aria-label="ปรับระดับเสียง"
        />
      </div>
    </>
  );
}
