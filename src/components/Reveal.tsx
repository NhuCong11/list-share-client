'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { motionVariants } from '@/lib/motionVariants';

interface RevealProps {
  children: React.ReactNode;
  variant?: keyof typeof motionVariants;
  threshold?: number; // % xuất hiện mới trigger, mặc định 20%
  custom?: number;
}

export default function Reveal({ children, variant = 'fade-up', threshold = 0.2, custom }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return (
    <motion.div
      ref={ref}
      variants={motionVariants[variant]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      custom={custom}
    >
      {children}
    </motion.div>
  );
}
