import styles from './style.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryProps {
  mousePosition: { x: number; y: number };
  handle: string;
}

const Gallery: React.FC<GalleryProps> = ({ mousePosition, handle }) => {
  const { x, y } = mousePosition;

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <Image 
          src={`/images/${handle}/background.jpg`} 
          alt="background image" 
          fill 
        />
      </div>
      <motion.div
        className={styles.vignette}
        style={{ x, y }}
      >
        <Image 
          src={`/images/${handle}/1.jpg`} 
          alt="vignette image" 
          fill 
        />
      </motion.div>
    </div>
  );
};

export default Gallery;
