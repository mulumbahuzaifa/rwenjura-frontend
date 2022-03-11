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
      history("/package");
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
                    <a href="tel:+256778876071">+256-778-876-071</a>
                  </li>

                  <li>
                    <i className="bx bxs-envelope" />
                    <a href="mailto:info@rwenjuratoursandtravel.com">
                      info@rwenjuratoursandtravel.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6">
              <div className="topbar-social">
                <ul>
                  <li>
                    <a href="https://www.instagram.com/rwenjuratours/">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/rwenjuratours/">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/RwenjuraTours?t=a0TaHw32Y9-XBhaNKCYQaA&s=09">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/message/4IUPSNXB6TUFK1">
                      <i className="bx bxl-whatsapp" />
                    </a>
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
                    {userInfo.isAdmin === true ? (
                      <>
                        <Link className="dropdown-item" to="/add-product">
                          Add-product
                        </Link>
                        <Link className="dropdown-item" to="/create-blog">
                          Create-blog
                        </Link>
                        <Link className="dropdown-item" to="/bookings">
                          Bookings
                        </Link>
                      </>
                    ) : (
                      <div></div>
                    )}
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
                      {userInfo ? (
                        <div className="account-dropdown">
                          <ul>
                            <li className="account-el">
                              <i className="bx bxs-user-account" />
                              <Link to={`/profile`}>My Account</Link>
                            </li>
                            {userInfo.isAdmin === true ? (
                              <>
                                <li className="account-el">
                                  <i className="bx bx-highlight" />
                                  <Link
                                    className="dropdown-item"
                                    to="/add-product"
                                  >
                                    Add-product
                                  </Link>
                                </li>
                                <li className="account-el">
                                  <i className="bx bx-image-alt" />
                                  <Link
                                    className="dropdown-item"
                                    to="/create-blog"
                                  >
                                    Create-blog
                                  </Link>
                                </li>
                                <li className="account-el">
                                  <i className="bx bx-image-alt" />
                                  <Link
                                    className="dropdown-item"
                                    to="/bookings"
                                  >
                                    Bookings
                                  </Link>
                                </li>
                              </>
                            ) : (
                              <div></div>
                            )}

                            <li className="account-el">
                              <i className="bx bx-log-in-circle" />
                              <Link to={`#`} onClick={logoutHandler}>
                                Log out
                              </Link>
                            </li>
                          </ul>
                        </div>
                      ) : (
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
                      )}
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
                    <img src={logoMain} alt="name" className="img-fluid" />
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
                    <div className="user-dropdown-icon">
                      <i className="flaticon-user" />
                      {userInfo ? (
                        <div className="account-dropdown">
                          <ul>
                            <li className="account-el">
                              <i className="bx bxs-user-account" />
                              <Link to={`/profile`}>My Account</Link>
                            </li>
                            {userInfo.isAdmin === true ? (
                              <>
                                <li className="account-el">
                                  <i className="bx bxs-image-alt" />
                                  <Link
                                    className="dropdown-item"
                                    to="/add-product"
                                  >
                                    Add-product
                                  </Link>
                                </li>
                                <li className="account-el">
                                  <i className="bx bx-highlight" />
                                  <Link
                                    className="dropdown-item"
                                    to="/create-blog"
                                  >
                                    Create-blog
                                  </Link>
                                </li>
                                <li className="account-el">
                                  <i className="bx bx-highlight" />
                                  <Link
                                    className="dropdown-item"
                                    to="/bookings"
                                  >
                                    Bookings
                                  </Link>
                                </li>
                              </>
                            ) : (
                              <div></div>
                            )}

                            <li className="account-el">
                              <i className="bx bx-log-in-circle" />
                              <Link to={`#`} onClick={logoutHandler}>
                                Log out
                              </Link>
                            </li>
                          </ul>
                        </div>
                      ) : (
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
                      )}
                    </div>
                  </div>
                  <div className="sidebar-contact">
                    <ul>
                      <li className="sidebar-single-contact">
                        <i className="bx bxs-phone" />
                        <Link to={`tel:+256778876071`}>+256-778-876-071</Link>
                      </li>
                      <li className="sidebar-single-contact">
                        <i className="bx bxs-envelope" />
                        <Link to={`mailto:info@rwenjuratoursandtravel.com`}>
                          info@rwenjuratoursandtravel.com
                        </Link>
                      </li>
                      <li className="sidebar-single-contact">
                        <i className="bx bxs-envelope" />
                        <Link to={`mailto:info@rwenjuratoursandtravel.com`}>
                          info@rwenjuratoursandtravel.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <form onSubmit={submitHandler}>
            <div className="main-searchbar">
              <div className="searchbar-close">
                <i className="bx bx-x" />
              </div>
              <input
                type="search"
                placeholder="Search Here......"
                onChange={e => setKeyword(e.target.value)}
              />
              <button type="submit" className="searchbar-icon">
                <i className="bx bx-search" />
              </button>
            </div>
          </form>
        </div>
      </header>
      {/* ===============  header area end =============== */}
    </div>
  );
};

export default Headers;
