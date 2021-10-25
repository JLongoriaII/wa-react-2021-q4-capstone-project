import React from "react";
import { Layout } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  ChromeOutlined,
  WhatsAppOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

import logo from "../../assets/img/Logo-Mazzetto-Footer.jpg";
import "./FooterHome.css";

export default function FooterHome() {
  return (
    <Layout className="section-footer-home">
      <Layout.Footer className="section-footer-home__container">
        <div>
          <a href="/home">
            <img alt="Mazzetto GDL" src={logo} width="130" />
          </a>
        </div>
        <br />
        <div className="iconos-div">
          <a href="https://www.facebook.com/mazzettogdl" target="_new">
            <FacebookOutlined className="icono-footer" />
          </a>
          <a href="https://www.instagram.com/mazzettogdl" target="_new">
            <InstagramOutlined className="icono-footer" />
          </a>
          <a href="/home" target="_new">
            <ChromeOutlined className="icono-footer" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5213314674331"
            target="_new"
          >
            <WhatsAppOutlined className="icono-footer" />
          </a>
          <a href="tel:3314674331">
            <PhoneOutlined className="icono-footer" />
          </a>
          <a href="mailto:contacto@mazzetto.com.mx">
            <MailOutlined className="icono-footer" />
          </a>
        </div>
        <br />
        <div className="created-by">
          <span className="span-created-by">
            © {new Date().getFullYear()}, Created by &nbsp;
            <a href="https://www.linkedin.com/in/joselongoriaa/" target="_new">
              <LinkedinOutlined className="icono-linkedin" />
            </a>
            &nbsp; José Longoria
          </span>
        </div>
      </Layout.Footer>
    </Layout>
  );
}
