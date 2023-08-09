import React from "react";
import BasketCard from "../BasketCard/BasketCard";
import Image from "next/image";

const Basket = () => {
  return (
    <aside className="float-left w-[300px] mt-[122px]  pt-6 pl-4 pr-4 bg-[#FFF]">
      <div className="flex justify-between items-center">
        <h2 className="text-black text-2xl font-semibold leading-normal NunitoFont">
          Корзина
        </h2>
        <div className="w-10 h-5 bg-zinc-100 rounded-md text-center pt-[2px] text-black text-xs font-normal NunitoFont">
          4
        </div>
      </div>
      <div className="pt-3">
        <BasketCard />
      </div>
      <div className="w-full h-5 flex justify-between mt-8">
        <div className="text-black text-base font-normal leading-tight NunitoFont">
          Итого
        </div>
        <div className="text-right text-black text-base font-normal leading-tight NunitoFont">
          1279₽
        </div>
      </div>
      <button className="w-full mt-6 h-10 px-8 py-2.5 bg-orange-500 rounded-xl justify-center items-center gap-2.5 inline-flex text-white text-base font-normal NunitoFont leading-none">
        Оформить заказ
      </button>
      <div className="w-full mt-4 h-6 justify-start items-center gap-2 inline-flex">
        <div className="w-6 h-6 relative">
          <Image
            className="w-6 h-6 left-0 top-0 absolute"
            src="/deleviry.svg"
            alt="deleviry.svg"
				width={24}
				height={24}
          />
        </div>
        <div className="text-black text-xs font-normal NunitoFont">
          Бесплатная доставка
        </div>
      </div>
    </aside>
  );
};

export default Basket;
