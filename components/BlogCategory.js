export default function BlogCategory() {
  return (
    <>
      <div className="sidebar-widget widget-latest-posts mb-30 mt-20 wow fadeInUp animated">
        <div className="widget-header-2 position-relative mb-30">
          <h5 className="mt-5 mb-30">Categories</h5>
        </div>
        <div className="carausel-3-columns">
          <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
              <a className="color-white" href="single.html.htm">
                <img src="assets/imgs/news/thumb-1.jpg" alt />
              </a>
            </div>
            <div className="post-content media-body">
              <h6>
                <a href="category.html.htm">Travel Tips</a>
              </h6>
              <p className="text-muted font-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
              <a className="color-white" href="single.html.htm">
                <img src="assets/imgs/news/thumb-2.jpg" alt />
              </a>
            </div>
            <div className="post-content media-body">
              <h6>
                <a href="category.html.htm">Lifestyle</a>
              </h6>
              <p className="text-muted font-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
              <a className="color-white" href="single.html.htm">
                <img src="assets/imgs/news/thumb-3.jpg" alt />
              </a>
            </div>
            <div className="post-content media-body">
              <h6>
                <a href="category.html.htm">Foody</a>
              </h6>
              <p className="text-muted font-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
              <a className="color-white" href="single.html.htm">
                <img src="assets/imgs/news/thumb-4.jpg" alt />
              </a>
            </div>
            <div className="post-content media-body">
              <h6>
                <a href="category.html.htm">Entertaiment</a>
              </h6>
              <p className="text-muted font-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
