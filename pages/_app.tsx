import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 lg:px-48 my-14 sm:px-20 md:px-32">
      <div className="col-span-12 p-4 bg-white lg:col-span-3 rounded-2xl text-base h-full text-center">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 bg-white lg:col-span-9 rounded-2xl overflow-hidden">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
