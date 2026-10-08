import { useEffect, useRef } from 'react';

export default function Reveal({ children, className = '', as: Element = 'div' }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.remove('reveal-pending');
        observer.unobserve(element);
      }
    }, { threshold: 0.08 });
    const bounds = element.getBoundingClientRect();
    if (bounds.top >= window.innerHeight) element.classList.add('reveal-pending');
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <Element ref={elementRef} className={`reveal ${className}`}>{children}</Element>;
}
