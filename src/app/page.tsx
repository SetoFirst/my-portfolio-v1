// src/app/page.tsx
"use client"; // ✅ จำเป็น

import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  // สร้าง state สำหรับแต่ละโปรเจกต์ว่า "ขยายแล้วหรือยัง"
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ฟังก์ชันช่วย: ตรวจสอบว่า description เป็น string หรือ array
  const getFirstParagraph = (desc: string | string[]): string => {
    if (typeof desc === "string") return desc;
    return desc[0] || "";
  };

  return (
    <div className="min-h-screen p-6">
      <header className="flex flex-col items-center mb-10">
        <img
          src="/logo_Portfoilo.png"
          alt="รูปโปรไฟล์"
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
      </header>

      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        ผลงานของฉัน
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => {
          const isExpanded = expanded[project.id] || false;
          const descText = getFirstParagraph(project.description);

          return (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="block"
            >
              <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow h-full flex flex-col bg-amber-100">
                <Image
                  src={project.profile}
                  alt={project.profile}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded mb-4 transition-transform duration-300 hover:scale-105"
                />
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

                {/* Description ที่ย่อ */}
                <div className="flex-grow">
                  <p
                    className={`text-gray-600 text-sm transition-all duration-300 ${
                      isExpanded ? "" : "line-clamp-3"
                    }`}
                  >
                    {descText}
                  </p>
                </div>

                {/* ปุ่ม "อ่านเพิ่มเติม" (ถ้าจำเป็น) */}
                {descText.split(" ").length > 40 && (
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // ป้องกันการลิงก์เมื่อกดปุ่ม
                      toggleExpand(project.id);
                    }}
                    className="mt-2 text-blue-600 text-sm hover:underline text-left"
                  >
                    {isExpanded ? "ย่อ" : "อ่านเพิ่มเติม"}
                  </button>
                )}

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
