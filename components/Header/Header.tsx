import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="containers bg-[#FFAB08] h-[450px]">
		<div className="flex justify-center  pt-5">
			<Image src="/logo.svg" alt="logo.svg" width={153} height={35} />
		</div>
      <nav className="w-full flex justify-center gap-3 pt-3">
			<Image src='/burger.svg' alt="burger.svg" width={326} height={326}/>
			<div className="pt-12">
				<h1 className="text-[#FFF] text-[50px] leading-[120%] font-extrabold NunitoFont">Только самые <br /> <span className="text-[#FF5C00]">сочные бургеры!</span></h1>
				<p className="text-white NunitoFont font-semibold pt-[52px]">Бесплатная доставка от 599₽</p>
			</div>
		</nav>
    </header>
  );
};

export default Header;
