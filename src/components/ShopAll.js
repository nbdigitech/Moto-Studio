function ShopAll({ menu_data }) {
  return (
    <div className="container-fluid">
      {/* <div className="container">
        <div className="all-shop-list-change py-4 mb-3">
          <Row>
            {menu_data?.length > 0
              ? [...menu_data]
                  .reverse()
                  .slice(1, 5)
                  .map((sub_menu) => {
                    return (
                      <Col md={3} lg={3} key={sub_menu?._id}>
                        <div className="grocery-gourmet-foods">
                          <h6 className="Grocery-foods">
                            {sub_menu?.menu_name}
                          </h6>
                          <div
                            className="d-flex flex-column gap-2 flex-wrap text-start"
                            style={{ height: "100px" }}
                          >
                            {sub_menu?.menu_data?.length &&
                              sub_menu?.menu_data[0]?.products_data
                                ?.slice(0, 8)
                                .map((item) => {
                                  return (
                                    <Link
                                      key={item._id}
                                      href={`/product/${item._id}`}
                                    >
                                      <a className="Wildforest text-secondary">
                                        {item?.title || ""}
                                      </a>
                                    </Link>
                                  );
                                })}
                          </div>
                        </div>
                      </Col>
                    );
                  })
              : null}
          </Row>
        </div>
      </div> */}
    </div>
  );
}

export default ShopAll;
