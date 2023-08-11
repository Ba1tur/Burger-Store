import React from "react";

const ProductModal = () => {
  return (
    <div className="w-full h-[392px] bg-white">
      <h1 className="text-black text-[40px] font-semibold leading-10 pt-1 NunitoFont">
        Мясная бомба
      </h1>
      <div className="flex gap-4 mt-6">
        <img
          className="w-72 h-56 rounded-2xl"
          src="https://via.placeholder.com/276x220"
        />
        <div>
          <h5 className="w-80 text-black text-base font-normal pb-1 leading-tight NunitoFont">
            Супер мясное наслаждение! Большая рубленая котлета из свежего
            говяжего мяса покорит вас своей сочностью, а хрустящие листья салата
            добавят свежести.
          </h5>
          <span className="w-80 text-black text-xs font-semibold leading-none NunitoFont">
            Состав:
          </span>
          <p className="w-80 text-black text-xs font-normal leading-none NunitoFont pt-1">
            Пшеничная булочка
          </p>
          <p className="w-80 text-black text-xs font-normal leading-none NunitoFont pt-1">
            Котлета из говядины
          </p>
          <p className="w-80 text-black text-xs font-normal leading-none NunitoFont pt-1">
            Красный лук
          </p>
          <p className="w-80 text-black text-xs font-normal leading-none NunitoFont pt-1">
            Листья салата
          </p>
          <p className="w-80 text-black text-xs font-normal leading-none NunitoFont pt-1">
            Соус горчичный
          </p>
          <p className="w-80 text-black text-xs font-normal leading-none NunitoFont pt-1">
            520г, ккал 430
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-4">
          <button className="w-[276px]  h-10 px-8  bg-orange-500 rounded-xl justify-center items-center gap-2.5 inline-flex text-white text-base font-normal NunitoFont leading-none">
            Добавить
          </button>
          <div className="w-20 h-10 bg-zinc-100 rounded-xl flex justify-center items-center gap-4">
            <button className="text-black text-base font-normal NunitoFont">
              -
            </button>
            <span className="text-black text-base font-normal NunitoFont">
              1
            </span>
            <button className="text-black text-base font-normal NunitoFont">
              +
            </button>
          </div>
        </div>

        <p className="text-black text-2xl font-semibold leading-loose NunitoFont">
          689₽
        </p>
      </div>
    </div>
  );
};

export default ProductModal;
