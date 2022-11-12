export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3018"
    : "https://motostudio.in/";
export const SITE_NAME = "Moto Studio";
export const SITE_LOGO = "/logo.png";
export const SITE_FAVICON = "/logo.png";
export const SITE_BANNER = "/images/mainbanner.png";
export const SITE_ICO_DIR = "/logo.png";

const GlobalSEO = {
  global: {
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: SITE_URL,
      site_name: SITE_NAME,
      images: [
        {
          url: SITE_BANNER,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      handle: "Moto Studio",
      site: SITE_NAME,
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        property: "keywords",
        content:
          "Car Detailing, Car Detailing (Exterior), Car Detailing (Interior), Car Protection",
      },
    ],
    additionalLinkTags: [
      {
        rel: "icon",
        href: SITE_FAVICON,
      },
      {
        rel: "apple-touch-icon",
        href: SITE_ICO_DIR + "apple-icon-76x76.png",
        sizes: "76x76",
      },
      {
        rel: "manifest",
        href: SITE_ICO_DIR + "manifest.json",
      },
    ],
  },
  "/": {
    title: "Moto Studio | Complete Car Care",
    description:
      "Welcome to The Moto Studio: One-Stop Solution to All Your Car Care Problems. Perfection is in the Detail this is what we believe in",
    openGraph: {
      image: SITE_BANNER,
      type: "website",
      locale: "en_IE",
      url: SITE_URL,
      site_name: SITE_NAME,
      title: "Moto Studio | Complete Car Care",
      description:
        "Welcome to The Moto Studio: One-Stop Solution to All Your Car Care Problems. Perfection is in the Detail this is what we believe in",
      images: [
        {
          url: SITE_BANNER,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  "/car-detailing": {
    title: "Car Detailing",
    description: "Best Car Detailing in Raipur",
    openGraph: {
      image: SITE_BANNER,
      type: "website",
      locale: "en_IE",
      url: SITE_URL,
      site_name: SITE_NAME,
      title: "Car Detailing",
      description: "Best Car Detailing in Raipur",
      images: [
        {
          url: SITE_BANNER,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  "/car-protection": {
    title: "Car Protection",
    description: "Best Car Protection in Raipur",
    openGraph: {
      image: SITE_BANNER,
      type: "website",
      locale: "en_IE",
      url: SITE_URL,
      site_name: SITE_NAME,
      title: "Car Protection",
      description: "Best Car Protection in Raipur",
      images: [
        {
          url: SITE_BANNER,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  "/car-coating": {
    title: "Car Coating",
    description: "Best Car Coating in Raipur",
    openGraph: {
      image: SITE_BANNER,
      type: "website",
      locale: "en_IE",
      url: SITE_URL,
      site_name: SITE_NAME,
      title: "Car Coating",
      description: "Best Car Coating in Raipur",
      images: [
        {
          url: SITE_BANNER,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  "/car-accessories": {
    title: "Car Accessories",
    description: "Best Car Accessories in Raipur",
    openGraph: {
      image: SITE_BANNER,
      type: "website",
      locale: "en_IE",
      url: SITE_URL,
      site_name: SITE_NAME,
      title: "Car Accessories",
      description: "Best Car Accessories in Raipur",
      images: [
        {
          url: SITE_BANNER,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  "/car-detailing-interior": {
    title: "Car Detailing (Interior)",
    description: "Best Interior Car Detailing in Raipur",
    openGraph: {
      image: SITE_BANNER,
      type: "website",
      locale: "en_IE",
      url: SITE_URL,
      site_name: SITE_NAME,
      title: "Car Detailing (Interior)",
      description: "Best Interior Car Detailing in Raipur",
      images: [
        {
          url: SITE_BANNER,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  "/car-detailing-exterior": {
    title: "Car Detailing (Exterior)",
    description: "Best Exterior Car Detailing in Raipur",
    openGraph: {
      image: SITE_BANNER,
      type: "website",
      locale: "en_IE",
      url: SITE_URL,
      site_name: SITE_NAME,
      title: "Car Detailing (Exterior)",
      description: "Best Exterior Car Detailing in Raipur",
      images: [
        {
          url: SITE_BANNER,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
  "/car-accessories": {
    title: "Car Accessories",
    description: "Best Car Accessories in Raipur",
    openGraph: {
      image: SITE_BANNER,
      type: "website",
      locale: "en_IE",
      url: SITE_URL,
      site_name: SITE_NAME,
      title: "Car Accessories",
      description: "Best Car Accessories in Raipur",
      images: [
        {
          url: SITE_BANNER,
          width: 1067,
          height: 725,
          alt: SITE_NAME,
        },
      ],
    },
  },
};

export default GlobalSEO;
