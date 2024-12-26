import { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  name: string;
  handle: string;
}

interface DescriptionProps {
  mousePosition: { x: number; y: number };
  projects: Project[];
}

const Index: React.FC<DescriptionProps> = ({ mousePosition, projects }) => {
  const [index, setIndex] = useState<number>(0);
  const { x, y } = mousePosition;

  return (
    <div className={styles.description}>
      <div className={styles.descriptionContainer}>
        {projects.map(({ name }, i) => (
          <p onMouseOver={() => setIndex(i)} key={`p${i}`}>
            {name}
          </p>
        ))}
      </div>
      <motion.div className={styles.vignette} style={{ x, y }}>
        <Image
          src={`/images/${projects[index].handle}/about.jpg`}
          alt="image"
          fill
        />
      </motion.div>
    </div>
  );
};

export default Index;
