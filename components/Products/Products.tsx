import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productAPI } from "@/services/ProductService";
import { Context } from "@/hooks/context";
import Loader from "../Loader/Loader";

const Products = () => {
  const sortedProducts = useContext(Context);

  const {
    data: products,
    isLoading,
    error,
  } = productAPI.useFetchProductByIdQuery(sortedProducts?.sortProduct);

  return (
    <main className="mt-14 relative">
      {error && (
        <h1 className="text-red-600 text-center text-[40px] NunitoFont  font-semibold">
          Произошло ошибка с сервером!
        </h1>
      )}
      {isLoading && <Loader></Loader>}
      <div className="mt-6  grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-8 xl:gap-x-10 lg:gap-x-[200px]">
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
};

export default Products;
