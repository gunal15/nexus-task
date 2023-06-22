import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import burgerMenuData from "../data/burgerMenuData";

const HomePage = () => {
  const discountImages = [
    "https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20230426015938930569_1440x300gif",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20230311020943673340_1440x300jpg",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20221223091239146125_1440x300gif",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20230503125256075747_1440x300gif",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20230307014000870966_1440x300gif",
  ];
  return (
    <div className="home">
      <h1>Welcome to our Burger Store</h1>

      <div className="discounts">
        {discountImages.map((image, index) => (
          <div
            key={index}
            className={`discount-card animated delay-${index + 1}`}
          >
            <LazyLoadImage
              src={image}
              alt={`Discount ${index + 1}`}
              effect="blur"
              className="discount-image"
            />
          </div>
        ))}
      </div>

      <div className="discounts">
        <div className="discount-card animated">
          <h2>Special Discount</h2>
          <p>Get 20% off on our Burger of the Day!</p>
        </div>
        <div className="discount-card animated">
          <h2>Combo Deal</h2>
          <p>Buy a burger and get a free drink!</p>
        </div>
      </div>

      <div className="burger-images">
        {burgerMenuData.map((burger, index) => (
          <LazyLoadImage
            key={burger.id}
            src={burger.image}
            alt={burger.name}
            effect="blur"
            className={`burger-image animated delay-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
