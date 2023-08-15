import { Checkbox, Input, Radio } from "antd";
import Image from "next/image";
import type { RadioChangeEvent } from "antd";
import React, { useState } from "react";

const OrderModal = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="w-full h-[422px]   overflow-hidden rounded-3xl flex gap-8">
      <div className="bg-[#FFAB08] w-[342px] flex justify-center items-center">
        <Image src="/donut.svg" alt="donut.svg" width={198} height={258} />
      </div>
      <div className="w-[342px] pr-6 pt-6">
        <h2 className="text-black text-2xl font-semibold leading-normal NunitoFont">
          Доставка
        </h2>
        <Input
          className="rounded-xl h-10 mt-4 border border-zinc-100"
          placeholder="Ваше имя"
        />
        <Input
          className="rounded-xl h-10 mt-2 border border-zinc-100"
          placeholder="Телефон"
        />
        <Radio.Group onChange={onChange} className="flex flex-col gap-1 mt-4" value={value}>
          <Radio value={1}>Самовывоз</Radio>
          <Radio value={2}>Доставка</Radio>
        </Radio.Group>
		  {value === 2 ? (<>
		  <Input
          className="rounded-xl mt-4 h-10 border border-zinc-100"
          placeholder="Улица,дом, квартира"
        />
        <div className="flex gap-2 mt-2">
          <Input
            className="rounded-xl h-10 border border-zinc-100"
            placeholder="Этаж"
          />
          <Input
            className="rounded-xl h-10 border border-zinc-100"
            placeholder="Домофон"
          />
        </div>
		  </>) : ""}
        <button className="w-full mt-6 h-10 px-8 py-2.5 rounded-xl justify-center items-center gap-2.5 inline-flex text-white text-base font-normal NunitoFont leading-none bg-orange-500">
          Оформить
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
