import { useDispatch } from "react-redux";

export default function Posts() {

    const dispatch = useDispatch()

    const state = {}
  return (
    <>
      <div className="hot-tags pt-30 pb-30 font-small align-self-center">
        <div className="widget-header-3">
          <div className="row align-self-center">
            <div className="col-md-4 align-self-center">
              <h5 className="widget-title">Nội dung mới nhất</h5>
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
          <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
            <div className="post-card-1 border-radius-10 hover-up">
              <div
                className="post-thumb thumb-overlay img-hover-slide position-relative"
                style={{ backgroundImage: "url(/static/assets/template/imgs/news/news-1.jpg)" }}
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
                    <span className="post-cat text-info">Travel</span>
                  </a>
                  <a href="category.html.htm">
                    <span className="post-cat text-success">Food</span>
                  </a>
                </div>
                <div className="d-flex post-card-content">
                  <h5 className="post-title mb-20 font-weight-900">
                    <a href="single.html.htm">Want fluffy Japanese pancakes but can’t fly to Tokyo?</a>
                  </h5>
                  <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                    <span className="post-on">27 August</span>
                    <span className="time-reading has-dot">12 mins read</span>
                    <span className="post-by has-dot">23k views</span>
                  </div>
                </div>
              </div>
            </div>
          </article>{" "}
          <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
            <div className="post-card-1 border-radius-10 hover-up">
              <div
                className="post-thumb thumb-overlay img-hover-slide position-relative"
                style={{ backgroundImage: "url(/static/assets/template/imgs/news/news-1.jpg)" }}
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
                    <span className="post-cat text-info">Travel</span>
                  </a>
                  <a href="category.html.htm">
                    <span className="post-cat text-success">Food</span>
                  </a>
                </div>
                <div className="d-flex post-card-content">
                  <h5 className="post-title mb-20 font-weight-900">
                    <a href="single.html.htm">Want fluffy Japanese pancakes but can’t fly to Tokyo?</a>
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
          <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
            <div className="post-card-1 border-radius-10 hover-up">
              <div
                className="post-thumb thumb-overlay img-hover-slide position-relative"
                style={{ backgroundImage: "url(/static/assets/template/imgs/news/news-1.jpg)" }}
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
                    <span className="post-cat text-info">Travel</span>
                  </a>
                  <a href="category.html.htm">
                    <span className="post-cat text-success">Food</span>
                  </a>
                </div>
                <div className="d-flex post-card-content">
                  <h5 className="post-title mb-20 font-weight-900">
                    <a href="single.html.htm">Want fluffy Japanese pancakes but can’t fly to Tokyo?</a>
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
                style={{ backgroundImage: "url(/static/assets/template/imgs/news/news-7.jpg)" }}
              >
                <a className="img-link" href="single.html.htm" />
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
                    <span className="post-cat text-warning">Fashion</span>
                  </a>
                </div>
                <div className="d-flex post-card-content">
                  <h5 className="post-title mb-20 font-weight-900">
                    <a href="single.html.htm">Put Yourself in Your Customers Shoes</a>
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
          <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
            <div className="post-card-1 border-radius-10 hover-up">
              <div
                className="post-thumb thumb-overlay img-hover-slide position-relative"
                style={{ backgroundImage: "url(/static/assets/template/imgs/news/news-9.jpg)" }}
              >
                <a className="img-link" href="single.html.htm" />
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
                    <span className="post-cat text-danger">Travel</span>
                  </a>
                </div>
                <div className="d-flex post-card-content">
                  <h5 className="post-title mb-20 font-weight-900">
                    <a href="single.html.htm">Life and Death in the Empire of the Tiger</a>
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
          <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.4s">
            <div className="post-card-1 border-radius-10 hover-up">
              <div
                className="post-thumb thumb-overlay img-hover-slide position-relative"
                style={{ backgroundImage: "url(/static/assets/template/imgs/news/news-11.jpg)" }}
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
                    <span className="post-cat text-success">Lifestyle</span>
                  </a>
                </div>
                <div className="d-flex post-card-content">
                  <h5 className="post-title mb-20 font-weight-900">
                    <a href="single.html.htm">When Two Wheels Are Better Than Four</a>
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
    </>
  );
}
