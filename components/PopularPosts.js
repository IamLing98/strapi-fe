import baseApiUrl from "@/utils/constants";
import moment from "moment";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function PopularPosts() {
  const popularPosts = useSelector((store) => store?.indexReducer?.popularPosts);

  if (popularPosts?.length) {
    return (
      <>
        <div className="hot-tags pt-30 pb-30 font-small align-self-center">
          <div className="widget-header-3">
            <div className="row align-self-center">
              <div className="col-md-4 align-self-center">
                <h5 className="widget-title">Bài viết nổi bật</h5>
              </div>
              <div className="col-md-8 text-md-right font-small align-self-center">
                <p className="d-inline-block mr-5 mb-0">
                  <i className="elegant-icon  icon_tag_alt mr-5 text-muted" />
                  Từ khoá tìm kiếm:
                </p>
                <ul className="list-inline d-inline-block tags">
                  <li className="list-inline-item">
                    <a href="#"># Covid-19</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"># Inspiration</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"># Work online</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"># Stay home</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="loop-grid mb-30">
          <div className="row">
            <div className="col-lg-8 mb-30">
              <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
                <div className="arrow-cover" />
                <div className="slide-fade">
                  <div className="position-relative post-thumb">
                    <div
                      className="thumb-overlay img-hover-slide position-relative"
                      style={{ backgroundImage: `url(${baseApiUrl}${popularPosts[0]?.thumbnail?.url})` }}
                    >
                      <a className="img-link" href={`/post/${popularPosts[0]?.id}`} />
                      <span className="top-left-icon bg-warning">
                        <i className="elegant-icon icon_star_alt" />
                      </span>
                      <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                        <div className="entry-meta meta-0 font-small mb-20">
                          {/* <a href="category.html.htm">
                            <span className="post-cat text-info text-uppercase">Travel</span>
                          </a> */}
                          <a href="category.html.htm">
                            <span className="post-cat text-success text-uppercase">
                              {popularPosts[0]?.topic?.topicName}
                            </span>
                          </a>
                        </div>
                        <h3 className="post-title font-weight-900 mb-20">
                          <a className="text-white" href={`/post/${popularPosts[0]?.id}`}>
                            {popularPosts[0]?.title}
                          </a>
                        </h3>
                        <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                          <span className="post-on">
                            {moment(popularPosts[0]?.published_at)?.format("DD/MM/YYYY HH:mm:ss")}
                          </span>
                          <span className="hit-count has-dot">{popularPosts[0]?.viewCount} lượt xem</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {popularPosts?.map((item, index) => {
              if (index === 0) return <></>;
              return (
                <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
                  <div className="post-card-1 border-radius-10 hover-up">
                    <div
                      className="post-thumb thumb-overlay img-hover-slide position-relative"
                      style={{ backgroundImage: "url(assets/imgs/news/news-1.jpg)" }}
                    >
                      <a className="img-link" href={`/post/${item?.id}`} />
                      <span className="top-right-icon bg-success">
                        <i className="elegant-icon icon_camera_alt" />
                      </span>
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
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        {/* <a href="category.html.htm">
                          <span className="post-cat text-info">Travel</span>
                        </a> */}
                        <a href={`/post/${item?.id}`}>
                          <span className="post-cat text-success">{item?.topic?.topicName}</span>
                        </a>
                      </div>
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 font-weight-900">
                          <a href={`/post/${item?.id}`}>{item?.title}</a>
                        </h5>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">
                            {moment(item?.published_at)?.format("DD/MM/YYYY HH:mm:ss")}
                          </span>
                          <span className="post-by has-dot">{item?.viewCount} lượt xem</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </>
    );
  }
  return <></>;
}
