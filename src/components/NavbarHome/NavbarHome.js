import React, { useState } from "react";
import { Layout, Menu, Row, Col, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import logo from "../../assets/img/Logo-Mazzetto-Navbar.png";

import "./NavbarHome.css";
import Search from "antd/lib/input/Search";

export default function NavbarHome(props) {
  const [cantidad, setCantidad] = useState(1);

  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <Layout className="navbar-home">
      <Layout.Header className="navbar-home-header">
        <Row>
          <Col
            className="navbar-home-col-title"
            span={8}
            xs={23}
            sm={12}
            md={10}
            lg={8}
          >
            <div className="col-title-div-home">
              <a className="col-title-a-home" href="/home">
                <img alt="Mazzetto GDL" src={logo} height="47" />
              </a>
            </div>
          </Col>
          <Col span={16} xs={1} sm={12} md={14} lg={16}>
            <Menu theme="light" mode="horizontal">
              <Menu.Item key="1">
                <Search placeholder="Buscar" onSearch={onSearch} enterButton />
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={
                  <Badge count={cantidad}>
                    <ShoppingCartOutlined style={{ fontSize: "25px" }} />
                  </Badge>
                }
              ></Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
    </Layout>
  );
}
