import { useState } from "react";
import { close, logo, menu, logoSeguridad } from "../../assets";
import { navLinks } from "../../constants";
import ButtonAccess from "../ButtonAccess";

const NavAlarm = () => {
  const [active, setActive] = useState("Alarmas");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-5 justify-between items-center navbar  ">
      <img
        src={logo}
        alt="SubRed Ingeniería"
        className="w-[180px] h-[95px]"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
   
          {navLinks.map((nav, index) => ( 
            <li
              key={nav.id}
              className={`font-poppins font-normal text-dimWhite hover:text-yell cursor-pointer text-[16px] 
                          ${
                active === nav.title ? "text-white text-[25px] " : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />


   {/* menu hamburger */}
      
        <div
          className={`${!toggle ? "hidden" : "flex"}
                      p-6 bg-black-gradient absolute 
                      top-20 right-0 mx-4 my-3 min-w-[150px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium 
                            text-dimWhite hover:text-yell
                            cursor-pointer text-[16px] ${
                  active === nav.title ? "text-yell text-[20px]" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ButtonAccess styles={`ml-10`} />
    </nav>
  );
};

export default NavAlarm;
