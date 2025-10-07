// src/components/articles/KcaEdutainmentArticle.tsx
"use client";

export default function KcaEdutainmentArticle() {
  return (
    <article className="prose prose-gray max-w-none">
      <img
        src="/profiles/cropped-Logo.png"
        alt="cropped-Logo"
        className="rounded-lg my-4 w-full max-w-2xl"
      />
      <p>
        ผลงานตัวอย่างต่างๆที่ได้ประสบการณ์จากการทำงานที่ KCA Education
        โดยการทำงานจัด layout
        ระบายสีเว็บตูนและมังงะให้กับลูกค้าตามรายละเอียดที่ได้รับมอบหมาย
        ใช้โปรแกรม Clip Studio Paint และโปรแกรมอื่นๆ ที่เกี่ยวข้อง
        บริหารจัดการหลายโปรเจกต์พร้อมกันภายใต้กำหนดเวลาที่จำกัด
        ติดต่อสื่อสารกับลูกค้าโดยตรงเพื่อทำความเข้าใจความต้องการและนำเสนอวิธีแก้ปัญหา
        ทำงานอย่างใกล้ชิดกับนักออกแบบคนอื่นๆ ในโปรเจกต์สร้างสรรค์แบบทีม
      </p>
      <br />

      <h1 className="text-xl font-bold">ลักษณะการทำงาน</h1>
      <br />

      <p>
        จากหน้าภาพ Original หน้านี้เป็นภาพที่ได้จากลูกค้าจากเรื่อง{" "}
        <span className="font-bold">Fuufu ijou koibito miman</span>
      </p>
      <img
        src="/kca/manga.jpg"
        alt="manga"
        className="rounded-lg my-4 w-full max-w-2xl"
      />

      <p>
        นำมาจัดอยู่ในส่วนของ layout โดยเราทำการคลีนไฟล์ออกด้วย
        เพื่อเตรียมพร้อมในการลงสี โดยดูวิธีการจากซ้ายไปขวา
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>จัด layout คลีนไฟล์</li>
        <li>ลงสีและเงา</li>
        <li>ปรับแต่งแสงสีต่างๆ เป็นขั้นตอนในการ Modify ภาพ</li>
      </ol>
      <img
        src="/kca/layout4.jpg"
        alt="layout"
        className="rounded-lg my-4 w-full max-w-2xl"
      />

      <p className="text-xl font-bold">
        สำหรับผลงานอื่นๆเพิ่มเติมสามารถติดต่อสอบถามได้ครับ
      </p>
    </article>
  );
}
