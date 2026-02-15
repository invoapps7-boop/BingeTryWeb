
import React, { useState, useRef, useCallback, useEffect } from 'react';

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [beforeImgError, setBeforeImgError] = useState(false);
  const [afterImgError, setAfterImgError] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    
    const handleTouchMove = (e: TouchEvent) => {
        if (isDragging) handleMove(e.touches[0].clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMove]);

  const logImageError = (imageSrc: string) => {
    const imageName = imageSrc.split('/').pop() || '[unknown image]';
    // Don't log for placeholder images that are expected to work
    if (imageSrc.includes('https://')) return; 

    console.error(
      ` BINGETRY IMAGE DEBUGGER: Failed to load image '${imageName}' `,
      `\n\n THE PROBLEM:`,
      `\n The browser tried to fetch an image from the URL below, but it failed. This almost always means the file path is incorrect or the file is missing.`,
      `\n -> Attempted URL: ${window.location.origin}/${imageSrc}`,
      `\n\n HOW TO FIX IT:`,
      `\n 1. Open your browser's Developer Tools (press F12).`,
      `\n 2. Go to the "Network" tab.`,
      `\n 3. Refresh the page. You should see a file request for '${imageName}' that is red, with a '404 Not Found' status. This confirms the path is wrong.`,
      `\n 4. Make sure your project has a folder named 'assets' at the same level as your 'index.html' file.`,
      `\n 5. Make sure the image file '${imageName}' is placed directly inside that 'assets' folder.`,
      `\n 6. Double-check that the filename is spelled *exactly* right, including the '.webp' extension.`
    );
  };
  
  const ErrorFallback: React.FC<{imageSrc: string}> = ({imageSrc}) => {
      const imageName = imageSrc.split('/').pop() || 'image';
      return (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white text-center font-sans p-4">
              <div>
                  <p className="font-bold text-lg">Image Not Found</p>
                  <p className="text-sm mt-2 font-mono bg-gray-700 px-2 py-1 rounded break-all">{imageName}</p>
                  <p className="mt-4 text-xs text-gray-400">Please check your file path & open the developer console (F12) for a step-by-step fix.</p>
              </div>
          </div>
      )
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto aspect-[4/3] select-none cursor-ew-resize rounded-2xl overflow-hidden shadow-2xl shadow-black/50 bg-gray-900">
      {/* After Image */}
      {afterImgError ? <ErrorFallback imageSrc={afterImage} /> : (
        <img 
          src={afterImage} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          onError={() => {
            logImageError(afterImage);
            setAfterImgError(true);
          }}
          aria-hidden="true"
        />
      )}

      {/* Before Image (clipped) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        {beforeImgError ? <ErrorFallback imageSrc={beforeImage} /> : (
            <img 
              src={beforeImage} 
              alt="Before" 
              className="w-full h-full object-cover" 
              onError={() => {
                logImageError(beforeImage);
                setBeforeImgError(true);
              }}
              aria-hidden="true"
            />
        )}
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 2px)`, visibility: beforeImgError || afterImgError ? 'hidden' : 'visible' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -ml-5 bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
