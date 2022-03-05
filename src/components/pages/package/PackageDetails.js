import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Message from "../../LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../../Redux/Actions/ProductActions";
import Loading from "../../LoadingError/Loading";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../../Redux/Constants/ProductConstants";
import moment from "moment";
import Booking from "./Booking";

import pd_thumb from "../../../assets/images/package/pd-thumb.png";
import pr_1 from "../../../assets/images/package/pr-1.png";

import gallery1Img from "../../../assets/images/gallary/gl-1.png";
import gallery2Img from "../../../assets/images/gallary/gl-2.png";
import gallery4Img from "../../../assets/images/gallary/gl-4.png";
import gallery5Img from "../../../assets/images/gallary/gl-5.png";
import gallery6Img from "../../../assets/images/gallary/gl-6.png";

import galleryGxx1Img from "../../../assets/images/gallary/g-xxl-1.png";
import galleryGxx2Img from "../../../assets/images/gallary/g-xxl-2.png";
import galleryGxx3Img from "../../../assets/images/gallary/g-xxl-3.png";

import gallery17Img from "../../../assets/images/gallary/gl-17.png";
import gallery16Img from "../../../assets/images/gallary/gl-16.png";
import gallery14Img from "../../../assets/images/gallary/gl-14.png";

import galleryGxl1Img from "../../../assets/images/gallary/g-xl-1.png";
import galleryGxl2Img from "../../../assets/images/gallary/g-xl-2.png";
import galleryGxl3Img from "../../../assets/images/gallary/g-xl-3.png";
import galleryGxl4Img from "../../../assets/images/gallary/g-xl-4.png";

import pm_sm_1 from "../../../assets/images/package/p-sm-1.png";
import pm_sm_4 from "../../../assets/images/package/p-sm-4.png";
import pm_sm_2 from "../../../assets/images/package/p-sm-2.png";
import pm_sm_3 from "../../../assets/images/package/p-sm-3.png";

import organizer from "../../../assets/images/organizer.png";
import sidebarBannar from "../../../assets/images/sidebar-banner.png";

import { SRLWrapper } from "simple-react-lightbox";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Headers from "../../common/headers";
import Footers from "../../common/footers";

