
import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  width = 400,
  height = 300,
  priority = false,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNhcnJlZ2FuZG8uLi48L3RleHQ+PC9zdmc+",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP and AVIF sources if possible
  const generateModernSources = (originalSrc: string) => {
    const sources = [];
    const baseSrc = originalSrc.replace(/\.[^/.]+$/, "");
    
    // Add AVIF source (most efficient)
    sources.push({
      srcSet: `${baseSrc}.avif`,
      type: 'image/avif'
    });
    
    // Add WebP source (good fallback)
    sources.push({
      srcSet: `${baseSrc}.webp`,
      type: 'image/webp'
    });
    
    return sources;
  };

  const modernSources = generateModernSources(src);

  useEffect(() => {
    if (priority) {
      setCurrentSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setCurrentSrc(src);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '50px' // Reduced from 100px for better performance
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    console.warn(`Failed to load image: ${src}`);
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        width: width ? `${width}px` : '100%', 
        height: height ? `${height}px` : 'auto',
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
    >
      {!isInView && !priority ? (
        <div 
          className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center"
          style={{ 
            width: width ? `${width}px` : '100%', 
            height: height ? `${height}px` : '100%' 
          }}
        >
          <span className="text-gray-400 text-sm">Carregando...</span>
        </div>
      ) : (
        <>
          {!isLoaded && !hasError && (
            <img
              src={placeholder}
              alt=""
              width={width}
              height={height}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isLoaded ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ filter: 'blur(2px)' }}
            />
          )}
          {!hasError ? (
            <picture>
              {modernSources.map((source, index) => (
                <source
                  key={index}
                  srcSet={source.srcSet}
                  type={source.type}
                  sizes={sizes}
                />
              ))}
              <img
                src={currentSrc}
                alt={alt}
                width={width}
                height={height}
                onLoad={handleLoad}
                onError={handleError}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={priority ? 'high' : 'low'}
                sizes={sizes}
              />
            </picture>
          ) : (
            <div 
              className="w-full h-full bg-gray-100 flex items-center justify-center"
              style={{ 
                width: width ? `${width}px` : '100%', 
                height: height ? `${height}px` : '100%' 
              }}
            >
              <span className="text-gray-500 text-sm">Imagem não disponível</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OptimizedImage;
