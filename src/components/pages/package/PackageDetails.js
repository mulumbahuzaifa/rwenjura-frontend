import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Message from "../../LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  createProductReview,
  createProductBooking,
  createProductGallary,
  createProductDays,
} from "../../../Redux/Actions/ProductActions";
import Loading from "../../LoadingError/Loading";
import {
  PRODUCT_CREATE_BOOKING_RESET,
  PRODUCT_CREATE_DAYS_RESET,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_CREATE_GALLARY_RESET,
} from "../../../Redux/Constants/ProductConstants";
import moment from "moment";
import Booking from "./Booking";

import gallery1Img from "../../../assets/images/gallary/gl-1.png";
import gallery2Img from "../../../assets/images/gallary/gl-2.png";
import gallery4Img from "../../../assets/images/gallary/gl-4.png";
import gallery5Img from "../../../assets/images/gallary/gl-5.png";
import gallery6Img from "../../../assets/images/gallary/gl-6.png";

import galleryGxx1Img from "../../../assets/images/gallary/g-xxl-1.png";
import galleryGxx2Img from "../../../assets/images/gallary/g-xxl-2.png";
import galleryGxx3Img from "../../../assets/images/gallary/g-xxl-3.png";

import galleryGxl1Img from "../../../assets/images/gallary/g-xl-1.png";
import galleryGxl2Img from "../../../assets/images/gallary/g-xl-2.png";
import galleryGxl3Img from "../../../assets/images/gallary/g-xl-3.png";

import organizer from "../../../assets/images/organizer.png";
import sidebarBannar from "../../../assets/images/sidebar-banner.png";

import { SRLWrapper } from "simple-react-lightbox";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Headers from "../../common/headers";
import Footers from "../../common/footers";
import Rating from "./Rating";
import { toast } from "react-toastify";
import Toast from "../../LoadingError/Toast";

