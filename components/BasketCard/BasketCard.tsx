import Image from 'next/image';
import React from 'react';

const BasketCard = () => {
	return (
		<div className='w-full h-[84px] flex justify-between  items-center'>
			<Image src='/burger_cheese.jpg' alt='burger_cheese.jpg' className='rounded-lg h-[60px]'  width={64} height={60}/>
			<div className='ml-[-18px]'>
				<h5 className='text-black text-xs font-normal NunitoFont'>Супер сырный</h5>
				<span className="text-zinc-400 text-xs font-normal NunitoFont">512г</span>	
				<p  className="text-black text-xs font-normal NunitoFont">550₽</p>
			</div>
			<div  className="w-20 h-10 bg-zinc-100 rounded-xl flex justify-center items-center gap-4">
				<button className="text-black text-base font-normal NunitoFont">-</button>
				<span className="text-black text-base font-normal NunitoFont">1</span>
				<button className="text-black text-base font-normal NunitoFont">+</button>
			</div>
		</div>
	);
};

export default BasketCard;