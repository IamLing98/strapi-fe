import AdminInformation from "@/components/AdminInformation";
import Banner from "@/components/Banner";
import LastestPosts from "@/components/LastestPosts";
import PopularPosts from "@/components/PopularPosts";
import PopularTopics from "@/components/PopularTopics";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setShowNav } from "redux/reducers/indexReducer";
import BlogCategory from "../components/PopularTopic";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowNav(false));
  }, []);

  return (
    <main>
      <div className="container">
        <Banner />
        <BlogCategory />
        <PopularPosts />
        <LastestPosts />
      </div>
    </main>
  );
}

export default HomePage;
