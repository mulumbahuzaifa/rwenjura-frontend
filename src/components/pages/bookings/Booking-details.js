import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Message from "../../LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  createProductReview,
  createProductBooking,
} from "../../../Redux/Actions/ProductActions";
import Loading from "../../LoadingError/Loading";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../../Redux/Constants/ProductConstants";
import { PRODUCT_CREATE_BOOKING_RESET } from "../../../Redux/Constants/ProductConstants";
import moment from "moment";
// import Booking from "./Booking";
import Booking from "../package/Booking";

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
import { toast } from "react-toastify";
import Toast from "../../LoadingError/Toast";
import Rating from "../package/Rating";

const BookingDetails = () => {
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

  useEffect(() => {
    scrollTop();
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  return (
    <>
      {" "}
      <Headers />
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
                    </div>{" "}
                    <div>
                      <div className="p-review">
                        <ul>
                          {product.bookings.length === 0 && (
                            <Message variant={"alert-info mt-3"}>
                              {" "}
                              No Bookings yet!!!!!!
                            </Message>
                          )}
                          {product.bookings.map(review => (
                            <li key={review._id} className="p-review-card">
                              <div className="p-review-info">
                                <div className="p-reviewer-info">
                                  <strong>Full Name : {review.fullName}</strong>{" "}
                                  <p>
                                    Booked :
                                    {moment(review.createdAt).calendar()}
                                  </p>
                                  <p>Email :{review.email}</p>
                                </div>{" "}
                              </div>{" "}
                              <div className="p-review-texts">
                                <p>Number Of Travellers :{review.travellers}</p>{" "}
                                <p>Phone Number :{review.phone}</p>{" "}
                                <p>Country :{review.country}</p>{" "}
                                <p>
                                  Booked Date :{moment(review.date).calendar()}
                                </p>{" "}
                                <p>Message :{review.message}</p>{" "}
                              </div>{" "}
                              <hr />
                            </li>
                          ))}
                        </ul>{" "}
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footers />
    </>
  );
};

export default BookingDetails;
