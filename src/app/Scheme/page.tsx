import Image from "next/image"
import Human from "@/assets/images/human.png"
import { StickyCard } from "@/components/ui/sticky-card";
import { landscapeData } from "@/lib/landscape";
import JobCareer from '@/components/JobCareer/page'
export default function Scheme() {
  return (
    <>
      <header>
        <video
          playsInline
          autoPlay
          muted
          loop
          preload="metadata"
          className="w-full h-screen object-cover"
        >
          <source src="/video/bg-video.mp4" type="video/mp4" />
        </video>

        <h1 className='absolute bottom-0 left-10 text-[5.5vw] font-semibold text-white'>หลักสูตรการศึกษา</h1>
      </header>

      <section className="h-full bg-gray-200 rounded-bl-[50px] rounded-br-[50px] py-20">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between py-20">
            <div className="text-6xl font-bold max-w-[700px] ">
              <h1>Applied Computer Science-Multimedia</h1>
            </div>
            <div className="max-w-[500px] text-2xl">
              <p>พร้อมหรือยังที่จะก้าวเข้าสู่โลกดิจิทัลอย่างสร้างสรรค์และเต็มไปด้วยโอกาสใหม่ร่วมเป็นส่วนหนึ่งของสาขาวิชาที่ผสมผสานความรู้ด้านเทคโนโลยีคอมพิวเตอร์และการสร้างสรรค์มัลติมีเดียเพื่อพัฒนาทักษะที่ตอบโจทย์อุตสาหกรรมยุคใหม่</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-[25px]">
            <div>
              <Image width={100} height={100} className="w-full" src={Human} alt="Multimedia" />
            </div>


            <table className="max-w-full table-auto border-collapse border border-gray-300 h-fit">
              <thead>
                <tr className="bg-gray-200">
                  <td className="border-gray-300 px-4 py-2 text-left">ชื่อปริญญาและสาขาวิชา</td>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4">ชื่อเต็ม</td>
                  <td className="border border-gray-300 px-4"> (ภาษาไทย) </td>
                  <td className="border border-gray-300 px-4">วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย)</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2"> (ภาษาอังกฤษ) </td>
                  <td className="border border-gray-300 px-4 py-2">of Science (Applied Computer Science-Multimedia)</td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2 text-left">หน่วยกิต</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">หมวดวิชาเลือกศึกษาทั่วไป 31 หน่วยกิต</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">หมวดวิชาเสรี 6 หน่วยกิต</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">หมวดวิชาเฉพาะ 101 หน่วยกิต</td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="border border-gray-300 px-4 py-2 text-left">คุณสมบัติของผู้เข้าศึกษา</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>เป็นผู้สำเร็จการศึกษาระดับมัธยมศึกษาตอนปลาย กลุ่มสาระการเรียนรู้วิทยาศาสตร์ และกลุ่มสาระการเรียนรู้คณิตศาสตร์ หรือสายการเรียนวิทยาศาสตร์-คณิตศาสตร์ หรือประกาศนียบัตรที่กระทรวงศึกษาการเทียบเท่าสายวิทยาศาสตร์</li>
                      <li>ผู้ที่ไม่อยู่ในเกณฑ์ข้างต้นให้อยู่ในดุลยพินิจของคณะกรรมการประจำหลักสูตร</li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </section>

      <section>
        <main className="min-h-screen bg-background py-12">
          <StickyCard sections={landscapeData} />
        </main>
      </section>

      <section className="bg-white min-h-screen">
        <div className="w-11/12 mx-auto">
          <h1>วิชาเอก</h1>
          <div className="grid grid-cols-3 grid-rows-5">
            <div className="bg-indigo-400 col-span-2">
              <h1>dsfdfs</h1>
            </div>
            <div className="bg-pink-400 col-span-1">
              <h1>dsfdfs</h1>
            </div>
            <div className="bg-indigo-400 col-span-2">
              <h1>dsfdfs</h1>
            </div>
            <div className="bg-pink-400 col-span-1">
              <h1>dsfdfs</h1>
            </div>
            <div className="bg-indigo-400 col-span-2">
              <h1>dsfdfs</h1>
            </div>
            <div className="bg-pink-400 col-span-1">
              <h1>dsfdfs</h1>
            </div>
            <div className="bg-indigo-400 col-span-2">
              <h1>dsfdfs</h1>
            </div>
            <div className="bg-pink-400 col-span-1">
              <h1>dsfdfs</h1>
            </div>
            <div className="bg-indigo-400 col-span-2">
              <h1>dsfdfs</h1>
            </div>
            <div className="bg-pink-400 col-span-1">
              <h1>dsfdfs</h1>
            </div>
          </div>
          <div className="py-20">
            <h1>โครงการสร้างหลักสูตร</h1>
            <p>จำนวนหน่วยกิตรวมตลอดหลักสูตร 135 หน่วยกิต</p>
            <table className="w-full table-auto border-collapse border border-gray-200 h-fit">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-200 px-4 py-2">Unit</th>
                  <th className="border border-gray-200 px-4 py-2">Column 1</th>
                  <th className="border border-gray-200 px-4 py-2">Column 2</th>
                  <th className="border border-gray-200 px-4 py-2">More info</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h1>ค่าบำรุงการศึกษา</h1>
            <table className="w-full table-auto border-collapse border border-r-gray-200 h-fit">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-200 px-4 py-2">Column 1</th>
                  <th className="border border-gray-200 px-4 py-2">Column 2</th>
                  <th className="border border-gray-200 px-4 py-2">Column 3</th>
                  <th className="border border-gray-200 px-4 py-2">Column 4</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2"></td>
                  <td className="border border-gray-200 px-4 py-2">More info here</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>

        <div>
          <JobCareer />
        </div>
        </div>

      </section>

    </>
  )
}