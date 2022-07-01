// import Logo from '../public/imgs/theme/logo.png';
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="main-header header-style-1 font-heading">
        <div className="header-top">
          <div className="container">
            <div className="row pt-20 pb-20">
              <div className="col-md-3 col-xs-6">
                <a href="/">
                  <img
                    class="logo"
                    src={"/static/assets/template/imgs/theme/logo.png"}
                  />
                </a>
              </div>
              <div className="col-md-9 col-xs-6 text-right header-top-right ">
                {/* <LayoutNav /> */}
                <span className="vertical-divider mr-20 ml-20 d-none d-md-inline" />
                <button className="search-icon d-none d-md-inline">
                  <span className="mr-15 text-muted font-small">
                    <i className="elegant-icon icon_search mr-5" />
                    Tìm kiếm
                  </span>
                </button>
                <button className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow">
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <HeaderSticky /> */}
      </header>
    </>
  );
}

function LayoutNav() {
  return (
    <ul className="list-inline nav-topbar d-none d-md-inline">
      <li className="list-inline-item menu-item-has-children">
        <a href="#">Layouts</a>
        <ul className="sub-menu font-small">
          <li className="menu-item-has-children">
            <a href="#">Pages</a>
            <ul className="sub-menu font-small">
              <li>
                <a href="page-about.html.htm">About</a>
              </li>
              <li>
                <a href="page-contact.html.htm">Contact</a>
              </li>
              <li>
                <a href="page-typography.html.htm">Typography</a>
              </li>
              <li>
                <a href="page-register.html.htm">Register</a>
              </li>
              <li>
                <a href="page-login.html.htm">Login</a>
              </li>
              <li>
                <a href="page-search.html.htm">Search</a>
              </li>
              <li>
                <a href="page-author.html.htm">Author</a>
              </li>
              <li>
                <a href="page-404.html.htm">404 page</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Category</a>
            <ul className="sub-menu font-small">
              <li>
                <a href="category-list.html.htm">List layout</a>
              </li>
              <li>
                <a href="category-grid.html.htm">Grid layout</a>
              </li>
              <li>
                <a href="category-masonry.html.htm">Masonry layout</a>
              </li>
              <li>
                <a href="category-big.html.htm">Big layout</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Single post</a>
            <ul className="sub-menu font-small">
              <li>
                <a href="single.html.htm">Default</a>
              </li>
              <li>
                <a href="single-2.html.htm">Big image</a>
              </li>
              <li>
                <a href="single-3.html.htm">Left image</a>
              </li>
              <li>
                <a href="single-4.html.htm">With sidebar</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="list-inline-item">
        <a href="http://demos.alithemes.com/html/stories/docs/">
          <i className="elegant-icon icon_document_alt mr-5" />
          Tài liệu
        </a>
      </li>
    </ul>
  );
}

function HeaderSticky() {
  return (
    <div className="header-sticky">
      <div className="container align-self-center">
        <div className="mobile_menu d-lg-none d-block" />
        <div className="main-nav d-none d-lg-block float-left">
          <nav>
            {/*Desktop menu*/}
            <ul className="main-menu d-none d-lg-inline font-small">
              <li className="menu-item-has-children">
                <a href="index.html.htm">
                  {" "}
                  <i className="elegant-icon icon_house_alt mr-5" /> Home
                </a>
                <ul className="sub-menu text-muted font-small">
                  <li>
                    <a href="index.html.htm">Home default</a>
                  </li>
                  <li>
                    <a href="home-2.html.htm">Homepage 2</a>
                  </li>
                  <li>
                    <a href="home-3.html.htm">Homepage 3</a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a href="category-list.html.htm">Travel</a>{" "}
              </li>
              <li className="current-item">
                {" "}
                <a href="category-list.html.htm">Destinations</a>{" "}
              </li>
              <li>
                {" "}
                <a href="category-grid.html.htm">Guides</a>{" "}
              </li>
              <li>
                {" "}
                <a href="category-masonry.html.htm">Food</a>{" "}
              </li>
              <li>
                {" "}
                <a href="category-big.html.htm">Hotels</a>{" "}
              </li>
              <li>
                {" "}
                <a href="category.html.htm">Review</a>{" "}
              </li>
              <li>
                {" "}
                <a href="category.html.htm">Healthy </a>{" "}
              </li>
              <li>
                {" "}
                <a href="category.html.htm">Lifestyle</a>{" "}
              </li>
              <li>
                {" "}
                <a href="category.html.htm">Blog</a>{" "}
              </li>
            </ul>
            {/*Mobile menu*/}
            <ul id="mobile-menu" className="d-block d-lg-none text-muted">
              <li className="menu-item-has-children">
                <a href="index.html.htm">Home</a>
                <ul className="sub-menu text-muted font-small">
                  <li>
                    <a href="index.html.htm">Home default</a>
                  </li>
                  <li>
                    <a href="home-2.html.htm">Homepage 2</a>
                  </li>
                  <li>
                    <a href="home-3.html.htm">Homepage 3</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu font-small">
                  <li>
                    <a href="page-about.html.htm">About</a>
                  </li>
                  <li>
                    <a href="page-contact.html.htm">Contact</a>
                  </li>
                  <li>
                    <a href="page-typography.html.htm">Typography</a>
                  </li>
                  <li>
                    <a href="page-register.html.htm">Register</a>
                  </li>
                  <li>
                    <a href="page-login.html.htm">Login</a>
                  </li>
                  <li>
                    <a href="page-search.html.htm">Search</a>
                  </li>
                  <li>
                    <a href="page-author.html.htm">Author</a>
                  </li>
                  <li>
                    <a href="page-404.html.htm">404 page</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Category</a>
                <ul className="sub-menu font-small">
                  <li>
                    <a href="category-list.html.htm">List layout</a>
                  </li>
                  <li>
                    <a href="category-grid.html.htm">Grid layout</a>
                  </li>
                  <li>
                    <a href="category-masonry.html.htm">Masonry layout</a>
                  </li>
                  <li>
                    <a href="category-big.html.htm">Big layout</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Single post</a>
                <ul className="sub-menu font-small">
                  <li>
                    <a href="single.html.htm">Default</a>
                  </li>
                  <li>
                    <a href="single-2.html.htm">Big image</a>
                  </li>
                  <li>
                    <a href="single-3.html.htm">Left image</a>
                  </li>
                  <li>
                    <a href="single-4.html.htm">With sidebar</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="float-right header-tools text-muted font-small">
          <ul className="header-social-network d-inline-block list-inline mr-15">
            <li className="list-inline-item">
              <a
                className="social-icon fb text-xs-center"
                target="_blank"
                href="#"
              >
                <i className="elegant-icon social_facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-icon tw text-xs-center"
                target="_blank"
                href="#"
              >
                <i className="elegant-icon social_twitter " />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-icon pt text-xs-center"
                target="_blank"
                href="#"
              >
                <i className="elegant-icon social_pinterest " />
              </a>
            </li>
          </ul>
          <div className="off-canvas-toggle-cover d-inline-block">
            <div
              className="off-canvas-toggle hidden d-inline-block"
              id="off-canvas-toggle"
            >
              <span />
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
}
