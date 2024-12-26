'use client';
import CarouselDrag from '@/components/Carousel/page';
import Gallery from '@/components/gallery';
import { useSpring, MotionValue } from 'framer-motion';  // Import MotionValue
import Description from '@/components/description';

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

  // Define mousePosition as an object with MotionValue<number>
  const mousePosition: { x: MotionValue<number>; y: MotionValue<number> } = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  };

  // Update mouseMove function to correctly handle MotionValue
  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);

    // Correctly use .set() on MotionValue
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
          Your browser does not support the video tag.
        </video>
      </header>

      <section className="h-full bg-white rounded-l-[50px] rounded-r-[50px] py-20">
        <div className="w-11/12 mx-auto">
          <div>
            <h1>CMM KMUTT</h1>
            <p className="max-w-[500px]">
              ก้าวสู่โลกแห่งความคิดสร้างสรรค์และเทคโนโลยีที่ครบวงจรด้วยการเรียนรู้ทั้งการผลิตสื่อมัลติมีเดียการถ่ายภาพการจัดแสงและการตัดต่อวิดีโอที่มืออาชีพ
              เลือกใช้พร้อมพัฒนาทักษะด้านการออกแบบและพัฒนาเว็บไซต์ให้ตอบโจทย์โลกดิจิทัลอีกทั้งยังเสริมสร้างความสามารถในการพัฒนาเกมที่เต็มไปด้วย
              จินตนาการและความสนุกเรามุ่งเน้นการเรียนรู้ผ่านการปฏิบัติจริงพร้อมอุปกรณ์ทันสมัยและทีมผู้เชี่ยวชาญที่พร้อมสนับสนุนคุณในทุกก้าวของ
              การสร้างสรรค์งาน!
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
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

          <div className="flex justify-between mt-8">
            <h1>เพลิดเพลินไปกับการเรียน</h1>
            <p className="w-96">
              มหาวิทยาลัยมีหลักสูตรวิชาการนานาชาติที่หลากหลายให้เลือกเรียน ภาษาทางการ ได้แก่ อังกฤษ อิตาลี เยอรมัน และฝรั่งเศสซึ่งสร้างสภาพแวดล้อมที่สมบูรณ์แบบสำหรับการเรียนรู้และการวิจัยทางวิทยาศาสตร์
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-red-300 w-80 h-96">
              <h1>card1</h1>
            </div>
            <div className="bg-red-300 w-80 h-96">
              <h1>card2</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <CarouselDrag />

        <h1>ผลงานนักศึกษา</h1>

        <main onMouseMove={mouseMove} >
          {projects.map(({ handle }, i) => (
            <Gallery mousePosition={mousePosition} handle={handle} key={i} />
          ))}
          <Description mousePosition={mousePosition} projects={projects} />
        </main>

      </section>

      <section className='h-full bg-white rounded-l-[50px] rounded-r-[50px] py-20'>


      </section>
    </>
  );
};

export default HomePage;
