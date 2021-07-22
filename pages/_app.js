import "../styles/globals.css";
import "../styles/layout.scss";
import Providers from "../context/Providers";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
