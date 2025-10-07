"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Lightbox from "@/components/Lightbox";
import { useState, use } from "react";

type Params = Promise<{ id: string }>;

export default function ProjectPage({ params }: { params: Params }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const openLightbox = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-3xl mx-auto prose prose-gray bg-amber-100">
      <Link
        href="/"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← กลับหน้าหลัก
      </Link>

      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

      {/* ในส่วน render บทความ */}
      {project.render ? (
        <project.render />
      ) : project.content ? (
        <article
          className="mb-8"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      ) : (
        <>
          {/* แสดง description (ถ้าไม่มี content) */}
          <div className="mb-8">
            {typeof project.description === "string" ? (
              <p className="text-lg">{project.description}</p>
            ) : Array.isArray(project.description) ? (
              project.description.map((text, i) => (
                <p key={i} className="text-lg mb-3">
                  {text}
                </p>
              ))
            ) : null}
          </div>

          {/* วิดีโอ */}
          {project.video &&
            Array.isArray(project.video) &&
            project.video.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold mb-4 mt-8">วิดีโอ</h2>
                <div className="space-y-6 mb-8">
                  {project.video.map((vid, i) => (
                    <div key={i} className="max-w-3xl mx-auto">
                      <video
                        src={vid.src}
                        controls
                        className="w-full rounded-lg shadow"
                      />
                      {vid.alt && (
                        <p className="mt-2 text-center text-sm text-gray-600">
                          {vid.alt}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

          {/* รูปภาพ */}
          {project.images &&
            Array.isArray(project.images) &&
            project.images.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold mb-4 mt-8">ภาพประกอบ</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className="cursor-pointer group"
                      onClick={() => openLightbox(img)}
                    >
                      <div className="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-105">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="mt-2 text-center text-sm text-gray-700 font-medium">
                        {img.alt}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
        </>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          src={selectedImage.src}
          alt={selectedImage.alt}
        />
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-gray-200 px-3 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
      <br />
      <Link
        href="/"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← กลับหน้าหลัก
      </Link>
    </div>
  );
}