const PackageDetails = ({ history, match }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     startDate: new Date(),
  //     product: [],
  //   };
  // }
  // const changeDatepickerHandeller = date => {
  //   this.setState({
  //     startDate: date,
  //   });
  // };

  // componentDidMount() {
  //   this.scrollTop();
  //   this.fetchProduct();
  // }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // fetchProduct = async () => {
  //   const url = window.location.pathname;
  //   const id = url.substring(url.lastIndexOf("/") + 1);
  //   // await commerce.products
  //   //   .retrieve(id)
  //   //   .then(products => this.setState({ product: products }));
  //   const { data } = await axios.get(`http://localhost:5000/api/product/${id}`);
  //   this.setState({ product: data });
  //   console.log(this.state.product);
  // };
  // const [qty, setQty] = useState(1);
  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState("");
  const [startDate, setDate] = useState(new Date());

  const url = window.location.pathname;
  const productId = url.substring(url.lastIndexOf("/") + 1);

  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;
  // const userLogin = useSelector(state => state.userLogin);
  // const { userInfo } = userLogin;
  // const productReviewCreate = useSelector(state => state.productReviewCreate);
  // const {
  //   loading: loadingCreateReview,
  //   error: errorCreateReview,
  //   success: successCreateReview,
  // } = productReviewCreate;

  useEffect(() => {
    // if (successCreateReview) {
    //   alert("Review Submitted");
    //   setRating(0);
    //   setComment("");
    //   dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    // }
    // scrollTop();
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  return (
    <>
      {" "}
      <Headers />
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
                    <img src={product.image} alt="" />
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
                        <p> Excellent </p>{" "}
                        <ul>
                          <li>
                            {" "}
                            <i className="bx bxs-star" />{" "}
                          </li>{" "}
                          <li>
                            {" "}
                            <i className="bx bxs-star" />{" "}
                          </li>
                          <li>
                            {" "}
                            <i className="bx bxs-star" />{" "}
                          </li>{" "}
                          <li>
                            {" "}
                            <i className="bx bxs-star" />{" "}
                          </li>
                          <li>
                            {" "}
                            <i className="bx bx-star" />{" "}
                          </li>{" "}
                        </ul>{" "}
                        <p> 800 Review </p>{" "}
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
                            data-
                            bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="false"
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
                                <div className="p-highlight">
                                  <h5> Highlight </h5>{" "}
                                  <ul>
                                    <li>
                                      {" "}
                                      <i className="bx bx-circle" />{" "}
                                      <p>
                                        {" "}
                                        Pellentesque accumsan magna in augue
                                        sagittis, non fringilla eros molestie.{" "}
                                      </p>
                                    </li>
                                    <li>
                                      {" "}
                                      <i className="bx bx-circle" />{" "}
                                      <p>
                                        {" "}
                                        Pellentesque accumsan magna in augue
                                        sagittis, non fringilla eros molestie.{" "}
                                      </p>
                                    </li>
                                    <li>
                                      {" "}
                                      <i className="bx bx-circle" />{" "}
                                      <p>
                                        {" "}
                                        Pellentesque accumsan magna in augue
                                        sagittis, non fringilla eros molestie.{" "}
                                      </p>
                                    </li>
                                    <li>
                                      {" "}
                                      <i className="bx bx-circle" />{" "}
                                      <p>
                                        {" "}
                                        Pellentesque accumsan magna in augue
                                        sagittis, non fringilla eros molestie.{" "}
                                      </p>
                                    </li>
                                    <li>
                                      {" "}
                                      <i className="bx bx-circle" />{" "}
                                      <p>
                                        {" "}
                                        Pellentesque accumsan magna in augue
                                        sagittis, non fringilla eros molestie.{" "}
                                      </p>
                                    </li>
                                    <li>
                                      {" "}
                                      <i className="bx bx-circle" />{" "}
                                      <p>
                                        {" "}
                                        Pellentesque accumsan magna in augue
                                        sagittis, non fringilla eros molestie.{" "}
                                      </p>
                                    </li>
                                  </ul>{" "}
                                </div>{" "}
                                <div className="p-details-table">
                                  <table className="table caption-top">
                                    <tbody>
                                      <tr>
                                        <td> Destination </td>
                                        <td> {product.name} </td>
                                      </tr>
                                      <tr>
                                        <td> Depature </td>
                                        <td> {product.departure} </td>
                                      </tr>
                                      <tr> </tr>
                                      <tr>
                                        <td> Departure Time </td>
                                        <td> {product.departure} </td>
                                      </tr>
                                      <tr>
                                        <td> Return Time </td>
                                        <td> 08 April, 2021 10.00 AM </td>
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
                                      <h2> 4.9 </h2> <h5> Excellent </h5>{" "}
                                    </div>{" "}
                                    <div className="r-card-info">
                                      <ul>
                                        <li>
                                          <strong> Accommodation </strong>{" "}
                                          <ul className="r-rating">
                                            <li>
                                              <i className="bx bxs-star" />
                                              <i className="bx bxs-star" />
                                              <i className="bx bxs-star" />
                                              <i className="bx bxs-star" />
                                              <i className="bx bxs-star" />
                                            </li>{" "}
                                          </ul>{" "}
                                        </li>{" "}
                                        <li>
                                          <strong> Transport </strong>
                                          <ul className="r-rating">
                                            <li>
                                              <i className="bx bxs-star" />
                                              <i className="bx bxs-star" />
                                              <i className="bx bxs-star" />
                                              <i className="bx bx-star" />
                                              <i className="bx bx-star" />
                                            </li>{" "}
                                          </ul>{" "}
                                        </li>{" "}
                                        <li>
                                          <strong> Comfort </strong>{" "}
                                          <ul className="r-rating">
                                            <li>
                                              <i className="bx bxs-star" />
                                              <i className="bx bxs-star" />
                                              <i className="bx bxs-star" />
                                              <i className="bx bxs-star" />
                                              <i className="bx bx-star" />
                                            </li>{" "}
                                          </ul>{" "}
                                        </li>{" "}
                                        <li>
                                          <strong> Hospitality </strong>{" "}
                                          <ul className="r-rating">
                                            <li>
                                              <i className="bx bxs-star" />
                                              <i className="bx bxs-star" />
                                              <i className="bx bxs-star" />
                                              <i className="bx bxs-star" />
                                              <i className="bx bx-star" />
                                            </li>{" "}
                                          </ul>{" "}
                                        </li>{" "}
                                        <li>
                                          <strong> Food </strong>
                                          <ul className="r-rating">
                                            <li>
                                              <i className="bx bxs-star" />
                                              <i className="bx bxs-star" />
                                              <i className="bx bx-star" />
                                              <i className="bx bx-star" />
                                              <i className="bx bx-star" />
                                            </li>{" "}
                                          </ul>{" "}
                                        </li>{" "}
                                      </ul>
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="p-review">
                                  <ul>
                                    <li className="p-review-card">
                                      <div className="p-review-info">
                                        <div className="p-reviewr-img">
                                          <img src={pr_1} alt="" />
                                        </div>{" "}
                                        <div className="p-reviewer-info">
                                          <strong> Bertram Bil </strong>{" "}
                                          <p> 2 April, 2021 10.00 PM </p>
                                          <ul className="review-star">
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />{" "}
                                            </li>{" "}
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />{" "}
                                            </li>{" "}
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />{" "}
                                            </li>{" "}
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />
                                            </li>{" "}
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />{" "}
                                            </li>{" "}
                                          </ul>{" "}
                                        </div>{" "}
                                      </div>{" "}
                                      <div className="p-review-texts">
                                        <p>
                                          {" "}
                                          Morbi dictum pulvinar velit, id mollis
                                          lorem faucibus acUt sed lacinia
                                          ipsum.Suspendisse massa augue lorem
                                          faucibus acUt sed lacinia
                                          ipsum.Suspendisse{" "}
                                        </p>{" "}
                                      </div>{" "}
                                      <Link to={`#`} className="r-reply-btn">
                                        <i className="bx bx-reply" /> Reply{" "}
                                      </Link>{" "}
                                    </li>{" "}
                                    <li className="p-review-card">
                                      <div className="p-review-info">
                                        <div className="p-reviewr-img">
                                          <img src={pr_1} alt="" />
                                        </div>
                                        <div className="p-reviewer-info">
                                          <strong> Bertram Bil </strong>{" "}
                                          <p> 2 April, 2021 10.00 PM </p>{" "}
                                          <ul className="review-star">
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />{" "}
                                            </li>{" "}
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />{" "}
                                            </li>{" "}
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />{" "}
                                            </li>{" "}
                                            <li>
                                              <i className="bx bxs-star" />{" "}
                                            </li>{" "}
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />{" "}
                                            </li>{" "}
                                          </ul>{" "}
                                        </div>{" "}
                                      </div>{" "}
                                      <div className="p-review-texts">
                                        <p>
                                          {" "}
                                          Morbi dictum pulvinar velit, id mollis
                                          lorem faucibus acUt sed lacinia
                                          ipsum.Suspendisse massa augue lorem
                                          faucibus acUt sed lacinia
                                          ipsum.Suspendisse{" "}
                                        </p>{" "}
                                      </div>
                                      <Link to={`#`} className="r-reply-btn">
                                        {" "}
                                        <i className="bx bx-reply" /> Reply{" "}
                                      </Link>{" "}
                                    </li>{" "}
                                    <li className="p-review-card">
                                      <div className="p-review-info">
                                        <div className="p-reviewr-img">
                                          <img src={pr_1} alt="" />
                                        </div>{" "}
                                        <div className="p-reviewer-info">
                                          <strong> Bertram Bil </strong>{" "}
                                          <p> 2 April, 2021 10.00 PM </p>{" "}
                                          <ul className="review-star">
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />{" "}
                                            </li>{" "}
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />{" "}
                                            </li>{" "}
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />{" "}
                                            </li>{" "}
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />{" "}
                                            </li>
                                            <li>
                                              {" "}
                                              <i className="bx bxs-star" />{" "}
                                            </li>{" "}
                                          </ul>{" "}
                                        </div>{" "}
                                      </div>{" "}
                                      <div className="p-review-texts">
                                        <p>
                                          {" "}
                                          Morbi dictum pulvinar velit, id mollis
                                          lorem faucibus acUt sed lacinia
                                          ipsum.Suspendisse massa augue lorem
                                          faucibus acUt sed lacinia
                                          ipsum.Suspendisse{" "}
                                        </p>
                                      </div>{" "}
                                      <Link to={`#`} className="r-reply-btn">
                                        {" "}
                                        <i className="bx bx-reply" /> Reply{" "}
                                      </Link>{" "}
                                    </li>{" "}
                                  </ul>{" "}
                                </div>
                                <div className="p-review-input">
                                  <form>
                                    <h5> Leave Your Comment </h5>
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <input
                                          type="text"
                                          placeholder="Your Full Name"
                                        />
                                      </div>
                                      <div className="col-lg-6">
                                        <input
                                          type="text"
                                          placeholder="Your Email"
                                        />
                                      </div>{" "}
                                      <div className="col-lg-12">
                                        <input
                                          type="text"
                                          placeholder="Tour Type"
                                        />
                                      </div>
                                      <div className="col-lg-12">
                                        <textarea
                                          cols={30}
                                          rows={7}
                                          placeholder="Write Message"
                                          defaultValue={""}
                                        />{" "}
                                      </div>{" "}
                                      <div className="col-lg-12">
                                        <ul className="input-rating">
                                          <li>
                                            {" "}
                                            <i className="bx bx-star" />{" "}
                                          </li>{" "}
                                          <li>
                                            {" "}
                                            <i className="bx bx-star" />{" "}
                                          </li>{" "}
                                          <li>
                                            {" "}
                                            <i className="bx bx-star" />{" "}
                                          </li>{" "}
                                          <li>
                                            <i className="bx bx-star" />{" "}
                                          </li>{" "}
                                          <li>
                                            {" "}
                                            <i className="bx bx-star" />{" "}
                                          </li>{" "}
                                        </ul>{" "}
                                        <input
                                          type="submit"
                                          defaultValue="Submit Now"
                                        />
                                      </div>{" "}
                                    </div>{" "}
                                  </form>{" "}
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
                                  <p>
                                    {" "}
                                    Pellentesque accumsan magna in augue
                                    sagittis, non fringilla eros molestie.Sed
                                    feugiat mi nec ex vehicula, nec vestibulum
                                    orci semper.Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per
                                    inceptos himenaeos.Donec tristique commodo
                                    fringilla.Duis aliquet varius mauris eget
                                    rutrum.Nullam sit amet justo consequat,
                                    bibendum orci in , convallis enim.Proin
                                    convallis neque viverra finibus
                                    cursus.Mauris lacinia lacinia erat in
                                    finibus.{" "}
                                  </p>
                                </div>{" "}
                                <ul className="p-timeline">
                                  <li>
                                    <div className="timeline-index">
                                      <div className="index-circle">
                                        <h5> 01 </h5>
                                      </div>{" "}
                                    </div>{" "}
                                    <div className="timeline-content">
                                      <h5> DAY 1: Departure And Small Tour </h5>{" "}
                                      <strong> 10.00 AM to 10.00 PM </strong>
                                      <p>
                                        {" "}
                                        Pellentesque accumsan magna in augue
                                        sagittis, non fringilla eros
                                        molestie.Sed feugiat mi nec ex vehicula,
                                        nec vestibulum orci semper.Class aptent
                                        taciti sociosqu ad litora torquent per
                                        conubia nostra, per inceptos
                                        himenaeos.Donec tristique commodo
                                        fringilla.{" "}
                                      </p>
                                      <ul>
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" />{" "}
                                          Specilaized Bilingual Guide{" "}
                                        </li>{" "}
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" />
                                          Private Transport{" "}
                                        </li>{" "}
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" /> Entrance
                                          Fees{" "}
                                        </li>{" "}
                                        <li />{" "}
                                        <li>
                                          <i className="bx bx-check" /> Box
                                          Lunch, Water, Dinner and Snacks{" "}
                                        </li>{" "}
                                      </ul>{" "}
                                    </div>{" "}
                                  </li>{" "}
                                  <li>
                                    <div className="timeline-index">
                                      <div className="index-circle">
                                        <h5> 02 </h5>{" "}
                                      </div>{" "}
                                    </div>{" "}
                                    <div className="timeline-content">
                                      <h5> DAY 2: Departure And Small Tour </h5>
                                      <strong> 10.00 AM to 10.00 PM </strong>
                                      <p>
                                        {" "}
                                        Pellentesque accumsan magna in augue
                                        sagittis, non fringilla eros
                                        molestie.Sed feugiat mi nec ex vehicula,
                                        nec vestibulum orci semper.Class aptent
                                        taciti sociosqu ad litora torquent per
                                        conubia nostra, per inceptos
                                        himenaeos.Donec tristique commodo
                                        fringilla.{" "}
                                      </p>{" "}
                                      <ul>
                                        <li />{" "}
                                        <li>
                                          <i className="bx bx-check" />
                                          Specilaized Bilingual Guide{" "}
                                        </li>{" "}
                                        <li />{" "}
                                        <li>
                                          <i className="bx bx-check" /> Private
                                          Transport{" "}
                                        </li>{" "}
                                        <li />
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" /> Entrance
                                          Fees{" "}
                                        </li>{" "}
                                        <li />{" "}
                                        <li>
                                          <i className="bx bx-check" /> Box
                                          Lunch, Water, Dinner and Snacks{" "}
                                        </li>{" "}
                                      </ul>
                                    </div>{" "}
                                  </li>{" "}
                                  <li>
                                    <div className="timeline-index">
                                      <div className="index-circle">
                                        <h5> 03 </h5>{" "}
                                      </div>{" "}
                                    </div>{" "}
                                    <div className="timeline-content">
                                      <h5> DAY 3: Departure And Small Tour </h5>
                                      <strong> 10.00 AM to 10.00 PM </strong>
                                      <p>
                                        {" "}
                                        Pellentesque accumsan magna in augue
                                        sagittis, non fringilla eros
                                        molestie.Sed feugiat mi nec ex vehicula,
                                        nec vestibulum orci semper.Class aptent
                                        taciti sociosqu ad litora torquent per
                                        conubia nostra, per inceptos
                                        himenaeos.Donec tristique commodo
                                        fringilla.{" "}
                                      </p>
                                      <ul>
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" />{" "}
                                          Specilaized Bilingual Guide{" "}
                                        </li>{" "}
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" /> Private
                                          Transport{" "}
                                        </li>{" "}
                                        <li />
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" /> Entrance
                                          Fees{" "}
                                        </li>{" "}
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" /> Box
                                          Lunch, Water, Dinner and Snacks{" "}
                                        </li>
                                      </ul>{" "}
                                    </div>{" "}
                                  </li>{" "}
                                  <li>
                                    <div className="timeline-index">
                                      <div className="index-circle">
                                        <h5> 04 </h5>{" "}
                                      </div>{" "}
                                    </div>
                                    <div className="timeline-content">
                                      <h5> DAY 4: Departure And Small Tour </h5>{" "}
                                      <strong> 10.00 AM to 10.00 PM </strong>
                                      <p>
                                        {" "}
                                        Pellentesque accumsan magna in augue
                                        sagittis, non fringilla eros
                                        molestie.Sed feugiat mi nec ex vehicula,
                                        nec vestibulum orci semper.Class aptent
                                        taciti sociosqu ad litora torquent per
                                        conubia nostra, per inceptos
                                        himenaeos.Donec tristique commodo
                                        fringilla.{" "}
                                      </p>
                                      <ul>
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" />{" "}
                                          Specilaized Bilingual Guide{" "}
                                        </li>{" "}
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" /> Private
                                          Transport{" "}
                                        </li>
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" /> Entrance
                                          Fees{" "}
                                        </li>{" "}
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" /> Box
                                          Lunch, Water, Dinner and Snacks{" "}
                                        </li>
                                      </ul>{" "}
                                    </div>{" "}
                                  </li>{" "}
                                  <li>
                                    <div className="timeline-index">
                                      <div className="index-circle">
                                        <h5> 05 </h5>{" "}
                                      </div>{" "}
                                    </div>{" "}
                                    <div className="timeline-content">
                                      <h5> DAY 5: Departure And Small Tour </h5>{" "}
                                      <strong> 10.00 AM to 10.00 PM </strong>
                                      <p>
                                        {" "}
                                        Pellentesque accumsan magna in augue
                                        sagittis, non fringilla eros
                                        molestie.Sed feugiat mi nec ex vehicula,
                                        nec vestibulum orci semper.Class aptent
                                        taciti sociosqu ad litora torquent per
                                        conubia nostra, per inceptos
                                        himenaeos.Donec tristique commodo
                                        fringilla.{" "}
                                      </p>
                                      <ul>
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" />{" "}
                                          Specilaized Bilingual Guide{" "}
                                        </li>{" "}
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" /> Private
                                          Transport{" "}
                                        </li>{" "}
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" /> Entrance
                                          Fees{" "}
                                        </li>{" "}
                                        <li />{" "}
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" /> Box
                                          Lunch, Water, Dinner and Snacks
                                        </li>{" "}
                                      </ul>{" "}
                                    </div>{" "}
                                  </li>{" "}
                                </ul>{" "}
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
                              <div className="row">
                                <div className="col-lg-8 col-md-8">
                                  <div className="package-grid-one">
                                    <div className="single-grid">
                                      <Link
                                        to={gallery1Img}
                                        className="g-img-sm-1 main-gallary"
                                      >
                                        <img
                                          src={gallery1Img}
                                          alt="gallary-img"
                                        />
                                      </Link>
                                      <Link
                                        to={gallery2Img}
                                        className="g-img-sm-2 main-gallary"
                                      >
                                        <img
                                          src={gallery2Img}
                                          alt="gallary-img"
                                        />
                                      </Link>
                                      <Link
                                        to={galleryGxx1Img}
                                        className="g-img-md main-gallary"
                                      >
                                        <img
                                          src={galleryGxx1Img}
                                          alt="gallary-img"
                                        />
                                      </Link>{" "}
                                    </div>{" "}
                                    <div className="single-grid mt-24">
                                      <Link
                                        to={gallery2Img}
                                        className="g-img-sm-1 main-gallary"
                                      >
                                        <img
                                          src={gallery2Img}
                                          alt="gallary-img"
                                        />
                                      </Link>{" "}
                                      <Link
                                        to={gallery4Img}
                                        className="g-img-sm-2 main-gallary"
                                      >
                                        <img
                                          src={gallery4Img}
                                          alt="gallary-img"
                                        />
                                      </Link>{" "}
                                      <Link
                                        to={galleryGxx2Img}
                                        className="g-img-md main-gallary"
                                      >
                                        <img
                                          src={galleryGxx2Img}
                                          alt="gallary-img"
                                        />
                                      </Link>{" "}
                                    </div>
                                    <div className="single-grid mt-24">
                                      <Link
                                        to={gallery5Img}
                                        className="g-img-sm-1 main-gallary"
                                      >
                                        <img
                                          src={gallery5Img}
                                          alt="gallary-img"
                                        />
                                      </Link>{" "}
                                      <Link
                                        to={gallery6Img}
                                        className="g-img-sm-2 main-gallary"
                                      >
                                        <img
                                          src={gallery6Img}
                                          alt="gallary-img"
                                        />
                                      </Link>{" "}
                                      <Link
                                        to={galleryGxx3Img}
                                        className="g-img-md main-gallary"
                                      >
                                        <img
                                          src={galleryGxx3Img}
                                          alt="gallary-img"
                                        />
                                      </Link>{" "}
                                    </div>
                                  </div>{" "}
                                </div>{" "}
                                <div className="col-lg-4 col-md-4">
                                  <div className="package-grid-two">
                                    <div className="single-grid-2">
                                      <Link
                                        to={galleryGxl1Img}
                                        className="main-gallary"
                                      >
                                        <img
                                          src={galleryGxl1Img}
                                          alt="gallary-img"
                                        />
                                      </Link>{" "}
                                    </div>{" "}
                                    <div className="single-grid-2 mt-24">
                                      <Link
                                        to={galleryGxl2Img}
                                        className="single-grid-2 main-gallary mt-30"
                                      >
                                        <img
                                          src={galleryGxl2Img}
                                          alt="gallary-img"
                                        />
                                      </Link>{" "}
                                    </div>{" "}
                                    <div className="single-grid-2 mt-24">
                                      <Link
                                        to={galleryGxl3Img}
                                        className="main-gallary mt-30"
                                      >
                                        <img
                                          src={galleryGxl3Img}
                                          alt="gallary-img"
                                        />
                                      </Link>{" "}
                                    </div>
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </SRLWrapper>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-lg-4">
                  <div className="package-d-sidebar">
                    <div className="row">
                      <Booking />
                      <div className="col-lg-12 col-md-6">
                        <div className="p-sidebar-cards mt-40">
                          <h5 className="package-d-head"> Popular Packages </h5>{" "}
                          <ul className="package-cards">
                            <li className="package-card-sm">
                              <div className="p-sm-img">
                                <img src={pm_sm_1} alt="" />
                              </div>{" "}
                              <div className="package-info">
                                <div className="package-date-sm">
                                  <strong>
                                    {" "}
                                    <i className="flaticon-calendar" /> 5 Days /
                                    6 night{" "}
                                  </strong>{" "}
                                </div>{" "}
                                <h3>
                                  {" "}
                                  <i className="flaticon-arrival" />
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/package-details`}
                                  >
                                    {" "}
                                    Lake Garda{" "}
                                  </Link>{" "}
                                </h3>{" "}
                                <h5>
                                  {" "}
                                  <span> $180 </span>/Per Person{" "}
                                </h5>{" "}
                              </div>{" "}
                            </li>{" "}
                            <li className="package-card-sm">
                              <div className="p-sm-img">
                                <img src={pm_sm_4} alt="" />
                              </div>{" "}
                              <div className="package-info">
                                <div className="package-date-sm">
                                  <strong>
                                    {" "}
                                    <i className="flaticon-calendar" /> 5 Days /
                                    6 night{" "}
                                  </strong>{" "}
                                </div>{" "}
                                <h3>
                                  {" "}
                                  <i className="flaticon-arrival" />
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/package-details`}
                                  >
                                    {" "}
                                    Kidepo National park{" "}
                                  </Link>{" "}
                                </h3>{" "}
                                <h5>
                                  {" "}
                                  <span> $180 </span>/Per Person{" "}
                                </h5>{" "}
                              </div>{" "}
                            </li>{" "}
                            <li className="package-card-sm">
                              <div className="p-sm-img">
                                <img src={pm_sm_2} alt="" />
                              </div>{" "}
                              <div className="package-info">
                                <div className="package-date-sm">
                                  <strong>
                                    {" "}
                                    <i className="flaticon-calendar" /> 5 Days /
                                    6 night{" "}
                                  </strong>{" "}
                                </div>{" "}
                                <h3>
                                  {" "}
                                  <i className="flaticon-arrival" />
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/package-details`}
                                  >
                                    {" "}
                                    Amalfi Costa{" "}
                                  </Link>{" "}
                                </h3>{" "}
                                <h5>
                                  {" "}
                                  <span> $180 </span>/Per Person{" "}
                                </h5>{" "}
                              </div>{" "}
                            </li>{" "}
                            <li className="package-card-sm">
                              <div className="p-sm-img">
                                <img src={pm_sm_3} alt="" />
                              </div>{" "}
                              <div className="package-info">
                                <div className="package-date-sm">
                                  <strong>
                                    {" "}
                                    <i className="flaticon-calendar" /> 5 Days /
                                    6 night{" "}
                                  </strong>{" "}
                                </div>{" "}
                                <h3>
                                  {" "}
                                  <i className="flaticon-arrival" />
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/package-details`}
                                  >
                                    {" "}
                                    Mount Dtna{" "}
                                  </Link>{" "}
                                </h3>{" "}
                                <h5>
                                  {" "}
                                  <span> $180 </span>/Per Person{" "}
                                </h5>{" "}
                              </div>{" "}
                            </li>{" "}
                            <li className="package-card-sm">
                              <div className="p-sm-img">
                                <img src={pm_sm_4} alt="" />
                              </div>{" "}
                              <div className="package-info">
                                <div className="package-date-sm">
                                  <strong>
                                    {" "}
                                    <i className="flaticon-calendar" /> 5 Days /
                                    6 night{" "}
                                  </strong>{" "}
                                </div>{" "}
                                <h3>
                                  {" "}
                                  <i className="flaticon-arrival" />
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/package-details`}
                                  >
                                    {" "}
                                    Fench Rivirany{" "}
                                  </Link>{" "}
                                </h3>{" "}
                                <h5>
                                  {" "}
                                  <span> $180 </span>/Per Person{" "}
                                </h5>{" "}
                              </div>{" "}
                            </li>{" "}
                          </ul>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="col-lg-12 col-md-6">
                        <div className="p-sidebar-organizer mt-40">
                          <h5 className="package-d-head"> Organized By </h5>{" "}
                          <div className="organizer-card">
                            <div className="organizer-img">
                              <img src={organizer} alt="" />
                            </div>{" "}
                            <div className="organizer-info">
                              <h5> Travelhotel </h5> <p> Member since 2021 </p>{" "}
                              <ul className="organizer-rating">
                                <li>
                                  {" "}
                                  <i className="bx bxs-star" />{" "}
                                </li>{" "}
                                <li>
                                  {" "}
                                  <i className="bx bxs-star" />{" "}
                                </li>{" "}
                                <li>
                                  {" "}
                                  <i className="bx bxs-star" />{" "}
                                </li>{" "}
                                <li>
                                  {" "}
                                  <i className="bx bxs-star" />{" "}
                                </li>{" "}
                                <li>
                                  {" "}
                                  <i className="bx bx-star" />{" "}
                                </li>{" "}
                              </ul>{" "}
                              <h5> 500 Reviews </h5>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="p-ask-btn">
                            <Link to={`${process.env.PUBLIC_URL}/contact`}>
                              {" "}
                              ASK A QUESTION{" "}
                            </Link>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="col-lg-12 col-md-6">
                        <div className="p-sidebar-banner mt-40">
                          <img
                            src={sidebarBannar}
                            alt=""
                            className="img-fluid"
                          />
                          <div className="sidebar-banner-overlay">
                            <div className="overlay-content">
                              <h3> Get 50 % Off In Dubai Tour </h3>{" "}
                              <div className="sidebar-banner-btn">
                                <Link to={`#`}> Book Now </Link>{" "}
                              </div>
                            </div>{" "}
                          </div>
                        </div>{" "}
                      </div>{" "}
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

export default PackageDetails;
