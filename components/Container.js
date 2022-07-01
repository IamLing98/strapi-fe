import Banner from "./Banner";
import BlogCategory from "./BlogCategory";

export default function Container() {
  return (
    <div className="container">
      <Banner />
      <BlogCategory />
      <div className="hot-tags pt-30 pb-30 font-small align-self-center">
        <div className="widget-header-3">
          <div className="row align-self-center">
            <div className="col-md-4 align-self-center">
              <h5 className="widget-title">Bài viết</h5>
            </div>
            <div className="col-md-8 text-md-right font-small align-self-center">
              <p className="d-inline-block mr-5 mb-0">
                <i className="elegant-icon icon_tag_alt mr-5 text-muted" />
                Từ khóa tìm kiếm:
              </p>
              <ul className="list-inline d-inline-block tags">
                <li className="list-inline-item">
                  <a href="#"># Covid-19</a>
                </li>
                <li className="list-inline-item">
                  <a href="#"># Inspiration</a>
                </li>
                <li className="list-inline-item">
                  <a href="#"># Làm remote</a>
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
                    style={{
                      backgroundImage: "url(assets/imgs/news/news-4.jpg)",
                    }}
                  >
                    <a className="img-link" href="single.html.htm" />
                    <span className="top-left-icon bg-warning">
                      <i className="elegant-icon icon_star_alt" />
                    </span>
                    <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                      <div className="entry-meta meta-0 font-small mb-20">
                        <a href="category.html.htm">
                          <span className="post-cat text-info text-uppercase">
                            Travel
                          </span>
                        </a>
                        <a href="category.html.htm">
                          <span className="post-cat text-success text-uppercase">
                            Animal
                          </span>
                        </a>
                      </div>
                      <h3 className="post-title font-weight-900 mb-20">
                        <a className="text-white" href="single.html.htm">
                          Beachmaster Elephant Seal Fights off Rival Male, The
                          match is uncompromising
                        </a>
                      </h3>
                      <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                        <span className="post-on">20 minutes ago</span>
                        <span className="hit-count has-dot">23k Views</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-relative post-thumb">
                  <div
                    className="thumb-overlay img-hover-slide position-relative"
                    style={{
                      backgroundImage: "url(assets/imgs/news/news-6.jpg)",
                    }}
                  >
                    <a className="img-link" href="single.html.htm" />
                    <span className="top-left-icon bg-danger">
                      <i className="elegant-icon icon_image" />
                    </span>
                    <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                      <div className="entry-meta meta-0 font-small mb-20">
                        <a href="category.html.htm">
                          <span className="post-cat text-info text-uppercase">
                            Lifestyle
                          </span>
                        </a>
                      </div>
                      <h3 className="post-title font-weight-900 mb-20">
                        <a className="text-white" href="single.html.htm">
                          This genius photo experiment shows we are all just
                          sheeple in the consumer matrix
                        </a>
                      </h3>
                      <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                        <span className="post-on">26 August 2020</span>
                        <span className="hit-count has-dot">18k Views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <article
            className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
            data-wow-delay="0.2s"
          >
            <div className="post-card-1 border-radius-10 hover-up">
              <div
                className="post-thumb thumb-overlay img-hover-slide position-relative"
                style={{ backgroundImage: "url(assets/imgs/news/news-1.jpg)" }}
              >
                <a className="img-link" href="single.html.htm" />
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
                    <a
                      className="fb"
                      href="#"
                      title="Share on Facebook"
                      target="_blank"
                    >
                      <i className="elegant-icon social_facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="tw"
                      href="#"
                      target="_blank"
                      title="Tweet now"
                    >
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
                    <span className="post-cat text-info">Travel</span>
                  </a>
                  <a href="category.html.htm">
                    <span className="post-cat text-success">Food</span>
                  </a>
                </div>
                <div className="d-flex post-card-content">
                  <h5 className="post-title mb-20 font-weight-900">
                    <a href="single.html.htm">
                      Want fluffy Japanese pancakes but can’t fly to Tokyo?
                    </a>
                  </h5>
                  <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                    <span className="post-on">27 August</span>
                    <span className="time-reading has-dot">12 mins read</span>
                    <span className="post-by has-dot">23k views</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated">
            <div className="post-card-1 border-radius-10 hover-up">
              <div
                className="post-thumb thumb-overlay img-hover-slide position-relative"
                style={{ backgroundImage: "url(assets/imgs/news/news-7.jpg)" }}
              >
                <a className="img-link" href="single.html.htm" />
                <ul className="social-share">
                  <li>
                    <a href="#">
                      <i className="elegant-icon social_share" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="fb"
                      href="#"
                      title="Share on Facebook"
                      target="_blank"
                    >
                      <i className="elegant-icon social_facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="tw"
                      href="#"
                      target="_blank"
                      title="Tweet now"
                    >
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
                    <span className="post-cat text-warning">Fashion</span>
                  </a>
                </div>
                <div className="d-flex post-card-content">
                  <h5 className="post-title mb-20 font-weight-900">
                    <a href="single.html.htm">
                      Put Yourself in Your Customers Shoes
                    </a>
                  </h5>
                  <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                    <span className="post-on">17 July</span>
                    <span className="time-reading has-dot">8 mins read</span>
                    <span className="post-by has-dot">12k views</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article
            className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
            data-wow-delay="0.2s"
          >
            <div className="post-card-1 border-radius-10 hover-up">
              <div
                className="post-thumb thumb-overlay img-hover-slide position-relative"
                style={{ backgroundImage: "url(assets/imgs/news/news-9.jpg)" }}
              >
                <a className="img-link" href="single.html.htm" />
                <ul className="social-share">
                  <li>
                    <a href="#">
                      <i className="elegant-icon social_share" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="fb"
                      href="#"
                      title="Share on Facebook"
                      target="_blank"
                    >
                      <i className="elegant-icon social_facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="tw"
                      href="#"
                      target="_blank"
                      title="Tweet now"
                    >
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
                    <span className="post-cat text-danger">Travel</span>
                  </a>
                </div>
                <div className="d-flex post-card-content">
                  <h5 className="post-title mb-20 font-weight-900">
                    <a href="single.html.htm">
                      Life and Death in the Empire of the Tiger
                    </a>
                  </h5>
                  <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                    <span className="post-on">7 August</span>
                    <span className="time-reading has-dot">15 mins read</span>
                    <span className="post-by has-dot">500 views</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article
            className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
            data-wow-delay="0.4s"
          >
            <div className="post-card-1 border-radius-10 hover-up">
              <div
                className="post-thumb thumb-overlay img-hover-slide position-relative"
                style={{ backgroundImage: "url(assets/imgs/news/news-11.jpg)" }}
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
                    <a
                      className="fb"
                      href="#"
                      title="Share on Facebook"
                      target="_blank"
                    >
                      <i className="elegant-icon social_facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="tw"
                      href="#"
                      target="_blank"
                      title="Tweet now"
                    >
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
                    <span className="post-cat text-success">Lifestyle</span>
                  </a>
                </div>
                <div className="d-flex post-card-content">
                  <h5 className="post-title mb-20 font-weight-900">
                    <a href="single.html.htm">
                      When Two Wheels Are Better Than Four
                    </a>
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
        </div>
      </div>
    </div>
  );
}
