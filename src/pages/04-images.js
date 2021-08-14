import React from "react";
import Logo from "../images/logo.gif";
import Lemon from "../images/lemon-posset.jpg";
import Roasted from "../images/roasted-brussel-sprouts.jpg";
import Chocolate from "../images/chocolate-islands.jpg";
import Zucchini from "../images/zucchini-cake.jpg";

const Images = () => {
  return (
    <div>
      <h1>
        <img src={Logo} alt='From A to Zucchini' />
      </h1>
      <figure>
        <img
          src={Chocolate}
          alt='Chocolate Islands'
          title='Chocolate Islands Individual Cakes'
        />
        <p>
          <figcaption>
            This recipe for individual chocolate cakes is so simple and so
            delectable!
          </figcaption>
        </p>
      </figure>
      <h4>More Recipes:</h4>
      <p>
        <img src={Lemon} alt='Lemon Posset' title='Lemon Posset Dessert' />
        <img
          src={Roasted}
          alt='Roasted Brussel Sprouts'
          title='Roasted Brussel Sprouts Side Dish'
        />
        <img
          src={Zucchini}
          alt='Zucchini Cake'
          title='Zucchini Cake No Frosting'
        />
      </p>
    </div>
  );
};

export default Images;
