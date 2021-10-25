import React from "react";
import { Card, Col, Layout, Row, Tooltip } from "antd";

import "./ProductsHome.css";

import products from "../../mocks/es-mx/featured-products.json";

export default function ProductsHome() {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

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
          <Row type="flex" justify="space-around">
            {/* Para cambiar a 3 Items, cambiar el md={8} y poner solo 6 o 9 en Objects y cambiar el width a 330 */}
            {products != null
              ? products.results.map((producto, index) => (
                  <Col
                    className="col-productos"
                    md={6}
                    sm={12}
                    xs={12}
                    key={index}
                  >
                    <br />
                    <Card
                      className="card-productos"
                      cover={
                        <img
                          style={{
                            borderRadius: "10px",
                            maxWidth: "250px",
                          }}
                          className="imagenes-productos"
                          alt={producto.data.mainimage.alt}
                          src={producto.data.mainimage.url}
                        />
                      }
                    >
                      <Card.Meta
                        className="card-info-productos"
                        title={
                          <Tooltip title={producto.data.name}>
                            <h4 className="titulo-productos">
                              {producto.data.name}
                            </h4>
                          </Tooltip>
                        }
                        description={
                          <div>
                            <h4 className="precio-antes-productos">Desde:</h4>
                            <h3 className="precio-ahora-productos">
                              {formatter.format(producto.data.price)}
                            </h3>
                            <h4 className="categoria-productos">
                              Categoria: {producto.data.category.slug}
                            </h4>
                          </div>
                        }
                      />
                    </Card>
                    <br />
                  </Col>
                ))
              : false}
          </Row>
        </div>
      </Layout.Content>
    </Layout>
  );
}
