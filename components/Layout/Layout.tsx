import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Basket from "../Basket/Basket";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="containers">
      <Header />
      <Navbar />
      <Basket />
      <div className="float-right">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
