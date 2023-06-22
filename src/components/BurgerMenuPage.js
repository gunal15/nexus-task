import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import burgerMenuData from "../data/burgerMenuData";
import "../App.css";

const BurgerMenuPage = () => {
  return (
    <div className="menu">
      <h1>Burger Menu</h1>
      <div className="menu-list">
        {burgerMenuData.map((burger, index) => (
          <div
            key={burger.id}
            className={`menu-item animated delay-${index + 1}`}
          >
            <div className="item-image">
              <LazyLoadImage
                src={burger.image}
                alt={burger.name}
                effect="blur"
                className="burger-image"
              />
            </div>
            <div className="item-details">
              <h2>{burger.name}</h2>
              <p>{burger.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BurgerMenuPage;
