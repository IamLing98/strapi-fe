import baseApiUrl from "@/utils/constants";
import { useSelector } from "react-redux";

export default function PopularTopics() {
  const popularTopics = useSelector((store) => store?.indexReducer?.popularTopics);

  return (
    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
      <div className="widget-header-1 position-relative mb-30">
        <h5 className="mt-5 mb-30">Chủ đề phổ biến</h5>
      </div>
      <div className="post-block-list post-module-1">
        <ul className="list-post">
          {popularTopics?.map((item, index) => {
            return (
              <li className="mb-30 wow fadeInUp animated">
                <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                  <div className="post-content media-body">
                    <h5 className="post-title mb-15 text-limit-2-row font-medium">
                      <a href="single.html.htm">{item?.topicName}</a>
                    </h5>
                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                      <span className="post-on">05 August</span>
                      <span className="post-by has-dot">150 views</span>
                    </div>
                  </div>
                  <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                    <a className="color-white" href="single.html.htm">
                      <img src={`${baseApiUrl}${item?.thumbnail?.url}`} alt />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
