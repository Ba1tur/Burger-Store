import { navigationNavbar } from "@/constants/navbar";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="containers">
      <ul className="w-full pt-7 flex gap-6 justify-center">
        {navigationNavbar.map((item) => {
          return (
            <li
              key={item.id}
              className="w-[126px] h-10 rounded-[58px] flex items-center justify-center gap-2 bg-[#FFAB08]"
            >
              <Image
                src={item.icon}
                alt="burger_type.svg"
                width={24}
                height={24}
              />
              <h5>{item.name}</h5>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
