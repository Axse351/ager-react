import React, { useState } from "react";
import { gambar1, gambar2, gambar3 } from "../assets";
import { useNavigate } from "react-router-dom";

import "./ProductPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const ProductPage = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: "P001",
      name: "AGER Box 1Kg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla libero a turpis viverra vehicula. Sed ac pellentesque ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan convallis. Aenean ornare commodo purus sed semper. Sed fermentum et mi ac condimentum",
      imgLink: gambar1,
    },
    {
      id: "P002",
      name: "Product 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla libero a turpis viverra vehicula. Sed ac pellentesque ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan convallis. Aenean ornare commodo purus sed semper. Sed fermentum et mi ac condimentum",
      imgLink: gambar2,
    },
    {
      id: "P003",
      name: "Product 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla libero a turpis viverra vehicula. Sed ac pellentesque ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan convallis. Aenean ornare commodo purus sed semper. Sed fermentum et mi ac condimentum",
      imgLink: gambar3,
    },
    {
      id: "P004",
      name: "Product 4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla libero a turpis viverra vehicula. Sed ac pellentesque ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan convallis. Aenean ornare commodo purus sed semper. Sed fermentum et mi ac condimentum",
      imgLink: gambar3,
    },
    {
      id: "P005",
      name: "Product 5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla libero a turpis viverra vehicula. Sed ac pellentesque ligula, ac pharetra justo. Donec ut erat vitae tortor accumsan convallis. Aenean ornare commodo purus sed semper. Sed fermentum et mi ac condimentum",
      imgLink: gambar3,
    },
  ];

  const goToDetail = (product) => {
    navigate(`/products/${product.id}`, {
      state: product,
    });
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const productGoodSides = [
    "Long Lasting Burning",
    "Odorless",
    "Low Ash",
    "Smokeless",
  ];

  return (
    
    <div className="product-page">
      <Header />
      <div className="carousel-container">
        <div className="intro-text">
          <h4 className="prod-tagline">PREMIUM COCONUT CHARCOAL</h4>
          <h1 className="prod-title">{activeProduct.name}</h1>
          <h3 className="prod-desc">{activeProduct.desc}</h3>

          <ul className="product-features">
            {productGoodSides.map((item, index) => (
              <li key={index}>
                <span className="check-icon">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="action-btns">
            <button onClick={() => goToDetail(activeProduct)}>
              View Details
            </button>
            <button>Chat to Buy</button>
          </div>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            setActiveProduct(products[swiper.activeIndex]);
          }}
        >
          {products.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                className="slide"
                src={slide.imgLink}
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
