import React, { useState } from "react";
import { Layout, Menu } from "antd";
import ProductsCardHome from "../ProductsHome/ProductsCardHome";
import categorias from "../../mocks/es-mx/product-categories.json";

import "./SlideBarProducts.css";
import { Content } from "antd/lib/layout/layout";
import products from "../../mocks/es-mx/featured-products.json";

const { Sider } = Layout;

export default function SlideBarProducts() {
  const [listaProductos, setListaProductos] = useState(products);

  const handleClick = (id) => {
    if (id === "") {
      setListaProductos(products);
    } else {
      var oldList = Object.assign({}, products);

      var newList = [];
      for (let x = 0; x < products.results.length; x++) {
        if (products.results[x].data.category.id === id) {
          newList.push(products.results[x]);
        }
      }
      oldList.results = newList;
      setListaProductos(oldList);
    }
  };

  return (
    <>
      <Layout className="products-layout">
        <Sider width={215}>
          <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
            <Menu.Item onClick={() => handleClick("")} key={0}>
              Todo
            </Menu.Item>
            {categorias != null
              ? categorias.results.map((categoria, index) => (
                  <Menu.Item
                    key={index + 1}
                    onClick={() => handleClick(categoria.id)}
                  >
                    {categoria.data.name}
                  </Menu.Item>
                ))
              : false}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <ProductsCardHome productos={listaProductos} />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
