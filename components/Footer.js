export default function Footer() {
  return (
    <>
      <footer className="pt-20 pb-20 bg-grey">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-12"
              style={{ textAlign: "center" }}
            >
              <div className="sidebar-widget wow fadeInUp animated mb-30">
                <div className="widget-header-2 position-relative mb-30"></div>
                <div className="textwidget">
                  <div className="newsletter">
                    <p className="font-medium">I am Linh © 2022</p>
                  </div>
                  <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                    <li className="list-inline-item">
                      <a
                        className="fb"
                        href="https://www.facebook.com/linkfromthemid/"
                        target="_blank"
                        title="Facebook"
                      >
                        <i className="elegant-icon social_facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="tw"
                        href="https://www.linkedin.com/in/linh-%C4%91o%C3%A0n-v%C4%83n-a66041244"
                        target="_blank"
                        title="Tweet now"
                      >
                        <i className="elegant-icon social_linkedin" />
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
          </div>
        </div>
      </footer>
    </>
  );
}
