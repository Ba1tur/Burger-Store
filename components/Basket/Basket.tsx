import React, { useState, useEffect } from "react";
import BasketCard from "../BasketCard/BasketCard";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import CountUp from "react-countup";
import { Modal } from "antd";
import { BasketSlice } from "@/redux/reducers/BasketSlice";
import OrderModal from "../OrderModal/OrderModal";

const Basket = () => {
  const { basket } = useAppSelector((state) => state.basketReducer);
  const [prevTotal, setPrevTotal] = useState(0);
  const [currentTotal, setCurrentTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();

  const { ClearBasket } = BasketSlice.actions;

  useEffect(() => {
    const initialValue = 0;
    const sumWithInitial = basket.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.count,
      initialValue
    );

    setPrevTotal(currentTotal);
    setCurrentTotal(sumWithInitial);
  }, [basket]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const statusBtn = basket.length <= 0 ? true : false;

  return (
    <>
      <aside className="float-left w-[300px]  mt-[122px]  pt-6 pl-4 pr-4 bg-[#FFF]">
        <div className="flex justify-between items-center">
          <h2 className="text-black text-2xl font-semibold leading-normal NunitoFont">
            Корзина
          </h2>
          <div className="w-10 h-5 bg-zinc-100 rounded-md text-center pt-[2px] text-black text-xs font-normal NunitoFont">
            {basket.length}
          </div>
        </div>
        <button
          onClick={() => dispatch(ClearBasket())}
          className="mt-1 rounded-xl bg-zinc-100 h-9 text-[12px] text-black  font-medium p-2 leading-normal NunitoFont"
        >
          Очистить корзину
        </button>
        <div className="pt-3 h-[380px]  w-full overflow-y-scroll overflow-hidden">
          {basket.length <= 0 ? (
            <h4 className="text-black text-base font-normal leading-tight NunitoFont">
              Тут пока пусто :(
            </h4>
          ) : (
            <TransitionGroup>
              {basket.map((product) => {
                return (
                  <CSSTransition
                    key={product.id}
                    mountOnEnter
                    unmountOnExit
                    timeout={500}
                    classNames="item"
                  >
                    <BasketCard key={product.id} basket={product} />
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          )}
        </div>
        <div className="w-full h-5 flex justify-between mt-8">
          <div className="text-black text-base font-normal leading-tight NunitoFont">
            Итого
          </div>
          <div className="text-right text-black text-base font-normal leading-tight NunitoFont">
            <CountUp
              start={prevTotal}
              end={currentTotal}
              duration={1}
              separator=" "
              decimal="2"
            />
            ₽
          </div>
        </div>
        <button
          onClick={() => showModal()}
          disabled={statusBtn}
          className="w-full mt-6 h-10 px-8 py-2.5 rounded-xl justify-center items-center gap-2.5 inline-flex text-white text-base font-normal NunitoFont leading-none bg-orange-500"
        >
          Оформить заказ
        </button>
        <Modal
          width={684}
          open={isModalOpen}
          centered
          footer={false}
          onCancel={handleCancel}
        >
          <OrderModal />
        </Modal>
        {currentTotal <= 599 ? (
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
    </>
  );
};

export default Basket;
