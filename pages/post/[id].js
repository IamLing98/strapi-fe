import BlogCategory from "@/components/PopularTopic";
import baseApiUrl from "@/utils/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import categoryService from "services/categoryService";
import { fetchCategoryList, fetchPopularPost, fetchPopularTopics } from "services/indexService";
import postService from "services/postService";
import topicService from "services/topicService";
import { updateView } from "services/viewService";
import moment from "moment";
import draftToHtml from "@/utils/draftToHtml";
import ReactMarkdown from "react-markdown";

export async function getStaticPaths(context) {
  const list = await fetchPopularPost();

  // Return a list of possible value for id
  return {
    paths: list?.map((item) => {
      return { params: { id: `${item?.id}` } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { id: params?.id } };
}

export default function PostDetail({ id }) {
  const [post, setDetail] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      let data = postService
        .getDefault(id)
        .then((data) => {
          setDetail(data);
          updateView(dispatch, "posts", data?.viewCount, data?.id);
        })
        .catch((err) => {});
    }
  }, [id]);

  return (
    <main className="bg-grey pb-30">
      <div className="container single-content">
        <div className="entry-header entry-header-style-1 mb-50 pt-50">
          <h1 className="entry-title mb-50 font-weight-900">{post?.title}</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="entry-meta align-items-center meta-2 font-small color-muted">
                <p className="mb-5">
                  <a className="author-avatar" href="#">
                    <img className="img-circle" src="assets/imgs/authors/author-3.jpg" alt />
                  </a>
                  Tác giả{" "}
                  <a href="author.html">
                    <span className="author-name font-weight-bold">
                      {post?.created_by?.firstname + post?.created_by?.lastname}
                    </span>
                  </a>
                </p>
                <span className="mr-10"> {moment(post?.published_at)?.format("DD/MM/YYYY HH:mm:ss")}</span>
                <span className="has-dot"> {post?.viewCount} lượt xem</span>
              </div>
            </div>
            <div className="col-md-6 text-right d-none d-md-inline">
              <ul className="header-social-network d-inline-block list-inline mr-15">
                <li className="list-inline-item text-muted">
                  <span>Chia sẻ: </span>
                </li>
                <li className="list-inline-item">
                  <a className="social-icon fb text-xs-center" target="_blank" href="#">
                    <i className="elegant-icon social_facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="social-icon tw text-xs-center" target="_blank" href="#">
                    <i className="elegant-icon social_twitter " />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="social-icon pt text-xs-center" target="_blank" href="#">
                    <i className="elegant-icon social_pinterest " />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*end single header*/}
        <figure className=" entry-header entry-header-style-1   image mb-30 m-auto text-center border-radius-10">
          <img className="border-radius-10" src={`${baseApiUrl}${post?.thumbnail?.url}`} alt="post-title" />
        </figure>
        {/*figure*/}
        <article className="entry-wraper mb-50">
          <ReactMarkdown>{post?.content}</ReactMarkdown>

          <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
            <div className="tags">
              <span>Tags: </span>
              <a href="category.html.htm" rel="tag">
                deer
              </a>
              <a href="category.html.htm" rel="tag">
                nature
              </a>
              <a href="category.html.htm" rel="tag">
                conserve
              </a>
            </div>
          </div>
          <div className="single-social-share clearfix wow fadeIn animated">
            <div className="entry-meta meta-1 font-small color-grey float-left mt-10">
              <span className="hit-count mr-15">
                <i className="elegant-icon icon_comment_alt mr-5" />
                182 bình luận
              </span>
              <span className="hit-count mr-15">
                <i className="elegant-icon icon_like mr-5" />
                268 lượt thích
              </span>
            </div>
            <ul className="header-social-network d-inline-block list-inline float-md-right mt-md-0 mt-4">
              <li className="list-inline-item text-muted">
                <span>Chia sẻ: </span>
              </li>
              <li className="list-inline-item">
                <a className="social-icon fb text-xs-center" target="_blank" href="#">
                  <i className="elegant-icon social_facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-icon tw text-xs-center" target="_blank" href="#">
                  <i className="elegant-icon social_twitter " />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-icon pt text-xs-center" target="_blank" href="#">
                  <i className="elegant-icon social_pinterest " />
                </a>
              </li>
            </ul>
          </div>
          {/*author box*/}
          <div className="author-bio p-30 mt-50 border-radius-10 bg-white wow fadeIn animated">
            <div className="author-image mb-30">
              <a href="author.html">
                <img src="assets/imgs/authors/author-3.jpg" alt className="avatar" />
              </a>
            </div>
            <div className="author-info">
              <h4 className="font-weight-bold mb-20">
                <span className="vcard author">
                  <span className="fn">
                    <a href="author.html" title="Posted by Barbara Cartland" rel="author">
                      {post?.created_by?.firstname + post?.created_by?.lastname}
                    </a>
                  </span>
                </span>
              </h4>
              <h5 className="text-muted">Thông tin tác giả</h5>
              <div className="author-description text-muted">
                You should write because you love the shape of stories and sentences and the creation of
                different words on a page.{" "}
              </div>
              <a href="author.html" className="author-bio-link mb-md-0 mb-3">
                Xem tất cả bài viết của tác giả(125)
              </a>
              <div className="author-social">
                <ul className="author-social-icons">
                  <li className="author-social-link-facebook">
                    <a href="#" target="_blank">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li className="author-social-link-twitter">
                    <a href="#" target="_blank">
                      <i className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li className="author-social-link-pinterest">
                    <a href="#" target="_blank">
                      <i className="ti-pinterest" />
                    </a>
                  </li>
                  <li className="author-social-link-instagram">
                    <a href="#" target="_blank">
                      <i className="ti-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*Bài viết liên quan*/}
          <div className="related-posts">
            <div className="post-module-3">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Bài viết liên quan</h5>
              </div>
              <div className="loop-list loop-list-style-1">
                <article className="hover-up-2 transition-normal wow fadeInUp  animated">
                  <div className="row mb-40 list-style-2">
                    <div className="col-md-4">
                      <div className="post-thumb position-relative border-radius-5">
                        <div
                          className="img-hover-slide border-radius-5 position-relative"
                          style={{ backgroundImage: "url(assets/imgs/news/news-13.jpg)" }}
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
                            <span className="post-cat text-primary">Food</span>
                          </a>
                        </div>
                        <h5 className="post-title font-weight-900 mb-20">
                          <a href="single.html.htm">Helpful Tips for Working from Home as a Freelancer</a>
                          <span className="post-format-icon">
                            <i className="elegant-icon icon_star_alt" />
                          </span>
                        </h5>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">7 August</span>
                          <span className="time-reading has-dot">11 mins read</span>
                          <span className="post-by has-dot">3k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="hover-up-2 transition-normal wow fadeInUp  animated">
                  <div className="row mb-40 list-style-2">
                    <div className="col-md-4">
                      <div className="post-thumb position-relative border-radius-5">
                        <div
                          className="img-hover-slide border-radius-5 position-relative"
                          style={{ backgroundImage: "url(assets/imgs/news/news-4.jpg)" }}
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
                            <span className="post-cat text-success">Cooking</span>
                          </a>
                        </div>
                        <h5 className="post-title font-weight-900 mb-20">
                          <a href="single.html.htm">10 Easy Ways to Be Environmentally Conscious At Home</a>
                        </h5>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <span className="post-on">27 Sep</span>
                          <span className="time-reading has-dot">10 mins read</span>
                          <span className="post-by has-dot">22k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          {/*More posts*/}
          <div className="single-more-articles border-radius-5">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">You might be interested in</h5>
              <button className="single-more-articles-close">
                <i className="elegant-icon icon_close" />
              </button>
            </div>
            <div className="post-block-list post-module-1 post-module-5">
              <ul className="list-post">
                <li className="mb-30">
                  <div className="d-flex hover-up-2 transition-normal">
                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <a className="color-white" href="single.html.htm">
                        <img src="assets/imgs/news/thumb-1.jpg" alt />
                      </a>
                    </div>
                    <div className="post-content media-body">
                      <h6 className="post-title mb-15 text-limit-2-row font-medium">
                        <a href="single.html.htm">The Best Time to Travel to Cambodia</a>
                      </h6>
                      <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                        <span className="post-on">27 Jan</span>
                        <span className="post-by has-dot">13k views</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-10">
                  <div className="d-flex hover-up-2 transition-normal">
                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <a className="color-white" href="single.html.htm">
                        <img src="assets/imgs/news/thumb-2.jpg" alt />
                      </a>
                    </div>
                    <div className="post-content media-body">
                      <h6 className="post-title mb-15 text-limit-2-row font-medium">
                        <a href="single.html.htm">20 Photos to Inspire You to Visit Cambodia</a>
                      </h6>
                      <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                        <span className="post-on">27 August</span>
                        <span className="post-by has-dot">14k views</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*bình luận*/}
          <div className="bình luận-area">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">bình luận</h5>
            </div>
            <div className="comment-list wow fadeIn animated">
              <div className="single-comment justify-content-between d-flex">
                <div className="user justify-content-between d-flex">
                  <div className="thumb">
                    <img src="assets/imgs/authors/author-4.jpg" alt />
                  </div>
                  <div className="desc">
                    <p className="comment">
                      Vestibulum euismod, leo eget varius gravida, eros enim interdum urna, non rutrum enim
                      ante quis metus. Duis porta ornare nulla ut bibendum
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <h5>
                          <a href="#">Rosie</a>
                        </h5>
                        <p className="date">6 minutes ago </p>
                      </div>
                      <div className="reply-btn">
                        <a href="#" className="btn-reply">
                          Trả lời
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-list wow fadeIn animated">
              <div className="single-comment justify-content-between d-flex">
                <div className="user justify-content-between d-flex">
                  <div className="thumb">
                    <img src="assets/imgs/authors/author-2.jpg" alt />
                  </div>
                  <div className="desc">
                    <p className="comment">
                      Sed ac lorem felis. Ut in odio lorem. Quisque magna dui, maximus ut commodo sed,
                      vestibulum ac nibh. Aenean a tortor in sem tempus auctor
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <h5>
                          <a href="#">Agatha Christie</a>
                        </h5>
                        <p className="date">December 4, 2020 at 3:12 pm </p>
                      </div>
                      <div className="reply-btn">
                        <a href="#" className="btn-reply">
                          Trả lời
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-comment depth-2 justify-content-between d-flex mt-50">
                <div className="user justify-content-between d-flex">
                  <div className="thumb">
                    <img src="assets/imgs/authors/author.jpg" alt />
                  </div>
                  <div className="desc">
                    <p className="comment">
                      Sed ac lorem felis. Ut in odio lorem. Quisque magna dui, maximus ut commodo sed,
                      vestibulum ac nibh. Aenean a tortor in sem tempus auctor
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <h5>
                          <a href="#">Steven</a>
                        </h5>
                        <p className="date">December 4, 2020 at 3:12 pm </p>
                      </div>
                      <div className="reply-btn">
                        <a href="#" className="btn-reply">
                          Trả lời
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-list wow fadeIn animated">
              <div className="single-comment justify-content-between d-flex">
                <div className="user justify-content-between d-flex">
                  <div className="thumb">
                    <img src="assets/imgs/authors/author-3.jpg" alt />
                  </div>
                  <div className="desc">
                    <p className="comment">
                      Donec in ullamcorper quam. Aenean vel nibh eu magna gravida fermentum. Praesent eget
                      nisi pulvinar, sollicitudin eros vitae, tristique odio.
                    </p>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <h5>
                          <a href="#">Danielle Steel</a>
                        </h5>
                        <p className="date">December 4, 2020 at 3:12 pm </p>
                      </div>
                      <div className="reply-btn">
                        <a href="#" className="btn-reply">
                          Trả lời
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*comment form*/}
          <div className="comment-form wow fadeIn animated">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">Bình luận</h5>
            </div>
            <form className="form-contact comment_form" action="#" id="commentForm">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100"
                      name="comment"
                      id="comment"
                      cols={30}
                      rows={9}
                      placeholder="Viết bình luận"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Họ và tên"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                v
              </div>
              <div className="form-group">
                <button type="submit" className="btn button button-contactForm">
                  Gửi bình luận
                </button>
              </div>
            </form>
          </div>
        </article>
      </div>
    </main>
  );
}
