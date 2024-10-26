"use client";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import { XIcon } from "lucide-react";
import { ChevronLeftIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import "photoswipe/dist/photoswipe.css";

const PropertyImages = ({ images }) => {
  const [imagesLoaded, setImagesLoaded] = useState({});

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const renderGalleryItem = (image, index) => (
    <Item
      original={image}
      thumbnail={image}
      width={1000}
      height={600}
      className="pswp-gallery-item"
    >
      {({ ref, open }) => (
        <div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100"
          onClick={open}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse
              ${imagesLoaded[index] ? "opacity-0" : "opacity-100"}
              transition-opacity duration-300`}
          />

          <div ref={ref}>
            <Image
              src={image}
              alt={`Property image ${index + 1}`}
              className={`
                cursor-pointer
                transition-all duration-300
                ${imagesLoaded[index] ? "opacity-100 scale-100" : "opacity-0 scale-105"}
                hover:opacity-90
              `}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
              onLoadingComplete={() => handleImageLoad(index)}
              quality={90}
            />
          </div>
        </div>
      )}
    </Item>
  );

  return (
    <Gallery
      uiElements={[
        {
          name: "closeButton",
          ariaLabel: "Close",
          order: 2,
          isButton: true,
          html: '<svg><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
          onClick: (e, photoswipe) => {
            photoswipe.close();
          },
        },
      ]}
    >
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto">
          {images.length === 1 ? (
            <div className="max-w-3xl mx-auto">
              {renderGalleryItem(images[0], 0)}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${
                    images.length === 3 && index === 2
                      ? "col-span-2"
                      : "col-span-1"
                  }`}
                >
                  {renderGalleryItem(image, index)}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <style jsx global>{`
        .pswp {
          --pswp-bg-opacity: 0.8;
        }

        .pswp__bg {
          background: rgba(0, 0, 0, var(--pswp-bg-opacity)) !important;
          backdrop-filter: blur(10px);
        }

        .pswp__zoom-wrap {
          transition: transform 0.33s cubic-bezier(0.4, 0, 0.22, 1) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          height: 100% !important;
        }

        .pswp__img {
          max-height: 85vh !important;
          max-width: 90vw !important;
          object-fit: contain !important;
          margin: auto !important;
          opacity: 1 !important;
          transition: opacity 0.33s ease-in-out !important;
        }

        .pswp__img--loaded {
          opacity: 1 !important;
        }

        .pswp__button--close,
        .pswp__button--arrow--left,
        .pswp__button--arrow--right {
          background: none !important;
          padding: 0 !important;
          width: 48px !important;
          height: 48px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: white !important;
          opacity: 0.8 !important;
          transition: opacity 0.2s ease !important;
        }

        .pswp__button:hover {
          opacity: 1 !important;
        }

        .pswp__button--close {
          position: absolute !important;
          top: 20px !important;
          right: 20px !important;
          background-color: rgba(0, 0, 0, 0.4) !important;
          border-radius: 50% !important;
          z-index: 10000 !important;
        }

        .pswp__button--arrow--left {
          left: 20px !important;
        }

        .pswp__button--arrow--right {
          right: 20px !important;
        }

        .pswp__top-bar {
          background: none !important;
        }

        .pswp__counter,
        .pswp__preloader,
        .pswp__caption {
          display: none !important;
        }

        .pswp__button--close svg,
        .pswp__button--arrow--left svg,
        .pswp__button--arrow--right svg {
          width: 24px;
          height: 24px;
        }

        .pswp__ui--idle .pswp__button {
          opacity: 0 !important;
        }

        .pswp__ui--idle .pswp__button--close {
          opacity: 1 !important;
        }

        @keyframes pswpFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .pswp__item {
          animation: pswpFadeIn 0.33s cubic-bezier(0.4, 0, 0.22, 1);
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </Gallery>
  );
};

export default PropertyImages;
