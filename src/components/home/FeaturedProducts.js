import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import BeautyProducts from "../../assets/images/home/1 (1).png";
// import AlternativeMedicine from "../../assets/images/home/1 (2).png";
// import HealthPersonalCare from "../../assets/images/home/1 (3).png";
// import GourmetFoods from "../../assets/images/home/1 (4).png";
import Slider from "react-slick/lib/slider";

function FeaturedProducts({ category }) {
  const list = category?.length > 0 ? category[3]._id : null || null;
  const [categoryId, setCategoryId] = useState(list);
  const [selectedCat, setSelected] = useState();
  const getCategoryId = (id) => setCategoryId(id);

  let categories = category?.filter((cat, index) => index < 4);
  // let categories = category

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const links = [
    {
      id: 1,
      name: "car-coating",
    },

    {
      id: 2,
      name: "car-detailing-exterior",
    },
    {
      id: 3,
      name: "car-detailing-interior",
    },
    {
      id: 4,
      name: "car-protection",
    },
  ];

  return (
    <>
      <h1 className="text-center mb-2 mt-md-5 mt-sm-5 feature-products-text feature-product-margin-top-media">
        Our Services
      </h1>
      <div className="text-center">
        <hr className="text-center mb-5 Featured-products-hr m-auto" />
      </div>

      <div className="overflow-style">
        <div className="image-div1">
          <Slider {...settings}>
            {links.map((cat, index) => {
              return (
                <Link href={`${cat?.name}`} key={index}>
                  <div
                    className="image-div"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <div className="rounded-circle zoom-in-img-wrapper">
                      <Image
                        src={`/Picture/${index + 1}.png`}
                        alt="GourmetFoods"
                        className={`rounded-circle hover1 ${
                          selectedCat === cat._id ? "active" : ""
                        }`}
                        width={160}
                        height={160}
                        loading="lazy"
                        onClick={() => setSelected(cat._id)}
                        // unoptimized={true}
                        // loading="eager"
                      />
                    </div>
                    <p className="feature-products-texts feature-products-texts-media">
                      {index === 0
                        ? "Ceramic Coating"
                        : index === 1
                        ? "Car Detailing (Exterior)"
                        : index === 2
                        ? "Car Detailing (Interior)"
                        : "Car Protection"}
                    </p>
                  </div>
                </Link>
              );
            })}
            {/* <div className="image-div">
                    <div className="rounded-circle zoom-in-img-wrapper">
                      <Image
                        src={emptyImage}
                        alt="GourmetFoods"
                        className={`rounded-circle hover1 ${
                          selectedCat === 3 ? "active" : ""
                        }`}
                        width={160}
                        height={160}
                        loading="lazy"
                      />
                      <p className="feature-products-texts">
                        Primium Products
                      </p>
                    </div>
                  </div> */}
          </Slider>
        </div>
      </div>

      {/* <VisitTheShop categoryId={categoryId || "61effaa01a880a62b8284274"} /> */}
    </>
  );
}

export default FeaturedProducts;
