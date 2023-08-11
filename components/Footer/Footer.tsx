import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pr-8 mt-[100px] h-60 pt-[46px] px-6 bg-white">
      <div className="containers flex justify-between">
        <div>
          <Image
            src="/logoFooter.svg"
            alt="logoFooter.svg"
            width={305}
            height={68}
          />
          <div className="w-32 h-9 flex-col justify-start items-start gap-1 pt-[54px] inline-flex">
            <p className="text-black text-xs font-normal NunitoFont">
              © YouMeal, 2022
            </p>
            <p className="text-black text-xs font-normal NunitoFont">
              Design: Anastasia Ilina
            </p>
          </div>
        </div>
        <div className="flex gap-[126px]">
          <div className="w-52 h-16 flex-col justify-start items-start gap-6 inline-flex">
            <h2 className="text-black text-2xl font-normal leading-normal NunitoFont">
              Номер для заказа
            </h2>
            <div className="justify-start items-center gap-1 inline-flex">
              <a
                href="#"
                className="text-black text-base font-normal leading-tight NunitoFont"
              >
                +7(930)833-38-11
              </a>
            </div>
          </div>
          <div className="w-40 h-20 flex-col justify-start items-start gap-5 inline-flex">
            <p className="text-black text-2xl font-normal whitespace-nowrap leading-normal NunitoFont">
              Мы в соцсетях
            </p>
            <div className="justify-center items-center gap-4 inline-flex">
              <Image src="/vk.svg" alt="vk.svg" width={36} height={36} />
              <Image
                src="/telegram.svg"
                alt="telegram.svg"
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
