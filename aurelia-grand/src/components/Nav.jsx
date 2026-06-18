import "../App.css";
import { useState } from "react";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full text-blue-200">
      <div className="flex items-center h-[9vh] glass-bg font-text px-8 justify-between">
        <div className="w-1/2">
          <h3 className="tracking-widest text-(--color-ivory) text-xl">
            Aureila
          </h3>
        </div>
        <div>
          <button
            onClick={toggleMenu}
            className="md:hidden relative cursor-pointer"
          >
            <img
              width="24"
              height="24"
              src={
                menuOpen
                  ? "https://img.icons8.com/forma-thin-sharp/24/FFFFFF/xbox-x.png"
                  : "https://img.icons8.com/forma-thin-sharp/24/FFFFFF/xbox-menu.png"
              }
              alt={menuOpen ? "close-menu" : "xbox-menu"}
            />
          </button>
          <div
            className={`bg-(--glass-bg) absolute top-full mt-1 right-[10px] bottom-[-140px] w-[100px] md:hidden text-center flex flex-col gap-3 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <a href="#suites">Suites</a>
            <a href="#dining">Dining</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <div className="hidden md:flex w-1/2 justify-evenly border-b border-transparent">
          <a href="#suites" className="hero-nav-hover">
            Suites
          </a>
          <a href="#dining" className="hero-nav-hover">
            Dining
          </a>
          <a href="#events" className="hero-nav-hover">
            Events
          </a>
          <a href="#gallery" className="hero-nav-hover">
            Gallery
          </a>
          <a href="#contact" className="hero-nav-hover">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
