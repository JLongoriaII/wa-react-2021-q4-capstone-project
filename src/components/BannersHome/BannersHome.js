import React from "react";
import { Carousel } from "antd";

import banners from "../../mocks/es-mx/featured-banners.json";
import "./BannersHome.css";

export default function BannersHome() {
  return (
    <>
      <Carousel autoplay className="page-banner-home">
        {banners != null
          ? banners.results.map((banner) => (
              <div key={banner.id}>
                <img
                  style={{
                    borderRadius: "10px",
                    maxHeight: banner.data.main_image.dimensions.height,
                    maxWidth: banner.data.main_image.dimensions.width,
                  }}
                  alt={banner.data.main_image.alt}
                  src={banner.data.main_image.url}
                />
              </div>
            ))
          : false}
      </Carousel>
    </>
  );
}
