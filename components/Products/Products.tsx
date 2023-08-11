import React , {useContext} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { productAPI } from '@/services/ProductService';
import { Context } from '@/hooks/context';
import Loader from '../Loader/Loader';

const Products = () => {

	const sortedProducts = useContext(Context)
	
	const {data: products  , isLoading , error , } = productAPI.useFetchProductByIdQuery(sortedProducts?.sortProduct)


	return (
		<main className='mt-14 relative'>
			{/* <h1 className="text-black text-4xl font-semibold leading-10 NunitoFont">Бургеры</h1> */}
			{error && <h1 className='text-red-600 text-center text-[40px] NunitoFont  font-semibold'>Произошло ошибка с сервером!</h1>}
			{isLoading && <Loader></Loader>} 
			<div className='mt-6 grid grid-cols-3 gap-8'>
				{products?.map((product) => {
					return (
						<ProductCard key={product.id} product={product}/>
					)
				})}
			</div>
		</main>
	);
};

export default Products;