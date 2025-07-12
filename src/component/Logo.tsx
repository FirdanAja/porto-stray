import { FaInstagram, FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const logos = [
  {
    title: "Youtube Logo Channel",
    desc: "Pembahasan tentang seputar anime&manga",
    yt: "@taokun0",
    img: "/assets/img/logo/1.png",
  },
  {
    title: "Brand logo Design",
    desc: "Tempat penjualan dan service sebuah laptop",
    ig: "@pubacom.kuningan",
    img: "/assets/img/logo/2.png",
  },
  {
    title: "Personal Logo Design",
    desc: "individu design logo ",
    ig: "RND",
    img: "/assets/img/logo/3.png",
  },
  {
    title: "Redesign Mascot Logo",
    desc: "Tempat kursus online tentang coding",
    ig: "@alope.id",
    img: "/assets/img/logo/4.png",
  },
];

const SectionLogo = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="bg-[#B8E979] mt-20 py-20  container mx-auto px-6 md:px-16 lg:px-24"
      id="Logo"
    >
      <h2
        className="text-[60px] md:text-[100px] leading-none font-extrabold text-[#243A07] mb-10 -mt-24"
        data-aos="fade-right"
      >
        LOGO
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 relative pb-14" // ← Tambah padding bottom
        data-aos="fade-up"
      >
        {logos.map((item, i) => {
          const isExpanded = expanded === i;

          return (
            <div
              key={i}
              className="bg-[#DCF4BC] rounded-xl overflow-visible shadow-sm border border-white transition-all duration-300 relative"
            >
              {/* Text Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.desc}</p>

                {item.yt && (
                  <div className="flex items-center text-sm text-gray-800 gap-2">
                    <FaYoutube className="text-black" />
                    <span>{item.yt}</span>
                  </div>
                )}

                {item.ig && item.ig !== "RND" && (
                  <div className="flex items-center text-sm text-gray-800 gap-2">
                    <FaInstagram className="text-black" />
                    <span>{item.ig}</span>
                  </div>
                )}

                {item.ig === "RND" && (
                  <div className="text-sm text-gray-800 mt-7">
                    <span>{item.ig}</span>
                  </div>
                )}
              </div>

              {/* Gambar */}
              <div
                className={`px-2 transition-all duration-700 ease-in-out overflow-hidden rounded-b-xl ${
                  isExpanded
                    ? "max-h-screen opacity-100 scale-100"
                    : "max-h-[150px] opacity-100 scale-95"
                } md:max-h-full md:opacity-100 md:scale-100`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain mb-2 rounded-md"
                />
              </div>

              {/* Expand Button di tengah bawah (mobile only) */}
              <div className="md:hidden absolute left-1/2 -bottom-4 transform -translate-x-1/2 ">
                <button
                  onClick={() => setExpanded(isExpanded ? null : i)}
                  className="text-xs text-green-900 font-semibold bg-[#DCF4BC] min-w-[90px] min-h-[36px] px-4 py-1 rounded-full flex flex-col items-center"
                >
                  {isExpanded ? (
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
          );
        })}
      </div>
    </section>
  );
};

export default SectionLogo;
