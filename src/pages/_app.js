import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.css";

import {
  CorporateContactJsonLd,
  DefaultSeo,
  LogoJsonLd,
  SocialProfileJsonLd,
} from "next-seo";
import GlobalSEO, {
  SITE_LOGO,
  SITE_NAME,
  SITE_URL,
} from "../../next-seo.config";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const seo = GlobalSEO[router.pathname];
  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...seo} />
      <LogoJsonLd logo={SITE_LOGO} url={SITE_URL} />
      <CorporateContactJsonLd
        url={SITE_URL}
        logo={SITE_LOGO}
        contactPoint={[
          {
            telephone: "+91 70000 28760‬",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "HINDI"],
          },
          {
            telephone: "+91 70000 28760‬",
            contactType: "technical support",
            contactOption: "TollFree",
            areaServed: ["IN"],
            availableLanguage: ["English", "HINDI"],
          },
        ]}
      />
      <SocialProfileJsonLd
        type="Organization"
        name={SITE_NAME}
        url={SITE_URL}
        sameAs={
          [
            // "https://www.facebook.com/profile.php?id=100079731053707",
            // "https://www.instagram.com/chikupos/",
            // "https://twitter.com/chiku_pos",
          ]
        }
      />
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
export default MyApp;
