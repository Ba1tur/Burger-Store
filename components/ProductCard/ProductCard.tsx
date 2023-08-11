import { Modal } from "antd";
import React , {useState} from "react";
import ProductModal from "../ProductModal/ProductModal";

const ProductCard = () => {

	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
	  setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	 };
  
	 const handleCancel = () => {
		setIsModalOpen(false);
	 };

  return (
	<>
	 <div className="w-72 h-[405px] p-3 bg-white rounded-2xl cursor-pointer" onClick={showModal}>
      <img
        className="w-72 h-56   rounded-xl"
        src="https://via.placeholder.com/276x220"
      />
      <h2 className="  pt-4 text-black text-2xl font-semibold leading-normal NunitoFont">
        689₽
      </h2>
      <p className="  pt-2 text-black text-base font-normal leading-tight NunitoFont">
        Мясная бомба
      </p>
      <span className=" pt-7  text-zinc-400 text-base font-semibold leading-tight NunitoFont">
        520г
      </span>
      <button className="w-full h-10 px-24 py-2.5   mt-2  bg-zinc-100 rounded-xl   text-black text-base font-normal leading-none NunitoFont">
        Добавить
      </button>
    </div>
	 	<Modal  width={684} open={isModalOpen} centered footer={false} onCancel={handleCancel}>
        <ProductModal/>
      </Modal>
	</>
   
  );
};

export default ProductCard;
