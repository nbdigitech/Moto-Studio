import React from "react";
import ButtonLight from "../components/button/ButtonLight";

const CarDetailing = () => {
  return (
    <div>
      <h1 className="text-center mb-2 mt-md-5 mt-sm-5 feature-products-text feature-product-margin-top-media">
        Car Detailing (Exterior)
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
        Best Car Detailing(exterior) Service in Raipur Chhattisgarh
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
          It feels great to stay behind the steering and enjoy the pleasure of
          riding. But, how many times have you wondered whats happening to the
          exterior of your Car while you are driving it?
        </p>
        <p
          style={{
            fontSize: "1.2rem",
          }}
        >
          Its constantly affected by harmful elements which often lead to a
          worn-out, scratched, and dull appearance. So, to make it look how it
          looked when it was new, we conduct a premium detailing process,
          wherein the focus lies on the following points:
        </p>
        <ul>
          <li>
            Complete exterior car detailing including painted surface, wheels,
            alloys, headlight-tailight, windshields, chrome parts, and paint
            correction.
          </li>
          <li>Paint depth inspection.</li>
          <li>Scratch lightening.</li>
          <li>Swirls marks removal.</li>
          <li>Dirt & grime removal through cleaners & degreasers.</li>
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

export default CarDetailing;
