import React from "react";
import { morphicIcon } from "@/app/config/config";

const navigator = [
  {
    title: "Corp",
    key: "corp",
    path: "/",
  },
  {
    title: "About",
    key: "about",
    path: "/",
  },
  {
    title: "Blog",
    key: "blog",
    path: "/",
  },
  {
    title: "Manifesto",
    key: "manifesto",
    path: "/",
  },
  {
    title: "Pricing",
    key: "pricing",
    path: "/",
  },
];

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-[60px] relative top-[6px]">
      <div className="flex items-center justify-center w-full max-w-[1280px] px-4 h-[60px]">
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto md:h-[38px] gap-4 md:gap-0">
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            {morphicIcon()}
          </div>

          <nav className="flex items-center justify-center w-full md:w-auto">
            <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-11">
              {navigator.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.path}
                    className="text-[#737373] transition-all duration-200 delay-75 hover:text-white font-semibold text-sm md:text-base"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-center md:justify-end w-full md:w-auto">
            <button className="flex items-center justify-center p-2 w-[81px] h-[37px] rounded-md bg-[#0075FF] text-[12.69px] transition-all duration-200 delay-75 hover:bg-[#0061d0] font-semibold cursor-pointer">
              Join Beta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
