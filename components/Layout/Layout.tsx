import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
