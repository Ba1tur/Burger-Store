import Image from 'next/image';
import React from 'react';

const Navbar = () => {
	return (
		<nav className='containers'>
			<ul className='w-full pt-7 flex gap-6 justify-center'>
				<li className='w-[126px] h-10 rounded-[58px] flex items-center justify-center gap-2 bg-[#FFAB08]'>
					<Image src='/burger_type.svg' alt='burger_type.svg' width={24} height={24} />
					<h5>Бургеры</h5>
				</li>
				<li className='w-[126px] h-10 rounded-[58px] flex items-center justify-center gap-2 bg-[#FFF]'>
					<Image src='/burger_type.svg' alt='burger_type.svg' width={24} height={24} />
					<h5>Бургеры</h5>
				</li>
				<li className='w-[126px] h-10 rounded-[58px] flex items-center justify-center gap-2 bg-[#FFF]'>
					<Image src='/burger_type.svg' alt='burger_type.svg' width={24} height={24} />
					<h5>Бургеры</h5>
				</li>
				<li className='w-[126px] h-10 rounded-[58px] flex items-center justify-center gap-2 bg-[#FFF]'>
					<Image src='/burger_type.svg' alt='burger_type.svg' width={24} height={24} />
					<h5>Бургеры</h5>
				</li>
				<li className='w-[126px] h-10 rounded-[58px] flex items-center justify-center gap-2 bg-[#FFF]'>
					<Image src='/burger_type.svg' alt='burger_type.svg' width={24} height={24} />
					<h5>Бургеры</h5>
				</li>
				<li className='w-[126px] h-10 rounded-[58px] flex items-center justify-center gap-2 bg-[#FFF]'>
					<Image src='/burger_type.svg' alt='burger_type.svg' width={24} height={24} />
					<h5>Бургеры</h5>
				</li>
				<li className='w-[126px] h-10 rounded-[58px] flex items-center justify-center gap-2 bg-[#FFF]'>
					<Image src='/burger_type.svg' alt='burger_type.svg' width={24} height={24} />
					<h5>Бургеры</h5>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;