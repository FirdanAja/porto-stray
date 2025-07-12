import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

const posters = [
  "/assets/img/social/1.png",
  "/assets/img/social/2.png",
  "/assets/img/social/3.png",
  "/assets/img/social/4.png",
  "/assets/img/social/5.png",
  "/assets/img/social/6.png",
  "/assets/img/social/7.png",
  "/assets/img/social/8.png",
  "/assets/img/social/9.png",
];

const SectionSocialMedia = () => {
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % posters.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + posters.length) % posters.length);
  };

  return (
    <section
      className="relative container mx-auto bg-limeLight overflow-hidden py-20 pb-32 md:pb-[200px] px-6 md:px-16 lg:px-24"
      id="SosialMedia"
    >
      <div className="absolute top-0 left-0 w-full h-48 bg-white z-10"></div>

      <div className="max-w-7xl mx-auto relative z-20">
        <h2
          className="text-[48px] leading-tight md:text-[100px] md:leading-[80px] font-extrabold text-greenDark mb-12 mt-5"
          data-aos="fade-right"
        >
          SOCIAL <br className="hidden md:block" /> MEDIA
        </h2>

        {/* Carousel Scroll */}
        <div className="relative overflow-hidden group" data-aos="fade-up">
          <div
            ref={scrollRef}
            className={`flex w-max gap-4 transition-all duration-300 ${
              popupIndex === null ? "animate-scrollX" : ""
            }`}
          >
            {[...posters, ...posters].map((src, i) => (
              <div
                key={i}
                onClick={() => setPopupIndex(i % posters.length)}
                className={`cursor-pointer ${
                  i % 9 === 2 || i % 9 === 3 ? "w-[360px]" : "w-[300px]"
                } h-[400px] overflow-hidden shadow-md border border-[#d2ebb2] bg-white flex-shrink-0`}
              >
                <img
                  src={src}
                  alt={`Poster ${(i % 9) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar Section - Desktop Only */}
        <div className="hidden md:flex items-center justify-center mt-6">
          <button
            onClick={handlePrev}
            className="text-black px-2 hover:text-lime-600 text-xl"
          >
            &#8249;
          </button>
          <div className="relative w-[60%] h-3 bg-lime-100 rounded-full mx-4 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-lime-800 rounded-full transition-all duration-300"
              style={{
                width: `${((activeIndex + 1) / posters.length) * 100}%`,
              }}
            />
          </div>
          <button
            onClick={handleNext}
            className="text-black px-2 hover:text-lime-600 text-xl"
          >
            &#8250;
          </button>
        </div>
      </div>

      {/* Modal */}
      {popupIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center"
          onClick={() => setPopupIndex(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] p-4 bg-white rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPopupIndex(null)}
              className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-black"
            >
              ×
            </button>
            <button
              onClick={() =>
                setPopupIndex(
                  (popupIndex - 1 + posters.length) % posters.length
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-sm shadow hover:bg-gray-300"
            >
              ←
            </button>
            <button
              onClick={() => setPopupIndex((popupIndex + 1) % posters.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-sm shadow hover:bg-gray-300"
            >
              →
            </button>
            <img
              src={posters[popupIndex]}
              alt="Popup"
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionSocialMedia;
