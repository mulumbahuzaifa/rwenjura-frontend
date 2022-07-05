import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Headers from "../../common/headers";
import Footers from "../../common/footers";
import axios from "axios";
import { useLocation } from "react-router";

const BlogComponent = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Headers /> {/* ===============  breadcrumb area start =============== */}{" "}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="breadcrumb-wrap">
                <h2> Blog </h2>{" "}
                <ul className="breadcrumb-links">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}> Home </Link>{" "}
                    <i className="bx bx-chevron-right" />
                  </li>{" "}
                  <li> Blog </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* ===============  breadcrumb area end =============== */}{" "}
      {/* ===============  Blog wrapper area start =============== */}{" "}
      <div className="blog-wrapper pt-90">
        <div className="container">
          <div className="row">
            {console.log(posts)}
            {posts.map(p => (
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details/${p._id}`}
                      className="blog-writer"
                    >
                      <img src={p.image} alt="" className="img-fluid" />
                    </Link>{" "}
                    <div className="blog-date">
                      {" "}
                      <i className="flaticon-calendar" />
                      {new Date(p.updatedAt).toLocaleDateString()}
                    </div>{" "}
                  </div>{" "}
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link to={`#`} className="blog-writer">
                        {" "}
                        <i className="flaticon-user" /> {p.username}
                      </Link>{" "}
                      <Link to={`#`} className="blog-comment">
                        {" "}
                        <i className="flaticon-comment" />{" "}
                        <span> ({p.numComments}) </span>
                        Comment
                      </Link>
                    </div>{" "}
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details/${p._id}`}
                      className="blog-title"
                    >
                      {p.description.length > 20
                        ? `${p.description.substring(0, 20)}...`
                        : p.description}
                    </Link>{" "}
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details/${p._id}`}
                        className="btn-common-sm"
                      >
                        {" "}
                        Read More{" "}
                      </Link>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              </div>
            ))}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* ===============  Blog wrapper area end =============== */} <Footers />
    </>
  );
};

export default BlogComponent;
