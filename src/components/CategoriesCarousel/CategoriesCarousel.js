import React from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import "./CategoriesCarousel.css";

import categorias from "../../mocks/es-mx/product-categories.json";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3001 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

export default function CategoriesCarousel() {
  //const [categorias, setCategorias] = useState(null);

  /*const getData = () => {
    fetch(`../../mocks/es-mx/product-categories.json`)
      .then((response) => {
        console.log("Response: ", response);
        return response.json();
      })
      .then((data) => {
        console.log("data: ", data);
        setCategorias(data);
      })
      .catch((error) => {
        alert("Can't connect to backend try latter: ", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);*/

  return (
    <div className="section-categories-carousel-home">
      <div
        id="section-categories-carousel-home__container"
        className="section-categories-carousel-home__container"
      >
        <h2 className="categories-title">Nuestras Categorias</h2>
        <span className="categories-subtitle">Visita nuestras categorias</span>
        <br />
        <br />
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="transform 400ms ease-in-out 0s"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {categorias != null
            ? categorias.results.map((categoria) => (
                <div className="first-categories">
                  <Card
                    className="card-categories"
                    cover={
                      <img
                        style={{ borderRadius: "10px" }}
                        alt={categoria.data.main_image.alt}
                        src={categoria.data.main_image.url}
                      />
                    }
                  >
                    <Meta className="space-meta" title={categoria.data.name} />
                  </Card>
                </div>
              ))
            : false}
        </Carousel>
      </div>
    </div>
  );
}
