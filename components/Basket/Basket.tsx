import React from "react";
import BasketCard from "../BasketCard/BasketCard";
import Image from "next/image";
import { useAppSelector } from "@/hooks/redux";

const Basket = () => {
  const { basket } = useAppSelector((state) => state.basketReducer);

  const initialValue = 0;
  const sumWithInitial = basket.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialValue
  );

  return (
    <aside className="float-left w-[300px] mt-[122px]  pt-6 pl-4 pr-4 bg-[#FFF]">
      <div className="flex justify-between items-center">
        <h2 className="text-black text-2xl font-semibold leading-normal NunitoFont">
          Корзина
        </h2>
        <div className="w-10 h-5 bg-zinc-100 rounded-md text-center pt-[2px] text-black text-xs font-normal NunitoFont">
          {basket.length}
        </div>
      </div>

      <div className="pt-3 h-[380px] w-full overflow-y-scroll">
        {basket.length <= 0 ? (
          <h4 className="text-black text-base font-normal leading-tight NunitoFont">
            Тут пока пусто :(
          </h4>
        ) : (
          basket.map((product) => {
            return <BasketCard key={product.id} basket={product} />;
          })
        )}
      </div>
      <div className="w-full h-5 flex justify-between mt-8">
        <div className="text-black text-base font-normal leading-tight NunitoFont">
          Итого
        </div>
        <div className="text-right text-black text-base font-normal leading-tight NunitoFont">
          {sumWithInitial}₽
        </div>
      </div>
      <button className="w-full mt-6 h-10 px-8 py-2.5 rounded-xl justify-center items-center gap-2.5 inline-flex text-white text-base font-normal NunitoFont leading-none bg-orange-500">
        Оформить заказ
      </button>
      {sumWithInitial <= 599 ? (
        ""
      ) : (
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
      )}
    </aside>
  );
};

export default Basket;
