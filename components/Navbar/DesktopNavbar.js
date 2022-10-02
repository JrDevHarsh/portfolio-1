import Link from "next/link";
import { useState } from "react";

const DesktopNavbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="relative h-full lg:mr-16 hidden md:flex items-center justify-end flex-1">
      <div className="relative h-full inline-flex items-center flex-row">
        {links.map((link) => (
          <Link key={link} href={"#" + link}>
            <a
              onClick={() => setActiveLink(link)}
              className={`relative h-full min-w-[7.5rem] px-4 flex items-center justify-center bg-white ${
                activeLink === link
                  ? "text-dark_blue hover:text-[#174ea6] active:text-[#174ea6] hover:bg-[#1a73e80a] active:bg-[#1a73e81a] -mb-0.5 border-b-2 border-solid border-b-dark_blue"
                  : "hover:bg-[#2021240a] active:bg-[#2021241a] text-dark_gray hover:text-[#202124] active:text-[#202124]"
              } font-medium tracking-wide overflow-hidden`}
            >
              {link}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNavbar;
