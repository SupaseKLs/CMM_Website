'use client';
import CarouselDrag from '@/components/Carousel/page';
import Gallery from '@/components/gallery';
import Link from 'next/link';
import { useSpring, MotionValue } from 'framer-motion';  // Import MotionValue
interface Project {
  name: string;
  handle: string;
}
interface mousePosition {
  x: number;
  y: number;
}
const HomePage: React.FC = () => {
  const projects: Project[] = [
    { name: "Dyal Thak", handle: "dyal_thak" },
    { name: "Leidinger Matthias", handle: "leidinger_matthias" },
    { name: "Mark Rammers", handle: "mark_rammers" },
    { name: "Landon Speers", handle: "landon_speers" }
  ];

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  };

  const mousePosition: { x: MotionValue<number>; y: MotionValue<number> } = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  };

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);

    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

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

        <h1 className='absolute bottom-0 left-10 text-[5.5vw] font-semibold text-white'>DIVISION OF COMPUTER<br /> AND INFORMATION TECHNOLOGY</h1>
      </header>

      <section className="h-full bg-white rounded-bl-[50px] rounded-br-[50px] py-20">
        <div className="w-11/12 mx-auto">
          <div>
            <h1 className='text-4xl font-bold'>CMM KMUTT</h1>
            <p className="pt-6 text-2xl max-w-[750px]">
              ก้าวสู่โลกแห่งความคิดสร้างสรรค์และเทคโนโลยีที่ครบวงจรด้วยการเรียนรู้ทั้งการผลิตสื่อมัลติมีเดียการถ่ายภาพการจัดแสงและการตัดต่อวิดีโอที่มืออาชีพ
              เลือกใช้พร้อมพัฒนาทักษะด้านการออกแบบและพัฒนาเว็บไซต์ให้ตอบโจทย์โลกดิจิทัลอีกทั้งยังเสริมสร้างความสามารถในการพัฒนาเกมที่เต็มไปด้วย
              จินตนาการและความสนุกเรามุ่งเน้นการเรียนรู้ผ่านการปฏิบัติจริงพร้อมอุปกรณ์ทันสมัยและทีมผู้เชี่ยวชาญที่พร้อมสนับสนุนคุณในทุกก้าวของ
              การสร้างสรรค์งาน!
            </p>
          </div>

          <div className="py-40 flex flex-wrap justify-evenly">
            <div className="bg-red-300 w-80 h-96">
              <h1>card1</h1>
            </div>
            <div className="bg-red-300 w-80 h-96">
              <h1>card2</h1>
            </div>
            <div className="bg-red-300 w-80 h-96">
              <h1>card3</h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-8">
            <h1 className='text-6xl font-bold font-kanit'>เพลิดเพลินไป<br />กับการเรียน</h1>
            <p className="max-w-[700px] pt-6 text-2xl">
              มหาวิทยาลัยมีหลักสูตรวิชาการนานาชาติที่หลากหลายให้เลือกเรียน ภาษาทางการ ได้แก่ อังกฤษ อิตาลี เยอรมัน และฝรั่งเศสซึ่งสร้างสภาพแวดล้อมที่สมบูรณ์แบบสำหรับการเรียนรู้และการวิจัยทางวิทยาศาสตร์
            </p>
          </div>

          <div className="flex flex-wrap justify-evenly py-20">
            <div className="bg-red-300 w-80 h-96">
              <h1>card1</h1>
            </div>
            <div className="bg-red-300 w-80 h-96">
              <h1>card2</h1>
            </div>
          </div>
        </div>
      </section>

      <section style={{ position: 'relative', zIndex: 1 }}>
        <div className="py-20">
          <CarouselDrag />
        </div>
        
        <div className="w-11/12 mx-auto">
          <div className='flex justify-between'>
            <div>
              <h1 className='text-[5vw] text-white'>ผลงานนักศึกษา</h1>
            </div>
            <div className='mt-20'>
              <Link className='rounded-xl py-4 px-8 border-white border-2 text-white' href="">ดูผลงานทั้งหมด</Link>
            </div>
          </div>
        </div>

        <main onMouseMove={mouseMove}>
          {projects.map(({ handle }, i) => (
            <Gallery mousePosition={mousePosition} handle={handle} key={i} />
          ))}
        </main>
      </section>

      <section
        className="h-full bg-white rounded-l-[50px] rounded-r-[50px] py-20"
        style={{
          position: 'relative',
          zIndex: 2, // อยู่บน Section 1
          marginTop: '-200px', // ปรับค่าเพื่อเลื่อน Section 2 มาซ้อน Section 1
        }}
      >
        <div className="w-11/12 mx-auto">
          <div></div>
          <div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-6/12">
                <h1 className="text-4xl md:text-6xl font-semibold">
                  คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี
                </h1>
                <h1 className="text-2xl md:text-4xl font-semibold">
                  สาขาวิชาวิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย
                </h1>
              </div>
              <p className="w-full md:w-4/12 text-2xl">
                คำตอบสำหรับคนที่มีความฝันอยากสร้างอนาคตในสายเทคโนโลยีและมัลติมีเดียด้วยหลักสูตรที่ผสมผสานความรู้ด้านการพัฒนาเทคโนโลยีคอมพิวเตอร์และการสร้างสรรค์สื่อมัลติมีเดียเข้าด้วยกันอย่างลงตัว
              </p>
            </div>
            <div className="py-20 flex justify-center items-center">
              <video
                playsInline
                autoPlay
                loop
                className="w-full rounded-xl h-[600px] object-cover"
              >
                <source src="/video/Teacher.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default HomePage;
