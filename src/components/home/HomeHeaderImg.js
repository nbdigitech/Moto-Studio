import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../button/ButtonLight";
import HomeHeader from "../../assets/images/home/homeHeaderMobile.png";
import HerbalRemedies from "../../../public/Image/HerbalRemedies.png";
import GreenCare from "../../../public/Image/GreenCare.png";
import SummerCoolers from "../../../public/Image/SummerCoolers.png";
import { useRouter } from "next/router";
import { apipath } from "../../pages/api/apiPath";

function HomeHeaderImg() {
  const [banner, setBanner] = useState({
    bannerImg: HomeHeader,
    bannerTitle: "Purity that is Priceless",
    bannerDesc:
      "The forest grows and the forest provides . The women of the forest procure and create. Each product is handcrafted with care and love by the empowered women of these forest areas, endowing each product with a purity that is truly priceless.",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apipath}/api/v1/home/banner/list`);
        const objData = await res.json();
        setBanner({
          bannerImg: objData.data[0]?.images[0]?.img || HomeHeader,
          bannerTitle: objData.data[0]?.title || "Purity that is Priceless",
          bannerDesc:
            objData.data[0]?.description ||
            "The forest grows and the forest provides . The women of the forest procure and create. Each product is handcrafted with care and love by the empowered women of these forest areas, endowing each product with a purity that is truly priceless.",
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const router = useRouter();

  return (
    <>
      {/* Mobile View */}
      <div
        className="home-head-img-mobile"
        style={{
          backgroundImage: `url(${banner.bannerImg})`,
          backgroundSize: "cover",
          height: 170,
        }}
      >
        {/* <Image src={banner?.bannerImg || HomeHeader} className="w-100" alt="ss" width={1200} height={800} /> */}
      </div>
      <Container className="home-head-text-mobile">
        <Row className="justify-content-md-start justify-content-center">
          <Col md={8} lg={6} className="col-10">
            <Row className="">
              <Col md={9} className="py-md-5 my-2 ">
                <p className="home-header-head-mobile mt-md-5 mt-4">
                  {banner.bannerTitle}
                </p>
                <p className="home-header-para-mobile">{banner.bannerDesc}</p>
                <div className="col-10">
                  <div
                    className="mb-md-5  mt-md-3 mb-0"
                    onClick={() => router.push("/product")}
                  >
                    <Button
                      className="home-header-button"
                      text="SHOP NOW &nbsp; &nbsp; &gt;"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* DeskTop View */}
      <div
        className="home-head-img"
        style={{
          backgroundImage: `url(${banner.bannerImg})`,
          backgroundSize: "cover",
          imageRendering: "-webkit-optimize-contrast",
          imageRendering: "crisp-edges",
        }}
      >
        <div className="cg-herbal-container">
          <Row className=" justify-content-md-start justify-content-center">
            <Col md={8} lg={6} className="col-10">
              <Row className="">
                <Col md={12} className="my-2">
                  <p className="home-header-head text-center mb-0 text-md-start">
                    {banner.bannerTitle}
                  </p>
                  <p className="home-header-para text-center text-md-start">
                    {banner.bannerDesc}
                  </p>

                  <div
                    className=" col-10 text-center text-md-start mx-auto ms-md-0 mb-md-5  mt-md-4 mb-0"
                    onClick={() => router.push("/product")}
                  >
                    <Button
                      className="home-header-button"
                      text="SHOP NOW &nbsp; &nbsp; &gt;"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <Row className="BannerBottomImagesRow">
        <Col md={8} lg={4} className="BannerBottomImages">
          <Link href={`/product?activeTab=0`}>
            <div className="SubImageContainer">
              <Image
                src={HerbalRemedies}
                className="w-100"
                alt="ss"
                width={1200}
                height={800}
              />
              <p className="bottom-left left-4"></p>
            </div>
          </Link>
        </Col>
        <Col md={8} lg={4} className="BannerBottomImages">
          <Link href={`/product?activeTab=1`}>
            {/* <Image src={GreenCare} className="w-100" alt="ss" width={1200} height={800} /> */}
            <div className="SubImageContainer">
              <Image
                src={GreenCare}
                className="w-100"
                alt="ss"
                width={1200}
                height={800}
              />
              <p className="bottom-left green"></p>
            </div>
          </Link>
        </Col>
        <Col md={8} lg={4} className="BannerBottomImages">
          <Link href={`/product?activeTab=2`}>
            {/* <Image src={SummerCoolers} className="w-100" alt="ss" width={1200} height={800} /> */}
            <div className="SubImageContainer">
              <Image
                src={SummerCoolers}
                className="w-100"
                alt="ss"
                width={1200}
                height={800}
              />
              <p className="bottom-left"></p>
            </div>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default HomeHeaderImg;
