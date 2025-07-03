import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container mx-auto py-10 px-20 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-start text-sm text-black">
      {/* Kiri */}
      <div className="mb-6 md:mb-0">
        <h1 className="text-2xl font-extrabold text-green-900">
          SYAHRUL AHKAM
        </h1>
        <p className="text-sm text-black mt-2">©2025</p>
      </div>

      {/* Kanan */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Bagian Contact */}
        <div>
          <h2 className="text-lg font-bold text-green-900 mb-4">Contact</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-black" />
              <span>strayncut@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-black" />
              <span>+62 888 113 0084</span>
            </li>
          </ul>
        </div>

        {/* Bagian Sosial Media */}
        <div className="mt-4 md:mt-0">
          <ul className="space-y-3 mt-8 md:mt-10">
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-black" />
              <span>linkedin.com/in/syahrulahkam</span>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-black" />
              <span>@strayncut</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
