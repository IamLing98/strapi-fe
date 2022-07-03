import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import {
  fetchAdminInfo,
  fetchCategoryList,
  fetchLastestPosts,
  fetchPopularPost,
  fetchPopularTopics,
} from "services/indexService";
import { fetchBanner } from "services/indexService";

import Aside from "../components/Aside";
import BlogCategory from "../components/PopularTopic";
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
      fetchLastestPosts(dispatch);
      fetchAdminInfo(dispatch);

      //  Lấy danh sách topic phổ biến
      fetchPopularTopics(dispatch);

      // Lấy danh sách bài viết phổ biến
      fetchPopularPost(dispatch);
    };
    fetchInitData();
  }, []);

  return <>{children}</>;
};

export default function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Provider store={store}>
      <Wrapper>
        <Aside />
        <Header offset={offset} />

        {loader ? <Preloading /> : <Component {...pageProps} />}

        {/* <Footer /> */}

        <div className="dark-mark"></div>
      </Wrapper>
    </Provider>
  );
}
