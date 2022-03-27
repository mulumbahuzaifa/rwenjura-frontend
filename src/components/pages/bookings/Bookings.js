import React, { Component, useEffect } from "react";
import { Link, useSearchParams, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../../Redux/Actions/ProductActions";
import Loading from "../../LoadingError/Loading";
import Message from "../../LoadingError/Error";
import Headers from "../../common/headers";
import Footers from "../../common/footers";
// import Pagination from "./Pagination";
import Pagination from "../package/Pagination";
import moment from "moment";

const Bookings = ({ match }) => {
  // const { keyword, pagenumber } = props;
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const { keyword } = useParams();
  const { pageNumber } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products, page, pages } = productList;
  const PF = "https://rwenjura-server.herokuapp.com/images/";
  useEffect(() => {
    scrollTop();
    dispatch(listProduct(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <div>
      <Headers />

      {/* ===============  Package  area start =============== */}
      <div className="package-area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-head pb-45">
                <h5> Bookings </h5>{" "}
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
                            to={`${process.env.PUBLIC_URL}/booking-details/${obj._id}`}
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
                              <i className="flaticon-calendar" /> {obj.name}{" "}
                            </h5>{" "}
                          </div>{" "}
                          <h3>
                            <i className="flaticon-arrival" />
                            {obj.bookings.length === 0 && (
                              <Message variant={"alert-info mt-3"}>
                                {" "}
                                No Bookings Yet
                              </Message>
                            )}
                            {obj.bookings.length} Bookings Sofar
                          </h3>{" "}
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

export default Bookings;
