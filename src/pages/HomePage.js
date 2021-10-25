import React from "react";

import NavbarHome from "../components/NavbarHome/NavbarHome";
import FooterHome from "../components/FooterHome/FooterHome";
import CategoriesCarousel from "../components/CategoriesCarousel/CategoriesCarousel";
import ProductsHome from "../components/ProductsHome/ProductsHome";
import BannersHome from "../components/BannersHome/BannersHome";

export default function HomePage() {
  return (
    <>
      <NavbarHome />
      <BannersHome />
      <CategoriesCarousel />
      <ProductsHome />
      <FooterHome />
    </>
  );
}
