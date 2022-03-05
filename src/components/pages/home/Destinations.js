import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../../Redux/Actions/ProductActions";
import Loading from "../../LoadingError/Loading";
import Message from "../../LoadingError/Error";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Import Images
import destinations1Img from "../../../assets/images/destination/d-1.jpg";
import destinations4Img from "../../../assets/images/destination/d-4.jpg";
import destinations5Img from "../../../assets/images/destination/d-5.jpg";
import destinations6Img from "../../../assets/images/destination/d-6.jpg";
import destinations7Img from "../../../assets/images/destination/d-7.jpg";
import destinations8Img from "../../../assets/images/destination/d-8.jpg";
import destinations9Img from "../../../assets/images/destination/d-9.jpg";
import destinations10Img from "../../../assets/images/destination/d-10.jpg";
import destinations11Img from "../../../assets/images/destination/d-11.jpg";
import destinations2Img from "../../../assets/images/destination/d-2.jpg";
import destinations3Img from "../../../assets/images/destination/d-3.jpg";

const Destinations = props => {
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products, page, pages } = productList;
  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);
  const uganda = products.filter(product => product.country == "Uganda");
  const kenya = products.filter(product => product.country == "kenya");
  const rwanda = products.filter(product => product.country == "rwanda");
  const tanzania = products.filter(product => product.country == "tanzania");

  const destinationsOptions = {
    stagePadding: 1,
    items: 10,
    loop: true,
    margin: 20,
    smartSpeed: 1500,
    autoplay: false,
    dots: false,
    nav: true,
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
        items: 2,
        nav: false,
        dost: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  };

  return (
    <>
      {/* =============== Destinations area start =============== */}{" "}
      <div className="destinations-area pt-105">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-head pb-40">
                <h5> Choose Your Package </h5>{" "}
                <h2> Select Your best Package For Your Travel </h2>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          {loading ? (
            <div className="mb-5">
              <Loading />
            </div>
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <>
              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <div className="package-slider-wrap">
                    <img src={destinations1Img} alt="" className="img-fluid" />
                    <div className="pakage-overlay">
                      <strong> Uganda </strong>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="col-lg-9 col-md-9">
                  <OwlCarousel
                    className="row owl-carousel destinations-1"
                    {...destinationsOptions}
                  >
                    {uganda.map(obj => {
                      return (
                        <div className="package-card">
                          <div className="package-thumb">
                            <Link
                              to={`${process.env.PUBLIC_URL}/package-details`}
                            >
                              <img
                                src={obj.image}
                                alt=""
                                className="img-fluid"
                              />
                            </Link>{" "}
                          </div>{" "}
                          <div className="package-details">
                            <div className="package-info">
                              <h5>
                                {" "}
                                <span> {obj.price} </span>/PerPerson{" "}
                              </h5>{" "}
                            </div>{" "}
                            <h3>
                              {" "}
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details`}
                              >
                                {obj.name}
                              </Link>{" "}
                            </h3>{" "}
                            <div className="package-rating">
                              <i className="bx bxs-star" />
                              <strong>
                                {" "}
                                <span> 1.3 K + </span> Rating
                              </strong>
                            </div>{" "}
                          </div>{" "}
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 col-md-9">
                  <OwlCarousel
                    className="row owl-carousel destinations-2"
                    {...destinationsOptions}
                  >
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img
                            src={destinations7Img}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $145 </span>/PerPerson{" "}
                          </h5>{" "}
                        </div>{" "}
                        <h3>
                          {" "}
                          <i className="flaticon-arrival" />
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            {" "}
                            Lake Victoria, Uganda{" "}
                          </Link>{" "}
                        </h3>{" "}
                        <div className="package-rating">
                          <i className="bx bxs-star" />
                          <strong>
                            {" "}
                            <span> 1.3 K + </span> Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img
                            src={destinations8Img}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $240 </span>/PerPerson{" "}
                          </h5>{" "}
                        </div>{" "}
                        <h3>
                          {" "}
                          <i className="flaticon-arrival" />
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            {" "}
                            Mountain Rwenzori{" "}
                          </Link>{" "}
                        </h3>{" "}
                        <div className="package-rating">
                          <i className="bx bxs-star" />
                          <strong>
                            {" "}
                            <span> 1.3 K + </span> Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img
                            src={destinations9Img}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $300 </span>/PerPerson{" "}
                          </h5>{" "}
                        </div>{" "}
                        <h3>
                          {" "}
                          <i className="flaticon-arrival" />
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            {" "}
                            Lake Victoria, Uganda{" "}
                          </Link>{" "}
                        </h3>{" "}
                        <div className="package-rating">
                          <i className="bx bxs-star" />
                          <strong>
                            {" "}
                            <span> 1.3 K + </span> Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img
                            src={destinations10Img}
                            alt=""
                            className="img-fluid"
                          />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $120 </span>/PerPerson{" "}
                          </h5>{" "}
                        </div>{" "}
                        <h3>
                          {" "}
                          <i className="flaticon-arrival" />
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            {" "}
                            Mgahiga National Park{" "}
                          </Link>{" "}
                        </h3>{" "}
                        <div className="package-rating">
                          <i className="bx bxs-star" />
                          <strong>
                            {" "}
                            <span> 1.3 K + </span> Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </OwlCarousel>{" "}
                </div>{" "}
                <div className="col-lg-3 col-md-3">
                  <div className="package-slider-wrap">
                    <img src={destinations2Img} alt="" className="img-fluid" />
                    <div className="pakage-overlay">
                      <strong> Kenya </strong>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <div className="package-slider-wrap">
                    <img src={destinations3Img} alt="" className="img-fluid" />
                    <div className="pakage-overlay">
                      <strong> Tanzania</strong>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                {uganda.map(obj => {
                  return (
                    <div className="col-lg-9 col-md-9">
                      <OwlCarousel
                        className="row owl-carousel destinations-1"
                        {...destinationsOptions}
                      >
                        <div className="package-card">
                          <div className="package-thumb">
                            <Link
                              to={`${process.env.PUBLIC_URL}/package-details`}
                            >
                              <img
                                src={obj.image}
                                alt=""
                                className="img-fluid"
                              />
                            </Link>{" "}
                          </div>{" "}
                          <div className="package-details">
                            <div className="package-info">
                              <h5>
                                {" "}
                                <span> {obj.price} </span>/PerPerson{" "}
                              </h5>{" "}
                            </div>{" "}
                            <h3>
                              {" "}
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details`}
                              >
                                {" "}
                                Lake Victoria, Uganda{" "}
                              </Link>{" "}
                            </h3>{" "}
                            <div className="package-rating">
                              <i className="bx bxs-star" />
                              <strong>
                                {" "}
                                <span> 1.3 K + </span> Rating
                              </strong>
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="package-card"></div>
                        <div className="package-card"></div>
                        <div className="package-card"></div>
                      </OwlCarousel>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
      {/* =============== Destinations area end =============== */}
    </>
  );
};

export default Destinations;
