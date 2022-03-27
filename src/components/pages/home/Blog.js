import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Import Images
import blog1Img from "../../../assets/images/blog/b-4.JPG";
import blog2Img from "../../../assets/images/blog/b-2.JPG";
import blog3Img from "../../../assets/images/blog/b-3.JPG";
import axios from "axios";
import { useLocation } from "react-router";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const PF = "https://rwenjura-server.herokuapp.com/images/";

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://rwenjura-server.herokuapp.com/api/posts" + search
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      {/* ===============  Blog area start =============== */}
      <div className="blog-area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-head pb-30">
                <h5> Latest Blog </h5>{" "}
                <h2> Stay Updated And new post our Blog </h2>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="row">
            {posts.map(p => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft animated"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="blog-card">
                  <div className="blog-img">
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details/${p._id}`}
                      className="blog-writer"
                    >
                      <img src={PF + p.image} alt="" className="img-fluid" />
                    </Link>{" "}
                    <div className="blog-date">
                      {" "}
                      <i className="flaticon-calendar" />
                      {new Date(p.updatedAt).toLocaleDateString()}
                    </div>{" "}
                  </div>
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
                </div>{" "}
              </div>
            ))}
          </div>{" "}
        </div>{" "}
      </div>
      {/* ===============  Blog area end =============== */}{" "}
    </>
  );
};

export default Blog;
