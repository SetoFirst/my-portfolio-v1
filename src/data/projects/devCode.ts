import { Project } from "../types";
import devContent from "@/components/devContent";

const devCode: Project = {
  id: "4",
  title: "Developer",
  description: `เป็นที่เก็บผลงานในการพัฒนา App และ Website โดยเครื่องมือที่ใช้จะเป็น Next.js, Tailwind css และ Framework อื่นๆที่เกี่ยวข้อง`,
  profile: "/profiles/devProfile.png",
  render: devContent,
  tags: [
    "Developer",
    "Coding",
    "JavaScript",
    "TripScript",
    "Python",
    "C#",
    "C++",
    "React",
    "HTML",
    "PostgreSQL",
    "GitHub",
    "Kaggle",
    "Figma",
    "Bootstrap",
    "Vite",
    "Node.js",
    "Next.js",
  ],
};

export default devCode;
