import React from "react";
import Image from "next/image";
import Button from "../../components/button/ButtonLight";
import { Row, Col, Container } from "react-bootstrap";
import CollaborateHeaderImg from "../../assets/images/collaborate/CollaborateBanner.png";
import Link from "next/link";
import { lineHeight } from "@mui/system";

function CollaborateHeader() {
  return (
    <>
      <div className="collaborate-header-img-mobile">
        <Image
          src={CollaborateHeaderImg}
          className="w-100"
          alt="CollaborateHeaderImg"
          unoptimized={true}
          loading="eager"
        />
        <Container className="mt-4">
          <Row className=" justify-content-md-start gutter-collaborate-fix justify-content-center">
            <Col md={8} lg={6} className="col-10">
              <Row className="gutter-collaborate-fix">
                <Col md={9} className="py-md-3 my-2">
                  <p className="collaborate-heads-head-mobile  mb-0 ">
                    Business
                  </p>
                  <p className="collaborate-heads-head-mobile">Opportunities</p>
                  <p className="collaborate-heads-para-mobile ">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <div className=" col-12 mt-4">
                    <div className="mb-md-5  mt-md-3 mb-3 me-3 business-btn-mobile">
                      <Button
                        className="collaborate-header-contact-button w-100"
                        text="CONTACT US &nbsp; &gt;"
                      />
                    </div>
                    <div className="mb-md-5  mt-md-3 mb-3 me-3 business-btn-mobile">
                      <Button
                        className="collaborate-header-shop-now-button w-100"
                        text="SHOP NOW &nbsp; &gt;"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="collaborate-header-img">
        <Container>
          <Row className=" gutter-collaborate-fix">
            <Col md={7} className="col-10">
              <Row className="gutter-collaborate-fix ms-3">
                <Col md={10}>
                  <div>
                    <p
                      className="collaborate-heads-head  me-2 mb-0 text-center text-md-start"
                      style={{ marginLeft: "-.3rem" }}
                    >
                      Business
                    </p>
                    <p className="collaborate-heads-head  mb-0 text-center text-md-start">
                      Opportunities
                    </p>

                    <p className="collaborate-heads-para text-center text-md-start">
                      ???Chhattisgarh Herbals??? presents exciting business
                      opportunities for individuals and businesses interested in
                      partnering with an organization dedicated towards
                      upliftment of tribals, empowerment of women and protection
                      of environment. ???Chhattisgarh Herbals??? offers the
                      following opportunities for like- minded individuals and
                      firms:
                    </p>
                  </div>

                  <div className="collaborate-badge">
                    <div className="text-bg px-3 py-2">
                      <p>
                        Organically Certified Raw & Processed Minor Forest
                        Produce
                      </p>
                    </div>
                    <div className="text-bg">
                      <p>
                        MFP based Herbal Ayurvedic, Food and Personal Care
                        Products
                      </p>
                    </div>
                  </div>

                  <div className=" col-12">
                    <span className="mb-lg-5 mt-md-2 mb-0 me-5 d-inline-block">
                      <Link href={`/contact`}>
                        <a>
                          <Button
                            className="collaborate-header-contact-button"
                            text="CONTACT US &nbsp; &gt;"
                          />
                        </a>
                      </Link>
                    </span>

                    <span className="mb-lg-5 mt-md-4 mb-0 d-inline-block">
                      <a
                        href="https://eproc.cgstate.gov.in/CHEPS/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <Button
                          className="collaborate-header-shop-now-button"
                          text="TENDERS &nbsp; &gt;"
                        />
                      </a>
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CollaborateHeader;
