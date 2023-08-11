import { IProduct } from "@/interface/IProduct";
import Image from "next/image";
import React from "react";

type Props = {
  product : IProduct;
  handleAddToCart: () => void;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}


const ProductModal = ({product , handleAddToCart , count , setCount}: Props) => {


  const items = product.composition?.split(",").map((item) => item.trim());

  return (
    <div className="w-full h-[392px] bg-white">
      <h1 className="text-black text-[40px] font-semibold leading-10 pt-1 NunitoFont">
        {product.name}
      </h1>
      <div className="flex gap-4 mt-6">
        <Image
          className="w-72 h-56 rounded-2xl"
          src={product.img}
          width={276}
          height={220}
          alt="img.jpg"
        />
        <div>
          <h5 className="w-80 text-black text-lg font-normal pb-1 leading-tight NunitoFont">
            {product.description}
          </h5>
          <span className="w-80 text-black text-sm font-semibold leading-none NunitoFont">
            Состав:
          </span>
          <div style={{ whiteSpace: "pre-line" }}>
            {items?.map((item, index) => (
              <React.Fragment key={index}>
                <p className="w-80 text-black text-sm   font-normal leading-none NunitoFont mb-[3px]">{item}</p>
              </React.Fragment>
            ))}
          </div>
          <p className="w-80 text-[#B1B1B1] text-sm  font-normal leading-none NunitoFont pt-1">
            {product.weight}г, ккал {product.kcal}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-4">
          <button onClick={() => handleAddToCart()} className="w-[276px]  h-10 px-8  bg-orange-500 rounded-xl justify-center items-center gap-2.5 inline-flex text-white text-base font-normal NunitoFont leading-none">
            Добавить
          </button>
          <div className="w-20 h-10 bg-zinc-100 rounded-xl flex justify-center items-center gap-4">
            <button onClick={() => setCount(count - 1)} className="text-black text-base font-normal NunitoFont">
              -
            </button>
            <span className="text-black text-base font-normal NunitoFont">
              {count}
            </span>
            <button onClick={() => setCount(count + 1)} className="text-black text-base font-normal NunitoFont">
              +
            </button>
          </div>
        </div>

        <p className="text-black text-2xl font-semibold leading-loose NunitoFont">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductModal;
