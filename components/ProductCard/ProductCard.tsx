import { Modal } from "antd";
import React, { useState } from "react";
import ProductModal from "../ProductModal/ProductModal";
import { IProduct } from "@/interface/IProduct";
import Image from "next/image";
import { BasketSlice } from "@/redux/reducers/BasketSlice";
import { useAppDispatch } from "@/hooks/redux";

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count , setCount] = useState<number>(1)

  const dispatch = useAppDispatch()

  const showModal = () => {
    setIsModalOpen(true);
  }

  const {AddProduct} = BasketSlice.actions

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      count: count,
      id: Date.now()
    };
  
    dispatch(AddProduct(cartItem))
    setCount(1)
   };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="w-72 h-[405px] p-3 bg-white rounded-2xl">
        <Image
          className="w-72 h-56 cursor-pointer rounded-xl"
          src={product.img}
          alt="product.img"
          onClick={showModal}
          width={276}
          height={220}
        />
        <h2 className="  pt-4 text-black text-2xl font-semibold leading-normal NunitoFont">
          {product.price}₽
        </h2>
        <p className="  pt-2 text-black text-base font-normal leading-tight NunitoFont">
          {product.name}
        </p>
        <span className=" pt-7  text-zinc-400 text-base font-semibold leading-tight NunitoFont">
          {product.weight}г
        </span>
        <button onClick={() => handleAddToCart()} className="w-full relative z-30 z-10 h-10 px-24 py-2.5   mt-2  bg-zinc-100 rounded-xl   text-black text-base font-normal leading-none NunitoFont">
          Добавить
        </button>
      </div>
      <Modal
        width={684}
        open={isModalOpen}
        centered
        footer={false}
        onCancel={handleCancel}
      >
        <ProductModal product={product} handleAddToCart={handleAddToCart} count={count} setCount={setCount} key={product.id} />
      </Modal>
    </>
  );
};

export default ProductCard;
