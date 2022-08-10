import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

// import BrahmiChurna from "../../../public/images/bramkumari.png"
import Gourment_food from "../../../public/images/subheadermenuitems/Gourment_food.svg";
import Personal_care from "../../../public/images/subheadermenuitems/Personal_care.svg";
import Ayush_product from "../../../public/images/subheadermenuitems/Ayush_product.svg";
import Home_care from "../../../public/images/subheadermenuitems/Home_care.svg";
// import Home_care from "../../../public/images/subheadermenuitems/home care.jpg";
import Image from "next/image";
import Link from "next/link";

function Common({ menuData }) {
  // console.log('menuData ',[...menuData].reverse());
  return (
    <Container fluid>
      <Container>
        {/* <Row className="all-shop-list-change py-3 my-3">
          {menuData?.length &&
            menuData.map((menu, index) => {
              return (
                <Col
                  sm={12}
                  md={4}
                  lg={4}
                  className="alternative-div"
                  key={menu._id}
                >
                  <div className="d-flex gap-3">
                    <div className="image-block">
                      <Image
                        src={
                          menu?.images?.length
                            ? menu.images[0]?.img || BrahmiChurna
                            : BrahmiChurna
                        }
                        alt={menu?.title || ""}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div
                      className="sub-menu-block"
                      style={{ overflow: "hidden" }}
                    >
                      <h6 className="Grocery-foods">
                        {menu?.category_name || ""}
                      </h6>
                      <div
                        className="d-flex flex-column gap-2 flex-wrap text-start"
                        style={{ height: "100px", width: "fitContent" }}
                      >
                        {menu?.products_data?.length &&
                          menu?.products_data?.map((product, idx) => {
                            if (idx > 3) return;
                            return (
                              <Link
                                href={`/product/${product._id}`}
                                key={product._id}
                              >
                                <a
                                  style={{ width: "fitContent" }}
                                  className="Wildforest cursor-pointer text-muted"
                                >
                                  {product?.title || ""}
                                </a>
                              </Link>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row> */}
        <div className="all-shop-list-change py-3">
          <Row>
            {menuData &&
              menuData?.length &&
              menuData.map((menu, index) => {
                if (index > 0) return;
                return (
                  <div
                    className="d-flex flex-row alternative-div"
                    key={menu._id}
                  >
                    <Col md={4} lg={4} className="mt-2">
                      <div className="grocery-gourmet-foods">
                        <h6 className="Grocery-foods">
                          {menu?.category_name || ""}
                        </h6>
                        <div
                          className="d-flex flex-column gap-2 flex-wrap text-start"
                          style={{ height: "100px" }}
                        >
                          {menu?.products_data?.length &&
                            menu?.products_data?.map((product, idx) => {
                              if (idx > 7) return;
                              return (
                                <Link
                                  href={`/product/${product._id}`}
                                  key={product._id}
                                >
                                  <a
                                    style={{ width: "fitContent" }}
                                    className="Wildforest cursor-pointer text-muted"
                                  >
                                    {product?.title || ""}
                                  </a>
                                </Link>
                              );
                            })}
                        </div>
                      </div>
                    </Col>
                    <Col md={4} lg={4} className="mt-2">
                      <div className="ms-5">
                        <h6 className="Grocery-foods">Other Products</h6>
                        <div
                          className="d-flex flex-column gap-2 flex-wrap text-start"
                          style={{ height: "100px" }}
                        >
                          {menuData &&
                            menuData?.length &&
                            menuData[menuData.length - 1]?.products_data?.map(
                              (product, idx) => {
                                if (idx > 7) return;
                                return (
                                  <Link
                                    href={`/product/${product._id}`}
                                    key={product._id}
                                  >
                                    <a
                                      style={{ width: "fitContent" }}
                                      className="Wildforest cursor-pointer text-muted"
                                    >
                                      {product?.title || ""}
                                    </a>
                                  </Link>
                                );
                              }
                            )}
                        </div>
                      </div>
                    </Col>

                    <Col md={4} lg={4}>
                      <div className="categoryItemImageHover">
                        {/* <Image
                        src={
                          menu?.images?.length
                            ? menu.images[0]?.img || BrahmiChurna
                            : BrahmiChurna
                        }
                        alt={menu?.title || ""}
                        width={330}
                        height={160}
                      /> */}
                        {menu.category_name === "Massage Oils" ? (
                          <Image
                            src={Ayush_product}
                            alt={menu?.title || ""}
                            width={330}
                            height={160}
                          />
                        ) : menu.category_name === "Skin Care" ? (
                          <Image
                            src={Personal_care}
                            alt={menu?.title || ""}
                            width={330}
                            height={160}
                          />
                        ) : menu.category_name === "Sweets" ? (
                          <Image
                            src={Gourment_food}
                            alt={menu?.title || ""}
                            width={330}
                            height={160}
                          />
                        ) : (
                          <Image
                            src={Home_care}
                            alt={menu?.title || ""}
                            width={330}
                            height={160}
                          />
                        )}
                      </div>
                    </Col>
                  </div>
                );
              })}
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Common;
