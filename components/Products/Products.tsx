import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
	return (
		<main className='mt-14'>
			<h1 className="text-black text-4xl font-semibold leading-10 NunitoFont">Бургеры</h1>
			<div className='mt-6 grid grid-cols-3 gap-8'>
				<ProductCard/>
				<ProductCard/>
				<ProductCard/>
			</div>
		</main>
	);
};

export default Products;