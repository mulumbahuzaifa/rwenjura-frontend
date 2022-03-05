import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/userActions";

//Import Image
import logoMain from "../../assets/images/logo4.png";
import secondLogo from "../../assets/images/logo-2.png";

const Headers = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useNavigate();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  // useEffect(() => {
  //   scrollTop();
  // });
  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      history(`/search/${keyword}`);
    } else {
      history("/");
    }
  };

  return (
    <div>
      {/* =============== Topbar area start =============== */}
      <div className="topbar-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 tob-contact-row">
              <div className="topbar-contact">
                <ul>
                  <li>
                    <i className="bx bxs-phone" />
                    <a href="tel:+256704880439">+256 704-880-0439</a>
                  </li>

                  <li>
                    <i className="bx bxs-envelope" />
                    <a href="mailto:info@example.com">info@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6">
              <div className="topbar-social">
                <ul>
                  <li>
                    <Link to={"#"}>
                      <i className="bx bxl-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="bx bxl-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="bx bxl-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i className="bx bxl-whatsapp" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
              {userInfo ? (
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi, {userInfo.name}
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>

                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <Link to="/register">Register</Link>
                  <Link to="/login">Login</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =============== Topbar area end =============== */}

      {/* ===============  header area start =============== */}
      <header>
        <div className="header-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                <div className="navbar-wrap">
                  <div className="logo d-flex justify-content-between">
                    <Link
                      to={`${process.env.PUBLIC_URL}/`}
                      className="navbar-brand"
                      onClick={scrollTop}
                    >
                      <img src={logoMain} alt="Logo" />
                    </Link>
                  </div>
                  <div className="navbar-icons">
                    <div className="searchbar-open">
                      <i className="flaticon-magnifier" />
                    </div>
                    <div className="user-dropdown-icon">
                      <i className="flaticon-user" />
                      <div className="account-dropdown">
                        <ul>
                          <li className="account-el">
                            <i className="bx bx-user-pin" />
                            <Link to={"#"}>Sign in</Link>
                          </li>
                          <li className="account-el">
                            <i className="bx bxs-user-account" />
                            <Link to={"#"}>My Account</Link>
                          </li>
                          <li className="account-el">
                            <i className="bx bx-extension" />
                            <Link to={"#"}>Settings</Link>
                          </li>
                          <li className="account-el">
                            <i className="bx bx-log-in-circle" />
                            <Link to={"#"}>Log out</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mobile-menu d-flex ">
                      <div className="top-search-bar m-0 d-block d-xl-none"></div>
                      <Link to={"#"} className="hamburger d-block d-xl-none">
                        <span className="h-top" />
                        <span className="h-middle" />
                        <span className="h-bottom" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                <nav className="main-nav">
                  <div className="navber-logo-sm">
                    <img src={secondLogo} alt="name" className="img-fluid" />
                  </div>
                  <ul>
                    <li>
                      <NavLink
                        to={`${process.env.PUBLIC_URL}/`}
                        onClick={scrollTop}
                        activeClassName="active"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to={`${process.env.PUBLIC_URL}/about-us`}
                        onClick={scrollTop}
                      >
                        About us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        to={`${process.env.PUBLIC_URL}/package`}
                        onClick={scrollTop}
                      >
                        Destinations
                      </NavLink>
                    </li>

                    <li className="">
                      <NavLink
                        activeClassName="active"
                        to={`${process.env.PUBLIC_URL}/blog`}
                        onClick={scrollTop}
                      >
                        Blogs
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        activeClassName="active"
                        to={`${process.env.PUBLIC_URL}/contact`}
                        onClick={scrollTop}
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                  <div className="navbar-icons-2">
                    <div className="searchbar-open">
                      <i className="flaticon-magnifier" />
                    </div>
                    {userInfo ? (
                      <div className="user-dropdown-icon">
                        <i className="flaticon-user" />
                        <div className="account-dropdown">
                          <ul>
                            <li className="account-el">
                              <i className="bx bxs-user-account" />
                              <Link to={`/profile`}>My Account</Link>
                            </li>

                            <li className="account-el">
                              <i className="bx bx-log-in-circle" />
                              <Link to={`#`} onClick={logoutHandler}>
                                Log out
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="user-dropdown-icon">
                        <i className="flaticon-user" />
                        <div className="account-dropdown">
                          <ul>
                            <li className="account-el">
                              <i className="bx bx-user-pin" />
                              <Link to={`/login`}>Sign in</Link>
                            </li>
                            <li className="account-el">
                              <i className="bx bxs-user-account" />
                              <Link to={`/register`}>Sign Up</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="sidebar-contact">
                    <ul>
                      <li className="sidebar-single-contact">
                        <i className="bx bxs-phone" />
                        <Link to={`tel:+17632275032`}>+1 763-227-5032</Link>
                      </li>
                      <li className="sidebar-single-contact">
                        <i className="bx bxs-envelope" />
                        <Link to={`mailto:info@example.com`}>
                          info@example.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <form>
            <div className="main-searchbar">
              <div className="searchbar-close">
                <i className="bx bx-x" />
              </div>
              <input type="text" placeholder="Search Here......" />
              <div className="searchbar-icon">
                <i className="bx bx-search" />
              </div>
            </div>
          </form>
        </div>
      </header>
      {/* ===============  header area end =============== */}
    </div>
  );
};

export default Headers;
