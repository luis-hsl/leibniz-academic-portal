
import { useEffect } from 'react';

interface ResourcePreloaderProps {
  criticalImages?: string[];
  criticalFonts?: string[];
}

const ResourcePreloader = ({ criticalImages = [], criticalFonts = [] }: ResourcePreloaderProps) => {
  useEffect(() => {
    // Preload critical images
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });

    // Preload critical fonts
    criticalFonts.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.href = src;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup preload links on unmount
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach(link => {
        if (criticalImages.includes(link.getAttribute('href') || '') ||
            criticalFonts.includes(link.getAttribute('href') || '')) {
          link.remove();
        }
      });
    };
  }, [criticalImages, criticalFonts]);

  return null;
};

export default ResourcePreloader;
