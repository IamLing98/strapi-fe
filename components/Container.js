import Banner from "./Banner";
import BlogCategory from "./PopularTopic";
import LastestPosts from "./LastestPosts";
import Posts from "./Posts";

export default function Container() {
  return (
    <div className="container">
      <Banner />
      <BlogCategory />
      <LastestPosts />
    </div>
  );
}
