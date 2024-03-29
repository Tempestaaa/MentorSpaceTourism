import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { useState } from "react";

type navLinksType = {
  link: string;
  name: string;
};

const navLinks: navLinksType[] = [
  {
    link: "/",
    name: "home",
  },
  {
    link: "/destination",
    name: "destination",
  },
  {
    link: "/crew",
    name: "crew",
  },
  {
    link: "/technology",
    name: "technology",
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isSelected = (link: string) => {
    const resovlePath = useResolvedPath(link);
    const active = useMatch({ path: resovlePath.pathname, end: true });
    return active?.pathname === link;
  };

  return (
    <>
      <nav className="w-svw flex items-center justify-between px-6 lg:pt-8 md:pr-0 fixed">
        <div className="rounded-full">
          <img src={logo} alt="logo" />
        </div>

        <menu
          className={`w-3/4 h-svh md:h-auto pt-16 md:py-0 pl-4 md:pl-16 lg:pl-24 xl:pl-36 absolute top-0 ${
            isOpen ? "right-0" : "-right-3/4"
          } bg-white/20 backdrop-blur-lg flex flex-col md:flex-row gap-4 md:gap-6 xl:gap-10 transition-all z-10 md:static`}
        >
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className={`uppercase font-barlow md:text-lg text-white lg:text-xl xl:text-2xl cursor-pointer border-r-4 md:border-r-0 md:border-b-4 md:py-8 ${
                isSelected(item.link)
                  ? "border-white"
                  : "border-transparent hover:border-sub"
              }`}
            >
              <span className="mr-2 font-bold md:hidden xl:inline-block">
                0{i}
              </span>
              {item.name}
            </Link>
          ))}
        </menu>
        <div
          className="z-20 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img src={!isOpen ? menu : close} alt="menu" />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
