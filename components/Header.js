// import Logo from '../public/imgs/theme/logo.png';
import baseApiUrl from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Header({ offset }) {
  const router = useRouter();

  const { categoryList } = useSelector((store) => store?.indexReducer);

  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <header className="main-header header-style-1 font-heading">
      <div className="header-top">
        <div className="container">
          <div className="row pt-20 pb-20">
            <div className="col-md-3 col-xs-6">
              <a href="/">
                <img className="logo" src={`${baseApiUrl}/uploads/Logo_5b03e4657c.png`} alt />
              </a>
            </div>
            <div className="col-md-9 col-xs-6 text-right header-top-right">
              <ul className="list-inline nav-topbar d-none d-md-inline">
                <li className="list-inline-item">
                  <a href="/profilo">
                    <i className="elegant-icon icon_document_alt mr-5" />
                    About me
                  </a>
                </li>
              </ul>
              <span className="vertical-divider mr-20 ml-20 d-none d-md-inline" />
              <button className="search-icon d-none d-md-inline">
                <span className="mr-15 " style={{ fontWeight: "bolder", fontSize: "16px" }}>
                  <i className="elegant-icon icon_search mr-5" />
                  Tìm kiếm
                </span>
              </button>
              <button className="btn btn-radius bg-primary text-white ml-15  box-shadow">Đăng nhập</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`header-sticky ${offset > 10 ? "sticky-bar" : ""}`}>
        <div className="container align-self-center">
          <div className="mobile_menu d-lg-none d-block">
            <div className="slicknav_menu">
              <div className={`container ${openMobileNav ? "slicknav_collapsed" : "slicknav_open"}`}>
                <a
                  href="#"
                  aria-haspopup="true"
                  role="button"
                  tabIndex={0}
                  className="slicknav_btn  "
                  onClick={(e) => setOpenMobileNav((value) => (value = !value))}
                >
                  <span className="slicknav_menutxt">Danh mục</span>
                  <span className="slicknav_icon">
                    <span className="menu-icon">
                      <span className="menu-icon-inner" />
                    </span>
                    <span className="menu-text ml-5">Danh mục</span>
                  </span>
                </a>
              </div>
              <ul
                className="slicknav_nav"
                aria-hidden="false"
                role="menu"
                style={{ display: openMobileNav ? "block" : "none" }}
              >
                {categoryList?.map((item, index) => {
                  return (
                    <li>
                      <Link
                        href={{
                          pathname: `/category/${item?.id}`,
                        }}
                      >
                        {item?.categoryName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="main-nav d-none d-lg-block float-left">
            <nav>
              {/*Desktop menu*/}
              <ul className="main-menu d-none d-lg-inline font-small">
                {/* <li className="menu-item-has-children">
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
                </li> */}
                {categoryList?.map((item, index) => {
                  return (
                    <li className={`${router?.asPath === `/category/${item?.id}/` ? "current-item" : ""}`}>
                      <Link
                        href={{
                          pathname: `/category/${item?.id}`,
                        }}
                      >
                        {item?.categoryName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {/*Mobile menu*/}
              <ul id="mobile-menu" className="d-block d-lg-none text-muted">
                {/* <li className="menu-item-has-children">
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
                </li> */}
                <li className="menu-item-has-children">
                  <a href="#">Danh mục</a>
                  <ul className="sub-menu font-small">
                    {categoryList?.map((item, index) => {
                      return (
                        <li
                          className={`${router?.asPath === `/category/${item?.id}/` ? "current-item" : ""}`}
                        >
                          <Link
                            href={{
                              pathname: `/category/${item?.id}`,
                            }}
                          >
                            {item?.categoryName}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="float-right header-tools text-muted font-small">
            <ul className="header-social-network d-inline-block list-inline mr-15">
              <li className="list-inline-item">
                <a className="social-icon fb text-xs-center" target="_blank" href="#">
                  <i className="elegant-icon social_facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-icon tw text-xs-center" target="_blank" href="#">
                  <i className="elegant-icon social_twitter" />
                </a>
              </li>
            </ul>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </header>
  );
}
