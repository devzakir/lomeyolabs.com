import { useEffect } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Lightbox = ({ isOpen, image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="relative max-w-7xl mx-auto"
        onClick={handleContentClick}
      >
        <button
          className="absolute -top-12 right-0 text-white hover:text-primary-300 transition-colors"
          onClick={onClose}
          type="button"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>

        <div className="relative w-[1000px] h-[600px]">
          <Image
            src={image}
            alt="Screenshot preview"
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
            quality={100}
            onError={(e) => {
              console.error('Image failed to load:', image);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Lightbox; 