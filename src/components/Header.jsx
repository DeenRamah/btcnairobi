import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import {brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import logo from '../assets/hero/contrast.png';
import { useState } from "react";









const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isColorChanged, setIsColorChanged] = useState(false);

  const changeBackgroundColor = () => {
    if (isColorChanged) {
      document.body.style.backgroundColor = '';
    } else {
      document.body.style.backgroundColor = '#f7931a';
    }
    setIsColorChanged(!isColorChanged);
  };

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8 " href="https://web3-five-wine.vercel.app">
          <img
          src={brainwave}
          width={100}
          height={25}
          alt="Brainwave"
          className="rounded-full"
          
          />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>
  
        <a
        href="https://web3-five-wine.vercel.app"
        className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
      >
        <button>
        join Us
        </button>
      </a>
      <Button className=" hidden lg:flex left:-20" href="https://geyser.fund/project/btcnairobi?mtm_campaign=project-share&mtm_keyword=btcnairobi&mtm_source=user&mtm_medium=geyser&mtm_content=contribution-summary">
        Support Us
      </Button>


      <a
        className=" mb-4"
        >
        <img src={logo}
        width={60}
        height={60}
        alt="Logo"
        className="fixed top-1 right-4 md:top-4 md:right-2 lg:top-4 lg:right-4 px-4 py-2 font-bold text-white rounded-full sm:-mt-5 md:-mt-5"
        onClick={changeBackgroundColor}
        />

        </a>


        
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
