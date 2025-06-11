
import { useEffect } from 'react';

interface ResourcePreloaderProps {
  criticalImages?: string[];
  criticalFonts?: string[];
  highPriorityImages?: string[];
}

const ResourcePreloader = ({ 
  criticalImages = [], 
  criticalFonts = [],
  highPriorityImages = []
}: ResourcePreloaderProps) => {
  useEffect(() => {
    // Preload high priority images first (hero background, first carousel images)
    highPriorityImages.forEach((src, index) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      if (index === 0) {
        // Highest priority for the first image (hero background)
        document.head.insertBefore(link, document.head.firstChild);
      } else {
        document.head.appendChild(link);
      }
    });

    // Preload critical images with medium priority
    criticalImages.forEach(src => {
      // Avoid duplicating if already preloaded as high priority
      if (!highPriorityImages.includes(src)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.fetchPriority = 'high'; // Changed to high for WebP images
        document.head.appendChild(link);
      }
    });

    // Preload critical fonts
    criticalFonts.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.href = src;
      link.crossOrigin = 'anonymous';
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup preload links on unmount
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        if (criticalImages.includes(href) ||
            criticalFonts.includes(href) ||
            highPriorityImages.includes(href)) {
          link.remove();
        }
      });
    };
  }, [criticalImages, criticalFonts, highPriorityImages]);

  return null;
};

export default ResourcePreloader;
