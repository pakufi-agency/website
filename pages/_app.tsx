import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "../public/assets/css/fontawesome-all.min.css";
import "../public/assets/css/modal.css";
import "../public/assets/css/mobile-menu.css";
import "../public/assets/css/default.css";
import "../public/assets/css/style.css";

import { AppProps } from "next/app";

const PakufiApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default PakufiApp;
