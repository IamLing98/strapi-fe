import baseApiUrl from "@/utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import AdminInformation from "./AdminInformation";
import Pagination from "./Pagination";
import PopularTopics from "./PopularTopics";
import moment from "moment";

export default function LastestPosts() {
  const latestPosts = useSelector((store) => store?.indexReducer?.latestPosts);

  const [page, setPage] = useState(0);

  const pageSize = 5;

  return (
    <>
      <div className="post-module-3">
        <div className="widget-header-1 position-relative mb-30">
          <h5 className="mt-5 mb-30">Bài viết mới nhất</h5>
        </div>
        <div className="loop-list loop-list-style-1">
          {latestPosts?.slice(page * pageSize, page * pageSize + pageSize)?.map((post, index) => {
            return (
              <article className="hover-up-2 transition-normal wow fadeInUp animated">
                <div className="row mb-40 list-style-2">
                  <div className="col-md-4">
                    <div className="post-thumb position-relative border-radius-5">
                      <div
                        className="img-hover-slide border-radius-5 position-relative"
                        style={{ backgroundImage: `url(${baseApiUrl}${post?.thumbnail?.url})` }}
                      >
                        <a className="img-link" href="single.html.htm" />
                      </div>
                      <ul className="social-share">
                        <li>
                          <a href="#">
                            <i className="elegant-icon social_share" />
                          </a>
                        </li>
                        <li>
                          <a className="fb" href="#" title="Share on Facebook" target="_blank">
                            <i className="elegant-icon social_facebook" />
                          </a>
                        </li>
                        <li>
                          <a className="tw" href="#" target="_blank" title="Tweet now">
                            <i className="elegant-icon social_twitter" />
                          </a>
                        </li>
                        <li>
                          <a className="pt" href="#" target="_blank" title="Pin it">
                            <i className="elegant-icon social_pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-8 align-self-center">
                    <div className="post-content">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <a href="category.html.htm">
                          <span className="post-cat text-primary">{post?.topic?.className}</span>
                        </a>
                      </div>
                      <h5 className="post-title font-weight-900 mb-20">
                        <a href="single.html.htm">{post?.title}</a>
                        <span className="post-format-icon">
                          <i className="elegant-icon icon_star_alt" />
                        </span>
                      </h5>
                      <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                        <span className="post-on">
                          {moment(post?.published_at)?.format("DD/MM/YYYY HH:mm:ss")}
                        </span>
                        <span className="post-by has-dot">{post?.viewCount} lượt xem</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <Pagination page={page} setPage={setPage} totalRecord={latestPosts?.length || 0} pageSize={5} />
    </>
  );
}
