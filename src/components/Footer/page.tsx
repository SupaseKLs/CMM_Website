// 'use client'
// import { useScroll, useTransform, motion } from 'framer-motion';
// import Picture1 from '@/assets/img/me.jpg';
// import Picture2 from '@/assets/img/me.jpg';

// import Image from 'next/image';
// import { useEffect, useRef } from 'react';

// // Define the types for the Slide component props
// interface SlideProps {
//   src: string;
//   direction: 'left' | 'right';
//   left: string;
//   progress: any; // Use the appropriate type for scrollYProgress from Framer Motion if known
// }

// export default function Home() {
//   const container = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start end', 'end start'],
//   });

  

//   return (
//     <main className="overflow-hidden">
//       <div className="h-[20vh]" />
//       <div ref={container}>
//         <Slide src={Picture1} direction="left" left="-10%" progress={scrollYProgress} />
//         <Slide src={Picture2} direction="right" left="-25%" progress={scrollYProgress} />
//       </div>
//     </main>
//   );
// }

// const Slide: React.FC<SlideProps> = ({ src, direction, left, progress }) => {
//   const translateDirection = direction === 'left' ? -1 : 1;
//   const translateX = useTransform(progress, [0, 1], [150 * translateDirection, -150 * translateDirection]);

//   return (
//     <motion.div
//       style={{ x: translateX, left }}
//       className="font-semibold text-white uppercase relative flex whitespace-nowrap"
//     >
//       <Phrase src={src} />
//       <Phrase src={src} />
//     </motion.div>
//   );
// };

// // Define the types for the Phrase component props
// interface PhraseProps {
//   src: string;
// }

// const Phrase: React.FC<PhraseProps> = ({ src }) => {
//   return (
//     <div className="px-5 flex gap-5 items-center">
//       <p className="text-6xl md:text-9xl">Get in touch</p>
//       <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
//         <Image style={{ objectFit: 'cover' }} src={src} alt="image" fill />
//       </span>
//     </div>
//   );
// };
