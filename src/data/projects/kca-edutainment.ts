import { Project } from "../types";
import KcaEdutainmentArticle from "@/components/KcaEdutainmentArticle";

const kcaEdutainment: Project = {
  id: "3",
  title: "KCA Education",
  description: `ผลงานตัวอย่างต่างๆที่ได้ประสบการณ์จากการทำงานที่ KCA Education โดยการทำงานจัด layout ระบายสีเว็บตูนและมังงะให้กับลูกค้าตามรายละเอียดที่ได้รับมอบหมาย 
                ใช้โปรแกรม Clip Studio Paint และโปรแกรมอื่นๆ ที่เกี่ยวข้อง บริหารจัดการหลายโปรเจกต์พร้อมกันภายใต้กำหนดเวลาที่จำกัด
                ติดต่อสื่อสารกับลูกค้าโดยตรงเพื่อทำความเข้าใจความต้องการและนำเสนอวิธีแก้ปัญหา ทำงานอย่างใกล้ชิดกับนักออกแบบคนอื่นๆ ในโปรเจกต์สร้างสรรค์แบบทีม`,
  profile: "/profiles/cropped-Logo.png",
  render: KcaEdutainmentArticle, // ✅ ใช้ component แทน string
  tags: ["UX Design", "Article", "Graphics Design"],
};

export default kcaEdutainment;
