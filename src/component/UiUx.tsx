import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const SectionUiux = () => {
  const [expandAlope, setExpandAlope] = useState(false);
  const [expandSribu, setExpandSribu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState<string>("");
  const [isMobileView, setIsMobileView] = useState(
    typeof window !== "undefined" ? window.innerWidth < 938 : false
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 938);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (src: string) => {
    setModalImage(src);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage("");
  };

  return (
    <section
      className="relative container mx-auto bg-[#B8E979] overflow-hidden py-20 px-6 md:px-16 lg:px-24"
      id="UiUx"
    >
      <div className="absolute top-0 left-0 w-full h-48 bg-white z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          className="text-[48px] md:text-[100px] leading-tight md:leading-[85px] font-extrabold text-[#243A07] mb-4 mt-7"
          data-aos="fade-right"
        >
          UI/UX <br className="hidden md:block" /> WEBSITE
        </h2>

        {/* Desktop Layout */}
        {!isMobileView && (
          <div className="hidden md:block">
            {/* ALOPE */}
            <div className="flex flex-col lg:flex-row gap-6 md:px-10 items-start mt-16 md:mt-32">
              <div className="w-full lg:w-[55%] flex flex-col items-center">
                <img
                  src="/assets/img/laptop1.png"
                  alt="Laptop ALOPE"
                  className="w-full max-w-[750px] h-auto z-10"
                  data-aos="fade-right"
                />
                <div className="w-[530px] mt-1 mb-6">
                  <div className="bg-white rounded-l-2xl px-6 py-4 w-[300px] md:w-[1302px] shadow-md">
                    <p className="text-sm text-gray-800 font-semibold uppercase">
                      Website
                    </p>
                    <p className="text-lg md:text-3xl font-extrabold text-[#243A07]">
                      alope.id
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[30%] md:-mt-60  flex flex-col md:flex-row gap-4 md:-translate-x-20">
                {["alope1.png", "alope2.png"].map((img, idx) => (
                  <img
                    key={idx}
                    src={`/assets/img/${img}`}
                    alt={`ALOPE UI ${idx + 1}`}
                    className={`w-full h-auto  md:h-[900px]  object-contain cursor-pointer ${
                      idx === 0 ? "md:translate-x-5" : "md:translate-x-26"
                    } md:-translate-y-60`}
                    onClick={() => openModal(`/assets/img/${img}`)}
                    data-aos={idx === 0 ? "fade-up" : "fade-down"}
                  />
                ))}
              </div>
            </div>

            {/* SRIBU */}
            <div className="flex flex-col lg:flex-row-reverse -mt-20 md:px-10 gap-6 items-start mb-16 md:mb-20">
              <div className="w-full lg:w-[55%] flex flex-col items-center">
                <img
                  src="/assets/img/laptop2.png"
                  alt="Laptop SRIBU"
                  className="w-full max-w-[750px] h-auto z-10 mt-10 md:mt-20"
                  data-aos="fade-left"
                />
                <div className="w-[1710px] mt-1 mb-6">
                  <div className="bg-white rounded-r-2xl text-end px-6 py-4 w-[300px] md:w-[1125px] shadow-md">
                    <p className="text-sm text-gray-800 font-semibold uppercase">
                      Re Design Website
                    </p>
                    <p className="text-lg md:text-3xl font-extrabold text-[#243A07]">
                      sribu.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[30%] flex flex-col md:flex-row md:-mt-40 gap-2 md:-translate-x-56">
                {["sribu1.png", "sribu2.png"].map((img, idx) => (
                  <img
                    key={idx}
                    src={`/assets/img/${img}`}
                    alt={`SRIBU UI ${idx + 1}`}
                    className={`w-full h-auto md:h-[900px] object-contain cursor-pointer ${
                      idx === 0 ? "md:-translate-x-56" : "md:-translate-x-60"
                    } md:-translate-y-50`}
                    onClick={() => openModal(`/assets/img/${img}`)}
                    data-aos={idx === 0 ? "fade-up" : "fade-down"}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Expand View for Mobile or Narrow Screens */}
        {isMobileView && (
          <div className="block">
            <div className="flex flex-col gap-6">
              {/* ALOPE CARD */}
              <div className="bg-[#DCF4BC] rounded-xl w-full shadow-md border border-[#c5e7a7] relative overflow-visible z-0">
                <img
                  src="/assets/img/laptop1.png"
                  alt="ALOPE"
                  className="w-full mt-2"
                />
                <div className="p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    Website
                  </p>
                  <p className="text-base font-extrabold text-[#243A07]">
                    alope.id
                  </p>
                </div>

                <div
                  className={`transition-all duration-[1100ms] ease-in-out px-4 md:mt-20 ${
                    expandAlope
                      ? "max-h-[3000px] opacity-100 scale-100 pb-6"
                      : "max-h-2 opacity-0 scale-95  pb-0"
                  } overflow-hidden`}
                >
                  {["alope1.png", "alope2.png"].map((img, idx) => (
                    <img
                      key={idx}
                      src={`/assets/img/${img}`}
                      alt={`ALOPE UI ${idx + 1}`}
                      className={`rounded-md w-full ${
                        idx > 0 ? "mt-2" : ""
                      } cursor-pointer`}
                      onClick={() => openModal(`/assets/img/${img}`)}
                    />
                  ))}
                </div>

                <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 z-50">
                  <button
                    onClick={() => setExpandAlope(!expandAlope)}
                    className="text-xs text-green-900 font-semibold bg-[#DCF4BC] min-w-[110px] min-h-[36px] px-4 py-1 rounded-full flex flex-col items-center shadow-md"
                  >
                    {expandAlope ? (
                      <>
                        <span>Hide</span>
                        <span className="-mt-1 text-[10px]">▲</span>
                      </>
                    ) : (
                      <>
                        <span>Expand</span>
                        <span className="-mt-1 text-[10px]">▼</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* SRIBU CARD */}
              <div className="bg-[#DCF4BC] rounded-xl w-full shadow-md border border-[#c5e7a7] relative overflow-visible z-0">
                <img
                  src="/assets/img/laptop2.png"
                  alt="SRIBU"
                  className="w-full mt-2"
                />
                <div className="p-4 text-center">
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    Re Design Website
                  </p>
                  <p className="text-base font-extrabold text-[#243A07]">
                    sribu.com
                  </p>
                </div>

                <div
                  className={`transition-all duration-[1200ms] px-4 ${
                    expandSribu
                      ? "max-h-[3000px] opacity-100 scale-100 pb-6"
                      : "max-h-2 opacity-0 scale-95 pb-0"
                  } overflow-hidden`}
                >
                  {["sribu1.png", "sribu2.png"].map((img, idx) => (
                    <img
                      key={idx}
                      src={`/assets/img/${img}`}
                      alt={`SRIBU UI ${idx + 1}`}
                      className={`rounded-md w-full ${
                        idx > 0 ? "mt-2" : ""
                      } cursor-pointer`}
                      onClick={() => openModal(`/assets/img/${img}`)}
                    />
                  ))}
                </div>

                <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 z-50">
                  <button
                    onClick={() => setExpandSribu(!expandSribu)}
                    className="text-xs text-green-900 font-semibold bg-[#DCF4BC] min-w-[110px] min-h-[36px] px-4 py-1 rounded-full flex flex-col items-center shadow-md"
                  >
                    {expandSribu ? (
                      <>
                        <span>Hide</span>
                        <span className="-mt-1 text-[10px]">▲</span>
                      </>
                    ) : (
                      <>
                        <span>Expand</span>
                        <span className="-mt-1 text-[10px]">▼</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Title + Gambar */}
        <div className="mb-2 mt-10 md:-mt-44">
          <h3
            className="text-[36px] md:text-[100px] font-extrabold text-[#243A07] mb-6 md:-mb-10"
            data-aos="fade-right"
          >
            MOBILE
          </h3>
          <div className="flex justify-center">
            <img
              src="/assets/img/mobile/Group 6.png"
              alt="Mobile"
              className="w-[600px] md:w-[220px] lg:w-[850px]"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Popup"
            className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default SectionUiux;