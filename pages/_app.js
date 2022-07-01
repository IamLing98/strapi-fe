import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { fetchCategoryList } from "services/indexService";
import { fetchBanner } from "services/indexService";

import Aside from "../components/Aside";
import BlogCategory from "../components/BlogCategory";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Preloading from "../components/Preloading";

import store from "../redux/store";

// Global CSS
// import '../public/css/style.css';

// This default export is required in a new `pages/_app.js` file.

const Wrapper = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInitData = async () => {
      fetchCategoryList(dispatch);
      fetchBanner(dispatch);
    };
    fetchInitData();
  }, []);

  return <>{children}</>;
};

export default function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return (
    <Provider store={store}>
      <Wrapper>
        {loader && <Preloading />}

        <Header />

        <Aside />

        <main>
          <Component {...pageProps} />
        </main>

        <Footer />

        <div className="dark-mark"></div>
      </Wrapper>
    </Provider>
  );
}
