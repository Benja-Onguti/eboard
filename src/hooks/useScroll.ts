import { useState, useEffect } from 'react';

interface ScrollOptions {
  threshold?: number;
  throttle?: number;
}

export const useScroll = (options: ScrollOptions = {}) => {
  const { threshold = 10, throttle = 100 } = options;
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setScrollY(currentScrollY);
          setIsScrolled(currentScrollY > threshold);

          if (currentScrollY > lastScrollY) {
            setDirection('down');
          } else if (currentScrollY < lastScrollY) {
            setDirection('up');
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, lastScrollY]);

  return { scrollY, isScrolled, direction };
};
