import { navigationNavbar } from "@/constants/navbar";
import { Context, SortProductContextType } from "@/hooks/context";
import { productAPI } from "@/services/ProductService";
import Image from "next/image";
import React, { useContext } from "react";

const Navbar = () => {
  const { sortProduct, setSortProduct } = useContext(
    Context
  ) as SortProductContextType;

  const {} = productAPI.useFetchProductByIdQuery(sortProduct);

  const handleItemClick = (newValue: string | undefined) => {
    if (typeof setSortProduct === "function") {
      setSortProduct(newValue);
    }
  };


  return (
    <nav className="w-max-[1420px] flex justify-center">
      <ul className="w-[790px] overflow-x-scroll pt-7 flex gap-7 justify-center">
        {navigationNavbar.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.value)}
              className={`w-[146px  h-10 rounded-[58px] flex items-center transition-colors justify-center gap-3  ${
                item.value === sortProduct ? `bg-[#FFAB08]` : `bg-[#FFF]`
              } `}
            >
              <Image
                src={item.icon}
                alt="burger_type.svg"
                width={24}
                height={24}
              />
              <h5 className="whitespace-nowrap">{item.name}</h5>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
