import { useEffect, useState } from 'react';

export enum ScrollDirection {
  DOWN = 'DOWN',
  UP = 'UP',
}

interface UseScrollDirectionOptions {
  initialDirection?: ScrollDirection;
  thresholdPixels?: number;
}

const useScrollDirection = (
  { initialDirection, thresholdPixels }: UseScrollDirectionOptions = {
    initialDirection: ScrollDirection.DOWN,
    thresholdPixels: 0,
  }
) => {
  const [scrollDir, setScrollDir] = useState(initialDirection);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return () => {};
    }

    const threshold = thresholdPixels || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? ScrollDirection.UP : ScrollDirection.DOWN);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [initialDirection, thresholdPixels]);

  return scrollDir;
};

export default useScrollDirection;
