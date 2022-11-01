import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { apipath } from "../../pages/api/apiPath";
import Button from "../button/ButtonLight";

function HomeEmpower() {
  const [impoweredData, setImpoweredData] = useState({
    backgroundImg: "",
    title: "Title",
    desc: "Description",
  });

  const router = useRouter();

  useEffect(() => {
    // setImpoweredData({
    //   backgroundImg: impowerData[0]?.images[0]?.img || '',
    //   title: impowerData[0]?.title || 'Title',
    //   desc: impowerData[0]?.description || 'Description'
    // })

    const fetchData = async () => {
      try {
        const res = await fetch(`${apipath}/api/v1/about/empowerd/list`);
        const objData = await res.json();
        if (objData.length) {
          setImpoweredData({
            backgroundImg: objData[0]?.images[0]?.img || "",
            title: objData[0]?.title || "Title",
            desc: objData[0]?.description || "Description",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="home-empower-img">
        <div className="home-empower-img-distance">
          {/* <p className="home-empower-img-para d-block">
            {impoweredData?.desc || "From our Hearts"}
          </p> */}
          <p
            className="home-empower-img-text"
            style={{
              backgroundColor: "white",
              color: "black",
              width: "fit-content",
              margin: "10px auto",
              padding: "0 10px",
            }}
          >
            {impoweredData?.titles || "Our Exclusive Brands"}
          </p>
          <div className="d-flex">
            <div className="mx-auto" onClick={() => router.push("/")}>
              <Button text="KNOW MORE" className="home-empower-button" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .home-empower-img {
          background-image: url(/Picture/banner.png);
          background-size: cover;
        }
      `}</style>
    </>
  );
}

export default HomeEmpower;
