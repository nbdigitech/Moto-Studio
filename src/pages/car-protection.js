import React from "react";
import ButtonLight from "../components/button/ButtonLight";

const CarProtection = () => {
  return (
    <div>
      <h1 className="text-center mb-2 mt-md-5 mt-sm-5 feature-products-text feature-product-margin-top-media">
        Car Protection
      </h1>
      <div className="text-center">
        <hr className="text-center mb-5 Featured-products-hr m-auto" />
      </div>
      <h2
        className="text-center"
        style={{
          fontSize: "1.5rem",
          lineHeight: "1.8rem",
          fontWeight: "500",
          margin: "0 2rem",
        }}
      >
        Best Car Protection Service in Raipur Chhattisgarh
      </h2>
      <div
        style={{
          maxWidth: "90%",
          margin: "30px auto",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
          }}
        >
          Everyone likes a new and shiny car when it comes out fresh from a
          showroom but as it ages, a variety of harmful external elements such
          as dust, dirt, sunlight etc. decrease its beauty and make you wish for
          a new Car.
        </p>
        <br />
        <p
          style={{
            fontSize: "1.2rem",
          }}
        >
          But it’s not needed at all as our premium and top-quality protection
          services restore a vehicle back to its original finish and make it
          stand out from other Cars on the road.
        </p>
        <br />
        <p
          style={{
            fontSize: "1.2rem",
          }}
        >
          It adds more shine, elegance, and class to your vehicle and makes you
          want to drive it more and more as you get the feeling of driving a
          brand-new car every time you ride it.
        </p>
        <ul>
          Benefits of Protection
          <li>It restores the vehicle to its shiny finish.</li>
          <li>It reveals the true beauty of your cars surface.</li>
          <li>It protects the car from harmful sunlight and UV rays.</li>
          <li>Shields the surface against chemical stains & Dirt.</li>
          <li>
            Makes the surface of the car highly hydrophobic i.e. super easy to
            clean.
          </li>
        </ul>
        <br />
        <p
          style={{
            fontSize: "1.2rem",
          }}
        >
          Motostudio has been at the forefront of the car detailing revolution
          in Raipur now. We use the best global brands like Menzerna and Koche
          Chemie products only which makes us a pioneer in Raipur. Each car that
          drives into our studios is meticulously detailed by the best experts
          in the business, ensuring you go out with that new car feeling.
        </p>
      </div>
      <a
        href="tel:7000028760‬"
        className="contac-sent-message text-center mt-3"
      >
        <ButtonLight
          text="Click To Call"
          style={{
            backgroundColor: "#000",
          }}
        />
      </a>
    </div>
  );
};

export default CarProtection;
