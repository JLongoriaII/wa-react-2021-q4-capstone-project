import React from "react";
import { Button, Layout } from "antd";
import ProductsCardHome from "./ProductsCardHome";

import "./ProductsHome.css";
import products from "../../mocks/es-mx/featured-products.json";

export default function ProductsHome() {
  return (
    <Layout className="section-productos-home">
      <Layout.Content className="section-productos-home__imagen">
        <div className="section-productos-home__container">
          <div style={{ textAlign: "center" }}>
            <span className="titulo-resenias">Nuestros Productos</span>
            <br />
            <span className="subtitulo-resenias">
              Aquí podras ver algunos de nuestros productos
            </span>
          </div>
          <div>
            <ProductsCardHome productos={products} />
            <div style={{ textAlign: "center" }}>
              <Button className="boton-productos" href="/products">
                View all products
              </Button>
            </div>
          </div>
        </div>
      </Layout.Content>
    </Layout>
  );
}