const PackageDetails = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const [startDate, setDate] = useState(new Date());
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [dataIsLoading, setDataIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [travellers, setTravellers] = useState(0);

  const url = window.location.pathname;
  const productId = url.substring(url.lastIndexOf("/") + 1);
  const PF = "https://rwenjura-server.herokuapp.com/images/";
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const productBookingCreate = useSelector(state => state.productBookingCreate);
  const {
    loading: loadingCreateBooking,
    error: errorCreateBooking,
    success: successCreateBooking,
  } = productBookingCreate;

  const productReviewCreate = useSelector(state => state.productReviewCreate);
  const {
    loading: loadingCreateReview,
    error: errorCreateReview,
    success: successCreateReview,
  } = productReviewCreate;

  const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };

  useEffect(() => {
    console.log(product);
    if (successCreateBooking) {
      toast.success("Package Successfully Booked", Toastobjects);
      setTravellers(0);
      setFullName("");
      setCountry("");
      setDate("");
      setPhone("");
      setEmail("");
      setMessage("");
      dispatch({ type: PRODUCT_CREATE_BOOKING_RESET });
    }
    if (successCreateReview) {
      toast.success("Package successfully reviewed", Toastobjects);
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }

    scrollTop();
    dispatch(listProductDetails(productId));
    setDataIsLoading(true);
  }, [dispatch, productId, successCreateReview, successCreateBooking]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(
      createProductReview(productId, {
        rating,
        comment,
      })
    );
  };
  const handleBooking = e => {
    e.preventDefault();
    dispatch(
      createProductBooking(productId, {
        fullName,
        country,
        email,
        travellers,
        phone,
        date,
        message,
      })
    );
  };

  return (
    <>
      {" "}
      <Headers />
      <Toast />
      {/* ===============  breadcrumb area start =============== */}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="breadcrumb-wrap">
                <h2> Tour Package Details </h2>{" "}
                <ul className="breadcrumb-links">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}> Home </Link>{" "}
                    <i className="bx bx-chevron-right" />
                  </li>{" "}
                  <li> Package Details </li>{" "}
                </ul>{" "}
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* ===============  breadcrumb area end =============== */}
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="package-details-wrapper pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="package-details">
                  <div className="package-thumb">
                    <img src={PF + product.image} alt="" />
                    <div className="package-header">
                      <div className="package-title">
                        <h3> {product.name}</h3>{" "}
                        <strong>
                          {" "}
                          <i className="flaticon-arrival" />
                          {product.tag}{" "}
                        </strong>{" "}
                      </div>{" "}
                      <div className="pd-review">
                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                        />
                      </div>{" "}
                    </div>{" "}
                    <div className="p-short-info">
                      <div className="single-info">
                        <i className="flaticon-clock" />
                        <div className="info-texts">
                          <strong> Duration </strong> <p> Daily Tour </p>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="single-info">
                        <i className="flaticon-footprints" />
                        <div className="info-texts">
                          <strong> Tour Type </strong> <p> 4 Days </p>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="single-info">
                        <i className="flaticon-traveller" />
                        <div className="info-texts">
                          <strong> Group Size </strong> <p> 30 People </p>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="single-info">
                        <i className="flaticon-translate" />
                        <div className="info-texts">
                          <strong> Languages </strong> <p> Any Language </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="package-tab">
                      <ul
                        className="nav nav-pills"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            <i className="flaticon-info" />
                            Information{" "}
                          </button>{" "}
                        </li>{" "}
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            {" "}
                            <i className="flaticon-clipboard" />
                            Travel Plan{" "}
                          </button>{" "}
                        </li>{" "}
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            {" "}
                            <i className="flaticon-gallery" />
                            Our Gallary{" "}
                          </button>{" "}
                        </li>{" "}
                      </ul>{" "}
                      {userInfo ? (
                        <div>
                          {userInfo.isAdmin === true ? (
                            <ul
                              className="nav nav-pills"
                              id="pills-tab"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <Link
                                  to={`/add-images/${product._id}`}
                                  className="nav-link"
                                  id="pills-home-tab"
                                >
                                  Add Image{" "}
                                </Link>
                              </li>{" "}
                              <li className="nav-item" role="presentation">
                                <Link
                                  to={`/add-travel-plan/${product._id}`}
                                  className="nav-link"
                                  id="pills-home-tab"
                                >
                                  Add Travel Plan
                                </Link>
                              </li>{" "}
                            </ul>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      ) : (
                        <div></div>
                      )}
                      <div
                        className="tab-content p-tab-content"
                        id="pills-tabContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="tab-content-1">
                                <div className="p-overview">
                                  <h5> Overview </h5>
                                  <p> {product.description}</p>{" "}
                                </div>
                                <div className="p-details-table">
                                  <table className="table caption-top">
                                    <tbody>
                                      <tr>
                                        <td> Destination </td>
                                        <td> {product.name} </td>
                                      </tr>

                                      <tr> </tr>
                                      <tr>
                                        <td> Departure </td>
                                        <td>
                                          {moment(product.departure).calendar()}{" "}
                                        </td>
                                      </tr>

                                      <tr>
                                        <td> Included </td>
                                        <td>
                                          <ul className="table-list-allow">
                                            <li>
                                              {" "}
                                              <i className="bx bx-check" />{" "}
                                              Specilaized Bilingual Guide{" "}
                                            </li>
                                            <li>
                                              {" "}
                                              <i className="bx bx-check" />{" "}
                                              Private Transport{" "}
                                            </li>
                                            <li>
                                              {" "}
                                              <i className="bx bx-check" />{" "}
                                              Entrance Fees{" "}
                                            </li>
                                            <li>
                                              {" "}
                                              <i className="bx bx-check" /> Box
                                              Lunch, Water, Dinner and Snacks{" "}
                                            </li>
                                          </ul>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td> Excluded </td>
                                        <td>
                                          <ul className="table-list-disallow">
                                            <li>
                                              {" "}
                                              <i className="bx bx-x" />{" "}
                                              Additional Services{" "}
                                            </li>
                                            <li>
                                              {" "}
                                              <i className="bx bx-x" />{" "}
                                              Insurance{" "}
                                            </li>
                                            <li>
                                              {" "}
                                              <i className="bx bx-x" /> Drink{" "}
                                            </li>
                                            <li>
                                              {" "}
                                              <i className="bx bx-x" /> Tickets{" "}
                                            </li>
                                          </ul>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colSpan={2}
                                          className="table-bottom"
                                        >
                                          {" "}
                                          <i className="flaticon-public-transport" />
                                          Travel With Bus
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="p-rationg">
                                  <h5> Rating </h5>{" "}
                                  <div className="rating-card">
                                    <div className="r-card-avarag">
                                      <h4>
                                        {" "}
                                        <Rating
                                          value={product.rating}
                                          text={`${product.numReviews} reviews`}
                                        />
                                      </h4>{" "}
                                    </div>{" "}
                                    <div className="r-card-info">
                                      <ul>
                                        <li>
                                          <strong> Accommodation </strong>{" "}
                                          <Rating value={product.rating} />
                                        </li>{" "}
                                        <li>
                                          <strong> Transport </strong>
                                          <Rating value={product.rating} />
                                        </li>{" "}
                                        <li>
                                          <strong> Comfort </strong>{" "}
                                          <Rating value={product.rating} />
                                        </li>{" "}
                                        <li>
                                          <strong> Hospitality </strong>{" "}
                                          <Rating value={product.rating} />
                                        </li>{" "}
                                        <li>
                                          <strong> Food </strong>
                                          <Rating value={product.rating} />
                                        </li>{" "}
                                      </ul>
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="p-review">
                                  <ul>
                                    {product.reviews.length === 0 && (
                                      <Message variant={"alert-info mt-3"}>
                                        {" "}
                                        No Comments
                                      </Message>
                                    )}
                                    {product.reviews.map(review => (
                                      <li
                                        key={review._id}
                                        className="p-review-card"
                                      >
                                        <div className="p-review-info">
                                          <div className="p-reviewer-info">
                                            <strong> {review.name}</strong>{" "}
                                            <p>
                                              {moment(
                                                review.createdAt
                                              ).calendar()}
                                            </p>
                                            <Rating value={review.rating} />
                                          </div>{" "}
                                        </div>{" "}
                                        <div className="p-review-texts">
                                          <p>{review.comment}</p>{" "}
                                        </div>{" "}
                                        <Link to={`#`} className="r-reply-btn">
                                          <i className="bx bx-reply" /> Reply{" "}
                                        </Link>{" "}
                                      </li>
                                    ))}
                                  </ul>{" "}
                                </div>
                                <div className="p-review-input">
                                  <div className="my-4">
                                    {loadingCreateReview && <Loading />}
                                    {errorCreateReview && (
                                      <Message variant="alert-danger">
                                        {errorCreateReview}
                                      </Message>
                                    )}
                                  </div>
                                  {userInfo ? (
                                    <form onSubmit={submitHandler}>
                                      <h5> Leave Your Comment </h5>
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <strong>Rating</strong>
                                          <select
                                            value={rating}
                                            onChange={e =>
                                              setRating(e.target.value)
                                            }
                                            className="col-12 bg-light p-3 mt-2 border-0 rounded"
                                          >
                                            <option value="">Select...</option>
                                            <option value="1">1 - Poor</option>
                                            <option value="2">2 - Fair</option>
                                            <option value="3">3 - Good</option>
                                            <option value="4">
                                              4 - Very Good
                                            </option>
                                            <option value="5">
                                              5 - Excellent
                                            </option>
                                          </select>
                                        </div>
                                        <div className="col-lg-12">
                                          <textarea
                                            cols={30}
                                            rows={7}
                                            placeholder="Write Message"
                                            value={comment}
                                            onChange={e =>
                                              setComment(e.target.value)
                                            }
                                          />{" "}
                                        </div>{" "}
                                        <div className="col-lg-12">
                                          <input
                                            type="submit"
                                            disabled={loadingCreateReview}
                                            defaultValue="Submit Now"
                                          />
                                        </div>{" "}
                                      </div>{" "}
                                    </form>
                                  ) : (
                                    <div className="my-3">
                                      <Message variant={"alert-warning"}>
                                        Please{" "}
                                        <Link to="/login">
                                          " <strong>Login</strong> "
                                        </Link>{" "}
                                        to write a comment{" "}
                                      </Message>
                                    </div>
                                  )}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <div className="tab-content-2">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="p-timeline-overview">
                                  <h5> Overview </h5>
                                  <p>{product.description}</p>
                                </div>{" "}
                                {dataIsLoading ? (
                                  <ul className="p-timeline">
                                    {product.days.map((obj, i) => {
                                      // return <h2 key={i}>{obj.id} </h2>;
                                      return (
                                        <li key={i}>
                                          <div className="timeline-index">
                                            <div className="index-circle">
                                              <h5> {i + 1} </h5>
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="timeline-content">
                                            <h5>
                                              {" "}
                                              DAY {i + 1}: {obj.name}
                                            </h5>{" "}
                                            <strong>
                                              {" "}
                                              {obj.startingTime} to{" "}
                                              {obj.endTime}
                                            </strong>
                                            <p> {obj.description}</p>
                                            <ul>
                                              <li />{" "}
                                              <li>
                                                {" "}
                                                <i className="bx bx-check" />{" "}
                                                {obj.tags}
                                              </li>{" "}
                                              <li />{" "}
                                            </ul>{" "}
                                          </div>{" "}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                ) : (
                                  <div />
                                )}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div
                          className="tab-pane fade"
                          id="pills-contact"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          <div className="tab-contant-3">
                            <SRLWrapper>
                              {dataIsLoading ? (
                                <div className="row">
                                  <div className="col-lg-8 col-md-8">
                                    {product.images.map((obj, i) => {
                                      // return <h2 key={i}>{obj.id} </h2>;
                                      return (
                                        <div className="">
                                          <div className="">
                                            <Link
                                              key={obj._id}
                                              to={PF + obj.image}
                                              className="g-img-sm-1 main-gallary"
                                            >
                                              <img
                                                src={PF + obj.image}
                                                alt={`${PF + obj.image}`}
                                              />
                                            </Link>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>{" "}
                                </div>
                              ) : (
                                <div />
                              )}
                            </SRLWrapper>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="col-lg-4">
                <div className="package-d-sidebar">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="p-sidebar-form">
                        <div className="my-4">
                          {loadingCreateBooking && <Loading />}
                          {errorCreateBooking && (
                            <Message variant="alert-danger">
                              {errorCreateBooking}
                            </Message>
                          )}
                        </div>
                        <form onSubmit={handleBooking}>
                          <h5 className="package-d-head">Book This Package</h5>{" "}
                          <div className="row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                placeholder="Your Full Name"
                                name="fullName"
                                value={fullName}
                                required
                                onChange={e => setFullName(e.target.value)}
                              />
                            </div>{" "}
                            <div className="col-lg-12">
                              <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                name="email"
                                required
                                onChange={e => setEmail(e.target.value)}
                              />
                            </div>{" "}
                            <div className="col-lg-12">
                              <input
                                type="tel"
                                placeholder="Phone"
                                name="phone"
                                vale={phone}
                                required
                                onChange={e => setPhone(e.target.value)}
                              />
                            </div>{" "}
                            <div className="col-lg-12">
                              <input
                                type="text"
                                placeholder="country"
                                name="country"
                                value={country}
                                required
                                onChange={e => setCountry(e.target.value)}
                              />
                            </div>{" "}
                            <div className="col-lg-12">
                              <input
                                type="number"
                                placeholder="No Of Travellers"
                                name="noOfPeople"
                                value={travellers}
                                required
                                onChange={e => setTravellers(e.target.value)}
                              />
                            </div>{" "}
                            <div className="col-lg-12">
                              <div
                                className="calendar-input"
                                id="packageCalenderMainDiv"
                              >
                                <DatePicker
                                  value={date}
                                  name="date"
                                  selected={date}
                                  onChange={date => setDate(date)}
                                  className="input-field check-in"
                                  placeholder="dd/mm/yy"
                                />
                                <i
                                  className="flaticon-calendar"
                                  id="packageCalenderIcon"
                                />
                              </div>{" "}
                            </div>{" "}
                            <div className="col-lg-12">
                              <textarea
                                vale={message}
                                name="message"
                                cols={30}
                                rows={7}
                                placeholder="Message"
                                onChange={e => setMessage(e.target.value)}
                              />{" "}
                            </div>{" "}
                            <div className="col-lg-12">
                              <input type="submit" defaultValue="Book Now" />
                            </div>{" "}
                          </div>{" "}
                        </form>{" "}
                      </div>{" "}
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="p-sidebar-cards mt-40">
                        <h5 className="package-d-head"> Popular Packages </h5>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      )}
      <Footers />
    </>
  );
};

export default PackageDetails;
