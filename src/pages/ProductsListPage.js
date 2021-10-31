import React from "react";
import FooterHome from "../components/FooterHome/FooterHome";
import NavbarHome from "../components/NavbarHome/NavbarHome";
import SlideBarProducts from "../components/SlideBarProductsList/SlideBarProducts";

export default function ProductsListPage() {
  return (
    <>
      <NavbarHome />
      <SlideBarProducts />
      <FooterHome />
    </>
  );
}
