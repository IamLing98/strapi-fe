export default function Index() {
  return (
    <>
      <div>
        <div className="main-search-form">
          <div className="container">
            <div className=" pt-50 pb-50 ">
              <div className="row mb-20">
                <div className="col-12 align-self-center main-search-form-cover m-auto">
                  <p className="text-center">
                    <span className="search-text-bg">Search</span>
                  </p>
                  <form action="#" className="search-header">
                    <div className="input-group w-100">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search stories, places and people"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-search bg-white" type="submit">
                          <i className="elegant-icon icon_search" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row mt-80 text-center">
                <div className="col-12 font-small suggested-area">
                  <h5 className="suggested font-heading mb-20 text-muted">
                    {" "}
                    <strong>Suggested keywords:</strong>
                  </h5>
                  <ul className="list-inline d-inline-block">
                    <li className="list-inline-item">
                      <a href="category.html.htm">World</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="category.html.htm">American</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="category.html.htm">Opinion</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="category.html.htm">Tech</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="category.html.htm">Science</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="category.html.htm">Books</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="category.html.htm">Travel</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="category.html.htm">Business</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-80">
                <div className="col-lg-4">
                  <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <a className="color-white" href="single.html.htm">
                        <img src="assets/imgs/news/thumb-2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="post-content media-body">
                      <h5>
                        {" "}
                        <a href="category.html.htm">Travel Tips</a>{" "}
                      </h5>
                      <p className="text-muted font-small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <a className="color-white" href="single.html.htm">
                        <img src="assets/imgs/news/thumb-4.jpg" alt="" />
                      </a>
                    </div>
                    <div className="post-content media-body">
                      <h5>
                        {" "}
                        <a href="category.html.htm">Lifestyle</a>{" "}
                      </h5>
                      <p className="text-muted font-small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4  col-md-6">
                  <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <a className="color-white" href="single.html.htm">
                        <img src="assets/imgs/news/thumb-3.jpg" alt="" />
                      </a>
                    </div>
                    <div className="post-content media-body">
                      <h5>
                        {" "}
                        <a href="category.html.htm">Hotel Review</a>{" "}
                      </h5>
                      <p className="text-muted font-small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Main content */}
        <main>
          <div className="featured-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <p className="text-muted">
                    <span
                      className="typewrite d-inline"
                      data-period={2000}
                      data-type='[ " Travel Blogger. ", "Content Writter. ", "Food Guides " ]'
                    />
                  </p>
                  <h2>
                    Hello, I’m <span>Steven</span>
                  </h2>
                  <h3 className="mb-20"> Welcome to my blog</h3>
                  <h5 className="text-muted">
                    Don't miss out on the latest news about Travel tips, Hotels review, Food guide...
                  </h5>
                  <form className="input-group form-subcriber mt-30 d-flex">
                    <input
                      type="email"
                      className="form-control bg-white font-small"
                      placeholder="Enter your email"
                    />
                    <button className="btn bg-primary text-white" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
                <div className="col-lg-6 text-right d-none d-lg-block">
                  <img src="assets/imgs/authors/featured.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="hot-tags pt-30 pb-30 font-small align-self-center">
              <div className="widget-header-3">
                <div className="row align-self-center">
                  <div className="col-md-4 align-self-center">
                    <h5 className="widget-title">Featured posts</h5>
                  </div>
                  <div className="col-md-8 text-md-right font-small align-self-center">
                    <p className="d-inline-block mr-5 mb-0">
                      <i className="elegant-icon  icon_tag_alt mr-5 text-muted" />
                      Hot tags:
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
                                <span className="post-cat text-info text-uppercase">Travel</span>
                              </a>
                              <a href="category.html.htm">
                                <span className="post-cat text-success text-uppercase">Animal</span>
                              </a>
                            </div>
                            <h3 className="post-title font-weight-900 mb-20">
                              <a className="text-white" href="single.html.htm">
                                Beachmaster Elephant Seal Fights off Rival Male, The match is uncompromising
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
                                <span className="post-cat text-info text-uppercase">Lifestyle</span>
                              </a>
                            </div>
                            <h3 className="post-title font-weight-900 mb-20">
                              <a className="text-white" href="single.html.htm">
                                This genius photo experiment shows we are all just sheeple in the consumer
                                matrix
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
                <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
                  <div className="post-card-1 border-radius-10 hover-up">
                    <div
                      className="post-thumb thumb-overlay img-hover-slide position-relative"
                      style={{
                        backgroundImage: "url(assets/imgs/news/news-1.jpg)",
                      }}
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
                      style={{
                        backgroundImage: "url(assets/imgs/news/news-7.jpg)",
                      }}
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
                      style={{
                        backgroundImage: "url(assets/imgs/news/news-9.jpg)",
                      }}
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
                      style={{
                        backgroundImage: "url(assets/imgs/news/news-11.jpg)",
                      }}
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
          </div>
          <div className="bg-grey pt-50 pb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="post-module-2">
                    <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
                      <h5 className="mt-5 mb-30">Travel tips</h5>
                    </div>
                    <div className="loop-list loop-list-style-1">
                      <div className="row">
                        <article className="col-md-6 mb-40 wow fadeInUp  animated">
                          <div className="post-card-1 border-radius-10 hover-up">
                            <div
                              className="post-thumb thumb-overlay img-hover-slide position-relative"
                              style={{
                                backgroundImage: "url(assets/imgs/news/news-6.jpg)",
                              }}
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
                                  <span className="post-cat text-info">Artists</span>
                                </a>
                                <a href="category.html.htm">
                                  <span className="post-cat text-success">Film</span>
                                </a>
                              </div>
                              <div className="d-flex post-card-content">
                                <h5 className="post-title mb-20 font-weight-900">
                                  <a href="single.html.htm">Easy Ways to Use Alternatives to Plastic</a>
                                </h5>
                                <div className="post-excerpt mb-25 font-small text-muted">
                                  <p>
                                    Graduating from a top accelerator or incubator can be as career-defining
                                    for a&nbsp;startup founder&nbsp;as an elite university diploma. The
                                    intensive programmes, which…
                                  </p>
                                </div>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">27 August</span>
                                  <span className="time-reading has-dot">12 mins read</span>
                                  <span className="post-by has-dot">23k views</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="col-md-6 mb-40 wow fadeInUp  animated">
                          <div className="post-card-1 border-radius-10 hover-up">
                            <div
                              className="post-thumb thumb-overlay img-hover-slide position-relative"
                              style={{
                                backgroundImage: "url(assets/imgs/news/news-8.jpg)",
                              }}
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
                                  <span className="post-cat">Fashion</span>
                                </a>
                              </div>
                              <div className="d-flex post-card-content">
                                <h5 className="post-title mb-20 font-weight-900">
                                  <a href="single.html.htm">Tips for Growing Healthy, Longer Hair</a>
                                </h5>
                                <div className="post-excerpt mb-25 font-small text-muted">
                                  <p>
                                    Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor
                                    ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin
                                    vitae placerat quam.
                                  </p>
                                </div>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">12 August</span>
                                  <span className="time-reading has-dot">6 mins read</span>
                                  <span className="post-by has-dot">3k views</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="col-md-6 mb-40 wow fadeInUp  animated">
                          <div className="post-card-1 border-radius-10 hover-up">
                            <div
                              className="post-thumb thumb-overlay img-hover-slide position-relative"
                              style={{
                                backgroundImage: "url(assets/imgs/news/news-10.jpg)",
                              }}
                            >
                              <a className="img-link" href="single.html.htm" />
                              <span className="top-right-icon bg-secondary">
                                <i className="elegant-icon icon_heart_alt" />
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
                                  <a href="single.html.htm">Project Ideas Around the House</a>
                                </h5>
                                <div className="post-excerpt mb-25 font-small text-muted">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
                                    condimentum metus non tempor. Maecenas non augue aliquam, facilisis lectus
                                    quis, lacinia risus.
                                  </p>
                                </div>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">27 August</span>
                                  <span className="time-reading has-dot">12 mins read</span>
                                  <span className="post-by has-dot">23k views</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="col-md-6 mb-40 wow fadeInUp  animated">
                          <div className="post-card-1 border-radius-10 hover-up">
                            <div
                              className="post-thumb thumb-overlay img-hover-slide position-relative"
                              style={{
                                backgroundImage: "url(assets/imgs/news/news-12.jpg)",
                              }}
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
                                  <span className="post-cat text-danger">Hotels</span>
                                </a>
                              </div>
                              <div className="d-flex post-card-content">
                                <h5 className="post-title mb-20 font-weight-900">
                                  <a href="single.html.htm">How to Give Yourself a Spa Day from Home</a>
                                </h5>
                                <div className="post-excerpt mb-25 font-small text-muted">
                                  <p>
                                    Graduating from a top accelerator or incubator can be as career-defining
                                    for a&nbsp;startup founder&nbsp;as an elite university diploma. The
                                    intensive programmes, which…
                                  </p>
                                </div>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">18 August</span>
                                  <span className="time-reading has-dot">14 mins read</span>
                                  <span className="post-by has-dot">25k views</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="post-module-3">
                    <div className="widget-header-1 position-relative mb-30">
                      <h5 className="mt-5 mb-30">Latest posts</h5>
                    </div>
                    <div className="loop-list loop-list-style-1">
                      <article className="hover-up-2 transition-normal wow fadeInUp animated">
                        <div className="row mb-40 list-style-2">
                          <div className="col-md-4">
                            <div className="post-thumb position-relative border-radius-5">
                              <div
                                className="img-hover-slide border-radius-5 position-relative"
                                style={{
                                  backgroundImage: "url(assets/imgs/news/news-13.jpg)",
                                }}
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
                                <a href="single.html.htm">
                                  Helpful Tips for Working from Home as a Freelancer
                                </a>
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
                      <article className="hover-up-2 transition-normal wow fadeInUp animated">
                        <div className="row mb-40 list-style-2">
                          <div className="col-md-4">
                            <div className="post-thumb position-relative border-radius-5">
                              <div
                                className="img-hover-slide border-radius-5 position-relative"
                                style={{
                                  backgroundImage: "url(assets/imgs/news/news-4.jpg)",
                                }}
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
                                <a href="single.html.htm">
                                  10 Easy Ways to Be Environmentally Conscious At Home
                                </a>
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
                      <article className="hover-up-2 transition-normal wow fadeInUp animated">
                        <div className="row mb-40 list-style-2">
                          <div className="col-md-4">
                            <div className="post-thumb position-relative border-radius-5">
                              <div
                                className="img-hover-slide border-radius-5 position-relative"
                                style={{
                                  backgroundImage: "url(assets/imgs/news/news-2.jpg)",
                                }}
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
                                  <span className="post-cat text-warning">Cooking</span>
                                </a>
                              </div>
                              <h5 className="post-title font-weight-900 mb-20">
                                <a href="single.html.htm">My Favorite Comfies to Lounge in At Home</a>
                              </h5>
                              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                <span className="post-on">7 August</span>
                                <span className="time-reading has-dot">9 mins read</span>
                                <span className="post-by has-dot">12k views</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="hover-up-2 transition-normal wow fadeInUp animated">
                        <div className="row mb-40 list-style-2">
                          <div className="col-md-4">
                            <div className="post-thumb position-relative border-radius-5">
                              <div
                                className="img-hover-slide border-radius-5 position-relative"
                                style={{
                                  backgroundImage: "url(assets/imgs/news/news-3.jpg)",
                                }}
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
                                  <span className="post-cat text-danger">Travel</span>
                                </a>
                              </div>
                              <h5 className="post-title font-weight-900 mb-20">
                                <a href="single.html.htm">
                                  How to Give Your Space a Parisian-Inspired Makeover
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
                    </div>
                  </div>
                  <div className="pagination-area mb-30 wow fadeInUp animated">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-start">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <i className="elegant-icon arrow_left" />
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            01
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            02
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            03
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            04
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <i className="elegant-icon arrow_right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="widget-area">
                    <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
                      <img className="about-author-img mb-25" src="assets/imgs/authors/author.jpg" alt="" />
                      <h5 className="mb-20">Hello, I'm Steven</h5>
                      <p className="font-medium text-muted">
                        Hi, I’m Stenven, a Florida native, who left my career in corporate wealth management
                        six years ago to embark on a summer of soul searching that would change the course of
                        my life forever.
                      </p>
                      <strong>Follow me: </strong>
                      <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                        <li className="list-inline-item">
                          <a className="fb" href="#" target="_blank" title="Facebook">
                            <i className="elegant-icon social_facebook" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="tw" href="#" target="_blank" title="Tweet now">
                            <i className="elegant-icon social_twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="pt" href="#" target="_blank" title="Pin it">
                            <i className="elegant-icon social_pinterest" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                      <div className="widget-header-1 position-relative mb-30">
                        <h5 className="mt-5 mb-30">Most popular</h5>
                      </div>
                      <div className="post-block-list post-module-1">
                        <ul className="list-post">
                          <li className="mb-30 wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-content media-body">
                                <h5 className="post-title mb-15 text-limit-2-row font-medium">
                                  <a href="single.html.htm">
                                    Spending Some Quality Time with Kids? It’s Possible
                                  </a>
                                </h5>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">05 August</span>
                                  <span className="post-by has-dot">150 views</span>
                                </div>
                              </div>
                              <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                <a className="color-white" href="single.html.htm">
                                  <img src="assets/imgs/news/thumb-6.jpg" alt="" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="mb-30 wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-content media-body">
                                <h5 className="post-title mb-15 text-limit-2-row font-medium">
                                  <a href="single.html.htm">Relationship Podcasts are Having “That” Talk</a>
                                </h5>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">12 August</span>
                                  <span className="post-by has-dot">6k views</span>
                                </div>
                              </div>
                              <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                <a className="color-white" href="single.html.htm">
                                  <img src="assets/imgs/news/thumb-7.jpg" alt="" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="mb-30 wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-content media-body">
                                <h5 className="post-title mb-15 text-limit-2-row font-medium">
                                  <a href="single.html.htm">Here’s How to Get the Best Sleep at Night</a>
                                </h5>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">15 August</span>
                                  <span className="post-by has-dot">16k views</span>
                                </div>
                              </div>
                              <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                <a className="color-white" href="single.html.htm">
                                  <img src="assets/imgs/news/thumb-2.jpg" alt="" />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className=" wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-content media-body">
                                <h5 className="post-title mb-15 text-limit-2-row font-medium">
                                  <a href="single.html.htm">
                                    America’s Governors Get Tested for a Virus That Is Testing Them
                                  </a>
                                </h5>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">12 August</span>
                                  <span className="post-by has-dot">3k views</span>
                                </div>
                              </div>
                              <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                <a className="color-white" href="single.html.htm">
                                  <img src="assets/imgs/news/thumb-3.jpg" alt="" />
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                      <div className="widget-header-1 position-relative mb-30">
                        <h5 className="mt-5 mb-30">Last comments</h5>
                      </div>
                      <div className="post-block-list post-module-2">
                        <ul className="list-post">
                          <li className="mb-30 wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                <a className="color-white" href="single.html.htm">
                                  <img src="assets/imgs/authors/author-2.jpg" alt="" />
                                </a>
                              </div>
                              <div className="post-content media-body">
                                <p className="mb-10">
                                  <a href="author.html">
                                    <strong>David</strong>
                                  </a>
                                  <span className="ml-15 font-small text-muted has-dot">16 Jan 2020</span>
                                </p>
                                <p className="text-muted font-small">
                                  A writer is someone for whom writing is more difficult than...
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="mb-30 wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                <a className="color-white" href="single.html.htm">
                                  <img src="assets/imgs/authors/author-3.jpg" alt="" />
                                </a>
                              </div>
                              <div className="post-content media-body">
                                <p className="mb-10">
                                  <a href="author.html">
                                    <strong>Kokawa</strong>
                                  </a>
                                  <span className="ml-15 font-small text-muted has-dot">12 Feb 2020</span>
                                </p>
                                <p className="text-muted font-small">
                                  Striking pewter studded epaulettes silver zips
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="wow fadeInUp animated">
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                <a className="color-white" href="single.html.htm">
                                  <img src="assets/imgs/news/thumb-1.jpg" alt="" />
                                </a>
                              </div>
                              <div className="post-content media-body">
                                <p className="mb-10">
                                  <a href="author.html">
                                    <strong>Tsukasi</strong>
                                  </a>
                                  <span className="ml-15 font-small text-muted has-dot">18 May 2020</span>
                                </p>
                                <p className="text-muted font-small">
                                  Workwear bow detailing a slingback buckle strap
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sidebar-widget widget_instagram wow fadeInUp animated">
                      <div className="widget-header-1 position-relative mb-30">
                        <h5 className="mt-5 mb-30">Instagram</h5>
                      </div>
                      <div className="instagram-gellay">
                        <ul className="insta-feed">
                          <li>
                            <a
                              href="assets/imgs/thumbnail-3.jpg"
                              className="play-video"
                              data-animate="zoomIn"
                              data-duration="1.5s"
                              data-delay="0.1s"
                            >
                              <img className="border-radius-5" src="assets/imgs/news/thumb-1.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/imgs/thumbnail-4.jpg"
                              className="play-video"
                              data-animate="zoomIn"
                              data-duration="1.5s"
                              data-delay="0.1s"
                            >
                              <img className="border-radius-5" src="assets/imgs/news/thumb-2.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/imgs/thumbnail-5.jpg"
                              className="play-video"
                              data-animate="zoomIn"
                              data-duration="1.5s"
                              data-delay="0.1s"
                            >
                              <img className="border-radius-5" src="assets/imgs/news/thumb-3.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/imgs/thumbnail-3.jpg"
                              className="play-video"
                              data-animate="zoomIn"
                              data-duration="1.5s"
                              data-delay="0.1s"
                            >
                              <img className="border-radius-5" src="assets/imgs/news/thumb-4.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/imgs/thumbnail-4.jpg"
                              className="play-video"
                              data-animate="zoomIn"
                              data-duration="1.5s"
                              data-delay="0.1s"
                            >
                              <img className="border-radius-5" src="assets/imgs/news/thumb-5.jpg" alt="" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="assets/imgs/thumbnail-5.jpg"
                              className="play-video"
                              data-animate="zoomIn"
                              data-duration="1.5s"
                              data-delay="0.1s"
                            >
                              <img className="border-radius-5" src="assets/imgs/news/thumb-6.jpg" alt="" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* End Main content */}
        {/*site-bottom*/}
        <div className="site-bottom pt-50 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated">
                  <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Destinations</h5>
                  </div>
                  <div className="post-block-list post-module-1">
                    <ul className="list-post">
                      <li className="mb-30">
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html.htm">
                              <img src="assets/imgs/news/thumb-1.jpg" alt="" />
                            </a>
                          </div>
                          <div className="post-content media-body">
                            <h5 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="single.html.htm">The Best Time to Travel to Cambodia</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">27 Jan</span>
                              <span className="post-by has-dot">13k views</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="mb-30">
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html.htm">
                              <img src="assets/imgs/news/thumb-2.jpg" alt="" />
                            </a>
                          </div>
                          <div className="post-content media-body">
                            <h5 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="single.html.htm">20 Photos to Inspire You to Visit Cambodia</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">27 August</span>
                              <span className="post-by has-dot">14k views</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="mb-30">
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html.htm">
                              <img src="assets/imgs/news/thumb-3.jpg" alt="" />
                            </a>
                          </div>
                          <div className="post-content media-body">
                            <h5 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="single.html.htm">Epic Arts Cambodia: Charity for the Disabled</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">29 August</span>
                              <span className="post-by has-dot">23k views</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated"
                  data-wow-delay="0.2s"
                >
                  <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Lifestyle</h5>
                  </div>
                  <div className="post-block-list post-module-1">
                    <ul className="list-post">
                      <li className="mb-30">
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html.htm">
                              <img src="assets/imgs/news/thumb-4.jpg" alt="" />
                            </a>
                          </div>
                          <div className="post-content media-body">
                            <h5 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="single.html.htm">10 Ways to De-Stress Your Day Hour by Hour</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">12 August</span>
                              <span className="post-by has-dot">3k views</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="mb-30">
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html.htm">
                              <img src="assets/imgs/news/thumb-5.jpg" alt="" />
                            </a>
                          </div>
                          <div className="post-content media-body">
                            <h5 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="single.html.htm">134 Free Weekly Meal Planner Printable</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">15 August</span>
                              <span className="post-by has-dot">4.1k views</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="mb-30">
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html.htm">
                              <img src="assets/imgs/news/thumb-6.jpg" alt="" />
                            </a>
                          </div>
                          <div className="post-content media-body">
                            <h5 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="single.html.htm">Free Printable Stickers for Your Bullet Journal</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">16 August</span>
                              <span className="post-by has-dot">2.2k views</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated"
                  data-wow-delay="0.4s"
                >
                  <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Photography</h5>
                  </div>
                  <div className="post-block-list post-module-1">
                    <ul className="list-post">
                      <li className="mb-30">
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html.htm">
                              <img src="assets/imgs/news/thumb-7.jpg" alt="" />
                            </a>
                          </div>
                          <div className="post-content media-body">
                            <h5 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="single.html.htm">Which TBA Preset Pack is Right For You?</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">06 May</span>
                              <span className="post-by has-dot">23k views</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="mb-30">
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html.htm">
                              <img src="assets/imgs/news/thumb-8.jpg" alt="" />
                            </a>
                          </div>
                          <div className="post-content media-body">
                            <h5 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="single.html.htm">How to Get Amazing Photos at the Pyramids of Giza</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">05 Jun</span>
                              <span className="post-by has-dot">5k views</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="mb-30">
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html.htm">
                              <img src="assets/imgs/news/thumb-9.jpg" alt="" />
                            </a>
                          </div>
                          <div className="post-content media-body">
                            <h5 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="single.html.htm">Beginner’s Guide to Travel Drone Photography</a>
                            </h5>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">08 August</span>
                              <span className="post-by has-dot">2k views</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-widget widget-latest-posts mb-30 mt-20 wow fadeInUp animated">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Categories</h5>
              </div>
              <div className="carausel-3-columns">
                <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                  <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                    <a className="color-white" href="single.html.htm">
                      <img src="assets/imgs/news/thumb-1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <h5>
                      {" "}
                      <a href="category.html.htm">Travel Tips</a>{" "}
                    </h5>
                    <p className="text-muted font-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                  <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                    <a className="color-white" href="single.html.htm">
                      <img src="assets/imgs/news/thumb-2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <h5>
                      <a href="category.html.htm">Lifestyle</a>
                    </h5>
                    <p className="text-muted font-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                  <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                    <a className="color-white" href="single.html.htm">
                      <img src="assets/imgs/news/thumb-3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <h5>
                      <a href="category.html.htm">Foody</a>
                    </h5>
                    <p className="text-muted font-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                  <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                    <a className="color-white" href="single.html.htm">
                      <img src="assets/imgs/news/thumb-4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <h5>
                      <a href="category.html.htm">Entertaiment</a>
                    </h5>
                    <p className="text-muted font-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*container*/}
        </div>
        {/*end site-bottom*/}
        {/* Footer Start*/}
        <footer className="pt-50 pb-20 bg-grey">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="sidebar-widget wow fadeInUp animated mb-30">
                  <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">About me</h5>
                  </div>
                  <div className="textwidget">
                    <p>
                      Start writing, no matter what. The water does not flow until the faucet is turned on.
                    </p>
                    <p>
                      <strong className="color-black">Address</strong>
                      <br />
                      123 Main Street
                      <br />
                      New York, NY 10001
                    </p>
                    <p>
                      <strong className="color-black">Follow me</strong>
                      <br />
                    </p>
                    <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                      <li className="list-inline-item">
                        <a className="fb" href="#" target="_blank" title="Facebook">
                          <i className="elegant-icon social_facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="tw" href="#" target="_blank" title="Tweet now">
                          <i className="elegant-icon social_twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="pt" href="#" target="_blank" title="Pin it">
                          <i className="elegant-icon social_pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div
                  className="sidebar-widget widget_categories wow fadeInUp animated mb-30"
                  data-wow-delay="0.1s"
                >
                  <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Quick link</h5>
                  </div>
                  <ul className="font-small">
                    <li className="cat-item cat-item-2">
                      <a href="#">About me</a>
                    </li>
                    <li className="cat-item cat-item-4">
                      <a href="#">Help &amp; Support</a>
                    </li>
                    <li className="cat-item cat-item-5">
                      <a href="#">​​Licensing Policy</a>
                    </li>
                    <li className="cat-item cat-item-6">
                      <a href="#">Refund Policy</a>
                    </li>
                    <li className="cat-item cat-item-7">
                      <a href="#">Hire me</a>
                    </li>
                    <li className="cat-item cat-item-7">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30"
                  data-wow-delay="0.2s"
                >
                  <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Tagcloud</h5>
                  </div>
                  <div className="tagcloud mt-50">
                    <a className="tag-cloud-link" href="category.html.htm">
                      beautiful
                    </a>
                    <a className="tag-cloud-link" href="category.html.htm">
                      New York
                    </a>
                    <a className="tag-cloud-link" href="category.html.htm">
                      droll
                    </a>
                    <a className="tag-cloud-link" href="category.html.htm">
                      intimate
                    </a>
                    <a className="tag-cloud-link" href="category.html.htm">
                      loving
                    </a>
                    <a className="tag-cloud-link" href="category.html.htm">
                      travel
                    </a>
                    <a className="tag-cloud-link" href="category.html.htm">
                      fighting{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="sidebar-widget widget_newsletter wow fadeInUp animated mb-30"
                  data-wow-delay="0.3s"
                >
                  <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Newsletter</h5>
                  </div>
                  <div className="newsletter">
                    <p className="font-medium">
                      Subscribe to our newsletter and get our newest updates right on your inbox.
                    </p>
                    <form className="input-group form-subcriber mt-30 d-flex">
                      <input
                        type="email"
                        className="form-control bg-white font-small"
                        placeholder="Enter your email"
                      />
                      <button className="btn bg-primary text-white" type="submit">
                        Subscribe
                      </button>
                      <label className="mt-20">
                        {" "}
                        <input className="mr-5" name="name" type="checkbox" defaultValue={1} required /> I
                        agree to the{" "}
                        <a href="#" target="_blank">
                          terms &amp; conditions
                        </a>{" "}
                      </label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
              <p className="float-md-left font-small text-muted">
                © 2020, Stories - Personal Blog HTML Template{" "}
              </p>
              <p className="float-md-right font-small text-muted">
                Design by{" "}
                <a href="../../../index.htm" target="_blank">
                  AliThemes
                </a>{" "}
                | All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
