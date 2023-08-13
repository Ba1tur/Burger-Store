import { useAppDispatch } from "@/hooks/redux";
import { IProduct } from "@/interface/IProduct";
import { BasketSlice } from "@/redux/reducers/BasketSlice";
import Image from "next/image";
import React from "react";

type Props = {
  basket: IProduct;
};

const BasketCard = ({ basket }: Props) => {
  const { DeleteProduct, Increment, Decrement } = BasketSlice.actions;

  const dispatch = useAppDispatch();

  return (
    <div className="w-full h-[89px] flex justify-between relative  items-center">
      <Image
        src={basket.img}
        alt="burger_cheese.jpg"
        className="rounded-lg h-[60px]"
        width={64}
        height={60}
      />
      <div className="ml-[7px]">
        <h5 className="text-black text-xs font-normal NunitoFont">
          {basket.name}
        </h5>
        <span className="text-zinc-400 text-xs font-normal NunitoFont">
          {basket.weight}г
        </span>
        <p className="text-black text-xs font-normal NunitoFont">
          {basket.price}₽
        </p>
      </div>
      <button
        type="button"
        onClick={() => dispatch(DeleteProduct(basket.id))}
        className="bg-none rounded-md absolute right-0 top-1 p-2 inline-flex items-center justify-center text-black"
      >
        <span className="sr-only">Close menu</span>
        <svg
          width={15}
          height={15}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="w-20 h-10 mt-5 bg-zinc-100 rounded-xl flex justify-center items-center gap-4">
        <button
          onClick={() => dispatch(Decrement(basket.id))}
          className="text-black text-base font-normal NunitoFont"
        >
          -
        </button>
        <span className="text-black text-base font-normal NunitoFont">
          {basket.count}
        </span>
        <button
          onClick={() => dispatch(Increment(basket.id))}
          className="text-black text-base font-normal NunitoFont"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
