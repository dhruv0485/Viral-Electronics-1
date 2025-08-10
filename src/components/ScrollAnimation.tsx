import { ReactNode, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  once?: boolean;
  viewportThreshold?: number;
}

const ScrollAnimation = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 50,
  once = true,
  viewportThreshold = 0.1,
}: ScrollAnimationProps) => {
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
        delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: `-${viewportThreshold * 100}px` }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 