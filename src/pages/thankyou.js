import Head from "next/head";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
const Thankyou = () => {
  return (
    <div>
      <Head>
        <title>Moto Studio | Thankyou</title>
        <meta name="description" content="Complete Car Care" />
        {/* <link rel="icon" href="/images/logo1.jpg" /> */}
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <AiOutlineHeart
            className="text-9xl text-primary"
            style={{
              color: "#f00",
              fontSize: "120px",
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
            }}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Thankyou For Registering With Us
            </h1>
            <p className="mb-4 leading-relaxed">
              You are all set, We will contact you soon at your registered email
              address.
            </p>
            <p className="mb-4 leading-relaxed">
              Continue To Explore Our Website
            </p>
            <div className="flex justify-center">
              <Link href="/">
                <a
                  href="https://api.whatsapp.com/send?phone=917000028760"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    style={{
                      padding: "10px 30px",
                    }}
                    className="w-32 text-center mx-2 flex justify-center text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Whatsapp Connect
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Thankyou;
