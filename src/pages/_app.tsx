import { AppProps } from "next/app";
// import "bootstrap/dist/css/bootstrap.css";
import '../style.scss';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
