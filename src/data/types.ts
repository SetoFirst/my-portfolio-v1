// src/data/types.ts
import type { ComponentType } from "react";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectVideo = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  description: string | string[];
  profile: string;
  content?: string;
  render?: ComponentType; // ✅ สำหรับบทความซับซ้อน
  images?: ProjectImage[];
  video?: ProjectVideo[];
  link?: string;
  tags: string[];
};
