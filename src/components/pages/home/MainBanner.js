import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, useSearchParams, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../../Redux/Actions/ProductActions";
import Loading from "../../LoadingError/Loading";
import Message from "../../LoadingError/Error";

const MainBanner = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { keyword } = useParams();
  const { pageNumber } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products, page, pages } = productList;
  const PF = "http://localhost:5000/images/";
  useEffect(() => {
    dispatch(listProduct(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const changeDatepickerHandeller = date => {
    setStartDate(date);
  };

  const mainBannerOptions = {
    items: 1,
    loop: true,
    margin: 0,
    smartSpeed: 700,
    dots: false,
    nav: true,
    autoplay: 4000,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      "<i class='bx bx-chevron-left' ></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dost: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
      },
    },
  };

  const startDate1 = startDate;
  const filteredProduct = products.filter(
    product => product.isFeatured == true
  );
  return (
    <>
      {/* ===============  Main banner area start =============== */}
      <div className="main-banner">
        <OwlCarousel
          className="banner-slider owl-carousel"
          {...mainBannerOptions}
        >
          {loading ? (
            <div className="mb-5">
              <Loading />
            </div>
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            filteredProduct.slice(0, 4).map((obj, i) => {
              // return <h2 key={i}>{obj.id} </h2>;
              return (
                <div className={`slider-item slider-item-${i}`} key={obj.i}>
                  <div className="container">
                    <div
                      className="slider-content wow fadeInLeft animated"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <h2> {obj.name}</h2> <h5> {obj.tag} </h5>{" "}
                      <div className="banner-btn">
                        <Link
                          to={`${process.env.PUBLIC_URL}/package-details/${obj._id}`}
                          className="btn-common"
                        >
                          {" "}
                          Book Now{" "}
                        </Link>
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              );
            })
          )}
        </OwlCarousel>{" "}
      </div>
      {/* ===============  Main banner area end =============== *{ /* ===============  findfrom area start ============= */}{" "}
      <div className="find-form">
        <div className="container">
          <form className="findfrom-wrapper">
            <div className="row">
              <div className="col-lg-3">
                <input type="text" name="whereto" placeholder="Where To..." />
              </div>{" "}
              <div className="col-lg-3">
                <div className="calendar-input">
                  <DatePicker
                    selected={startDate1}
                    onChange={date => changeDatepickerHandeller(date)}
                    className="input-field check-in"
                    placeholder="dd-mm-yy"
                  />
                  <i className="flaticon-calendar" />
                </div>{" "}
              </div>{" "}
              <div className="col-lg-3">
                <div className="custom-select">
                  <select>
                    <option value={0}> Travel Type </option>{" "}
                    <option value={1}> City Tours </option>
                    <option value={2}> Vacation Tours </option>{" "}
                    <option value={3}> Couple Tours </option>{" "}
                    <option value={4}> Adventure Tours </option>{" "}
                    <option value={5}> Group Tours </option>{" "}
                  </select>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-3">
                <div className="find-btn">
                  <Link to={`#`} className="btn-second">
                    {" "}
                    <i className="bx bx-search-alt" /> Find now{" "}
                  </Link>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>
      {/* ===============  findfrom area end =============== */}{" "}
    </>
  );
};

export default MainBanner;
