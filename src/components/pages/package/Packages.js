import React, { Component, useEffect } from "react";
import { Link, useSearchParams, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../../Redux/Actions/ProductActions";
import Loading from "../../LoadingError/Loading";
import Message from "../../LoadingError/Error";
import Headers from "../../common/headers";
import Footers from "../../common/footers";
import Pagination from "./Pagination";

const Packages = ({ match }) => {
  // const { keyword, pagenumber } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const { keyword } = useParams();
  const { pageNumber } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products, page, pages } = productList;
  const PF = "https://rwenjura-server.herokuapp.com/images/";
  useEffect(() => {
    console.log(listProduct);
    dispatch(listProduct(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <div>
      <Headers />
      {/* ===============  breadcrumb area start =============== */}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="breadcrumb-wrap">
                <h2> Tour Package </h2>{" "}
                <ul className="breadcrumb-links">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}> Home </Link>{" "}
                    <i className="bx bx-chevron-right" />
                  </li>{" "}
                  <li> Tour Package </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* ===============  breadcrumb area end =============== */}

      {/* ===============  Package  area start =============== */}
      <div className="package-area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-head pb-45">
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
                {console.log(products)}
                {products.map((obj, i) => {
                  // return <h2 key={i}>{obj.id} </h2>;
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                      data-wow-duration="1500ms"
                      data-wow-delay="0ms"
                      key={obj._id}
                    >
                      <div className="package-card">
                        <div className="package-thumb">
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details/${obj._id}`}
                          >
                            <img
                              src={PF + obj.image}
                              alt=""
                              className="img-fluid"
                            />
                          </Link>
                        </div>{" "}
                        <div className="package-details">
                          <div className="package-info">
                            <h5>
                              {" "}
                              <span>{obj.price.toLocaleString()} </span>
                              /PerPerson{" "}
                            </h5>{" "}
                            <h5>
                              <i className="flaticon-calendar" /> {obj.name}{" "}
                            </h5>{" "}
                          </div>{" "}
                          <h3>
                            <i className="flaticon-arrival" />
                            <Link
                              to={`${process.env.PUBLIC_URL}/package-details/${obj._id}`}
                            >
                              {" "}
                              {obj.name}{" "}
                            </Link>{" "}
                          </h3>{" "}
                          <div className="package-rating">
                            <strong>
                              {" "}
                              <i className="bx bxs-star" />{" "}
                              <span className="me-1"> {obj.rating} </span>{" "}
                              Rating
                            </strong>
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  );
                })}
              </div>
            </>
          )}
          <div className="row">
            <div className="col-lg-12">
              <div className="pagination mt-30">
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* ===============  Package  area end =============== */}
      <Footers />
    </div>
  );
};

export default Packages;
