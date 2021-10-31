import { Card, Col, Result, Row, Tooltip } from "antd";
import React from "react";

import "./ProductsHome.css";

export default function ProductsCardHome(props) {
  const { productos } = props;

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <>
      {productos != null &&
      productos.length !== 0 &&
      productos.results?.length !== 0 ? (
        <div>
          <Row type="flex" justify="space-around">
            {productos.results.map((producto, index) => (
              <Col className="col-productos" md={6} sm={12} xs={12} key={index}>
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
            ))}
          </Row>
        </div>
      ) : (
        <Result title="Sin productos" />
      )}
    </>
  );
}
