import "../../public/assets/css/font-awesome-all.css";
// import "../../public/assets/css/owl.css";
import "../../public/assets/css/flaticon_save_us.css";
import "../../public/assets/css/bootstrap.css";
import "../../public/assets/css/jquery.fancybox.min.css";
import "../../public/assets/css/magnific-popup.css";
import "../../public/assets/css/progresscircle.css";
import "../../public/assets/css/icomoon.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/color.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/global.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/swiper.min.css";
import "../../public/assets/css/responsive.css";
import "@/styles/globals.css";
import Head from "next/head";
import METADATA from "@/METADATA";
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{METADATA.title}</title>
                <meta rel="icon" href="/assets/images/logo.png" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
