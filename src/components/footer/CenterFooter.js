import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { GrFacebook, GrInstagram } from "react-icons/gr";
import { RiWhatsappFill } from "react-icons/ri";
import footerlogo from "../../../public/images/logo.png";
import { apipath } from "../../pages/api/apiPath";
import LastFooter from "./LastFooter";

function CenterFooter() {
  const [category, setCategory] = useState([]);

  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apipath}/api/v1/category/list`);
      const result = await response.json();
      // get only active category
      const filterData = result?.data.filter((list) => list.status);
      setCategory(filterData);
    };
    fetchData();
  }, []);
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
      <div className="center-footer ">
        <Container>
          <div className="cg-center-div">
            <Row>
              <Col sm={12} lg={3} className="text-center">
                <div>
                  <Image
                    src={footerlogo}
                    alt="footerlogo"
                    unoptimized={true}
                    loading="eager"
                  />
                </div>
              </Col>
              <Col sm={12} md={12} lg={6}>
                <Row>
                  <Col sm={4} md={4} lg={4}>
                    <div className="footer-cg-herbal">
                      <h6 className="footer-center-header ">
                        Car Treatment Services
                      </h6>
                      <div className="d-flex flex-column">
                        {links.map((cat, index) => {
                          console.log("cat :>> ", index);
                          return (
                            <Link href={`${cat?.name}`} key={index}>
                              <p
                                className="footer-cg-para"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                {index === 0
                                  ? "Ceramic Coating"
                                  : index === 1
                                  ? "Car Detailing (Exterior)"
                                  : index === 2
                                  ? "Car Detailing (Interior)"
                                  : "Car Protection"}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </Col>

                  <Col sm={4} md={4} lg={4}>
                    <div className="footer-cg-herbal">
                      <h6 className="footer-center-header">SUPPORT</h6>
                      <div className="d-flex flex-column">
                        {[
                          { title: "Contact Us", href: "/contact" },
                          { title: "Privacy Policy", href: "/privacy-policy" },
                          {
                            title: "Terms of Service",
                            href: "/terms-of-service",
                          },
                        ].map((ele, index) => (
                          <Link href={ele.href} key={index}>
                            <a className="footer-cg-para">{ele.title}</a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <div className="footer-cg-herbal">
                      <h6 className="footer-center-header">Contact Us</h6>
                      <div className="d-flex flex-column">
                        <a className="footer-cg-para">
                          Infront of kps junior school,St Xaviers school, Road,
                          Avanti Vihar, Raipur, Chhattisgarh 492006
                        </a>
                        <a className="footer-cg-para" href="tel:7000028760‬">
                          ‪+91 70000 28760‬
                        </a>

                        <a
                          className="footer-cg-para"
                          href="https://g.co/kgs/vDd76w"
                          target={"_blank"}
                          rel="noreferrer"
                        >
                          https://g.co/kgs/vDd76w
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} lg={3}>
                <div className="footer-cg-herbal ">
                  <h6 className="footer-center-header text-lg-start text-center">
                    DIGITAL PRESENCE
                  </h6>
                  <div className="footer-center-icon  text-lg-start text-center mt-4">
                    <a
                      href="https://www.facebook.com/motostudioraipur"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <GrFacebook className="cg-footer-icon" /> &nbsp; &nbsp;
                      &nbsp;
                    </a>
                    <a
                      href="https://www.instagram.com/motostudio_raipur/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrInstagram className="cg-footer-icon" /> &nbsp; &nbsp;
                      &nbsp;
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=917000028760"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiWhatsappFill className="cg-footer-icon" /> &nbsp;
                      &nbsp; &nbsp;
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <LastFooter />
    </>
  );
}

export default CenterFooter;
