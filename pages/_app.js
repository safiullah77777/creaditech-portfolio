import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Head } from "next/document";
function MyApp({ Component, pageProps }) {
  return (
    <>
    
      <Component {...pageProps} />
      <ToastContainer autoClose={1000} hideProgressBar />
    </>
  );
}

export default MyApp;
