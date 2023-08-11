import Basket from "@/components/Basket/Basket";
import Products from "@/components/Products/Products";


export default function Home() {
  return (
    <section className="containers mb-10 h-[900px] flex gap-11">
      <Basket/>
      <Products/>
    </section>
    )
}
