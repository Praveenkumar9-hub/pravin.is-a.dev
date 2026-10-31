import { useState, useEffect, useRef, useCallback } from 'react';

const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#________01';

export function useTextScramble(targetText: string, speed = 35) {
  const [displayText, setDisplayText] = useState(targetText);
  const frameRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    const maxIterations = targetText.length * 3;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    const update = () => {
      setDisplayText(
        targetText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 3) {
              return targetText[index];
            }
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join('')
      );

      if (iteration < maxIterations) {
        iteration++;
        setTimeout(() => {
          frameRef.current = requestAnimationFrame(update);
        }, speed);
      } else {
        setDisplayText(targetText);
      }
    };

    update();
  }, [targetText, speed]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayText(targetText);
      return;
    }
    scramble();
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [targetText, scramble]);

  return displayText;
}

