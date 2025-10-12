// src/data/projects/digital-art.ts
import { Project } from "../types";

const digitalArtProject: Project = {
  id: "1",
  title: "Digital Art Collection",
  description: `ผลงานภาพวาดดิจิทัลที่สร้างด้วย Clip Studio Paint เป็นเครื่องมือที่ช่วยในการออกแบบวาดภาพ
                ด้วยเครื่องมือที่ทันสมัย และเครื่องมือต่างๆ ที่ช่วยในการทำงานได้เร็วขึ้น`,
  profile: "/profiles/Morning_Coffee.png",
  images: [
    { src: "/art/Morning_Coffee.png", alt: "Morning Coffee" },
    { src: "/art/Pink Cat.png", alt: "Pink Cat" },
    { src: "/art/Samurai girl.png", alt: "Samurai girl" },
    { src: "/art/Alice Rabbit.png", alt: "Alice Rabbit" },
    {
      src: "/art/Wolf Unit Military Force.png",
      alt: "Wolf Unit Military Force",
    },
  ],
  tags: ["Digital Art", "Illustration", "Clip Studio Paint"],
};

export default digitalArtProject;
