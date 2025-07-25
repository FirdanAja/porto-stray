import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F7F7F7]  transition-shadow duration-300">
      <div className="max-w-screen-xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-baseline">
          <h1 className="text-3xl font-bold mr-2 leading-none">Portofolio</h1>
          <span className="text-gray-800 text-lg">Syahrul Ahkam</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-[#f7f7f7] shadow space-y-4">
          <NavLinks mobile />
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const baseClass =
    "relative group text-black hover:text-lime-600 transition duration-300 ease-in-out block";
  const underlineClass =
    "absolute left-0 -bottom-0.5 w-0 h-0.5 bg-lime-500 transition-all duration-500 ease-in-out group-hover:w-full";

  return (
    <div
      className={`${
        mobile
          ? "flex flex-col items-start space-y-4"
          : "flex items-center space-x-6"
      }`}
    >
      <a href="#Hero" className={baseClass}>
        <span className="block">Home</span>
        <span className={underlineClass}></span>
      </a>

      <a href="#Hero" className={baseClass}>
        <span className="block">About Me</span>
        <span className={underlineClass}></span>
      </a>

      {/* Dropdown Portofolio */}
      {mobile ? (
        <a href="#Logo" className={baseClass}>
          <span className="block">Portofolio</span>
          <span className={underlineClass}></span>
        </a>
      ) : (
        <div className="relative group">
          <button className={`${baseClass} flex items-center`}>
            <span className="block">Portofolio</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <span className={underlineClass}></span>
          </button>

          <div className="absolute left-0 mt-2 w-44 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 scale-95 group-hover:scale-100 transition-all duration-200 z-10">
            <a
              href="#Logo"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D8E979]"
            >
              Logo
            </a>
            <a
              href="#SosialMedia"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D8E979]"
            >
              Sosial Media
            </a>
            <a
              href="#UiUx"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D8E979]"
            >
              UI UX
            </a>
          </div>
        </div>
      )}

      <a href="#Awards" className={baseClass}>
        <span className="block">Awards</span>
        <span className={underlineClass}></span>
      </a>

      <a
        href="/assets/img/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#D8E979] hover:bg-lime-400 text-[#243A07] font-semibold px-4 py-2 rounded-md transition duration-300 block"
      >
        View CV
      </a>
    </div>
  );
};

export default Navbar;
