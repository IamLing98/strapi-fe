import BlogCategory from "@/components/PopularTopic";
import baseApiUrl from "@/utils/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import categoryService from "services/categoryService";
import { fetchCategoryList, fetchPopularTopics } from "services/indexService";
import topicService from "services/topicService";
import { updateView } from "services/viewService";

export async function getStaticPaths(context) {
  const list = await fetchPopularTopics();

  // Return a list of possible value for id
  return {
    paths: list?.map((item) => {
      return { params: { id: `${item?.id}` } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { categoryId: params?.id } };
}

export default function TopicDetail({ categoryId }) {
  const [detail, setDetail] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryId) {
      let data = topicService
        .getDefault(categoryId)
        .then((data) => {
          setDetail(data);
          updateView(dispatch, "topics", data?.viewCount, data?.id);
        })
        .catch((err) => {});
    }
  }, [categoryId]);

  return (
    <>
      <div className="archive-header pt-50 text-center">
        <div className="container">
          <h2 className="font-weight-900">{detail?.categoryName}</h2>
          <div className="breadcrumb">
            <Link
              href={{
                pathname: "/",
              }}
              rel="nofollow"
            >
              Home
            </Link>
            <span /> Danh mục
          </div>
          <div className="bt-1 border-color-1 mt-30 mb-50" />
        </div>
      </div>
      {/* List topic */}
      <div className="container">
        <div class="widget-header-2 position-relative mb-30 mt-20">
          <h5 class="mt-5 mb-30">Danh sách chủ đề</h5>
        </div>
        <div class="row">
          {detail?.topics?.map((topic, index) => {
            return (
              <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.4s">
                <div className="post-card-1 border-radius-10 hover-up">
                  <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{ backgroundImage: `url( ${baseApiUrl}${topic?.thumbnail?.url} )` }}
                  >
                    <a className="img-link" href="single.html.htm" />
                    <span className="top-right-icon bg-info">
                      <i className="elegant-icon icon_headphones" />
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
                      <a href="category.html.htm">
                        <span className="post-cat text-success">{detail?.categoryName}</span>
                      </a>
                    </div>
                    <div className="d-flex post-card-content">
                      <h5 className="post-title mb-20 font-weight-900">
                        <a href="single.html.htm">{topic?.topicName}</a>
                      </h5>
                      <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                        <span className="post-on">15 Jun</span>
                        <span className="time-reading has-dot">9 mins read</span>
                        <span className="post-by has-dot">1.2k views</span>
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
