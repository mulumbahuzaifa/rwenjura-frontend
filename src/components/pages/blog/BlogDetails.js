import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import b_sm_5 from "../../../assets/images/blog/b-sm5.png";

import bd_png from "../../../assets/images/blog/bd.png";
import b_g_1 from "../../../assets/images/blog/blog-g-1.png";
import b_g_2 from "../../../assets/images/blog/blog-g-2.png";
import b_g_3 from "../../../assets/images/blog/blog-g-3.png";
import c_1 from "../../../assets/images/blog/c-1.png";
import c_2 from "../../../assets/images/blog/c-2.png";
import c_3 from "../../../assets/images/blog/c-3.png";

import b_sm_1 from "../../../assets/images/blog/b-sm1.png";
import b_sm_2 from "../../../assets/images/blog/b-sm2.png";
import b_sm_3 from "../../../assets/images/blog/b-sm3.png";
import b_sm_4 from "../../../assets/images/blog/b-sm4.png";
import Headers from "../../common/headers";
import Footers from "../../common/footers";
import Message from "../../LoadingError/Error";
import Loading from "../../LoadingError/Loading";

import sidebarBanner from "../../../assets/images/sidebar-banner.png";

const BlogDetails = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  // const { user } = useContext(Context);
  const isReady = post !== undefined;
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [dataIsLoading, setDataIsLoading] = useState(false);
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      // setComments(res.data.comments);
      setDataIsLoading(true);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
        data: { username: userInfo.name },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newPost = {
      comment,
    };

    try {
      // const {
      //   userLogin: { userInfo },
      // } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const res = await axios.post(
        `http://localhost:5000/api/posts/${post._id}/comment`,
        newPost,
        config
      );
      window.location.replace("/blog-details/" + post._id);
    } catch (err) {}
  };

  // const handleUpdate = async () => {
  //   try {
  //     await axios.put(`/posts/${post._id}`, {
  //       username: user.username,
  //       title,
  //       desc,
  //     });
  //     setUpdateMode(false)
  //   } catch (err) {}
  // };
  return (
    <>
      <Headers /> {/* ===============  breadcrumb area start =============== */}{" "}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="breadcrumb-wrap">
                <h2> Blog details </h2>{" "}
                <ul className="breadcrumb-links">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}> Home </Link>{" "}
                    <i className="bx bx-chevron-right" />
                  </li>{" "}
                  <li> Blog Details </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* ===============  breadcrumb area end =============== */}{" "}
      {/* ===============  Blog wrapper area start =============== */}{" "}
      <div className="blog-details-wrapper pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details">
                <div className="blog-title-xl">
                  <h3>{post.title}</h3>{" "}
                  <div className="blog-info-xl">
                    <Link to={`#`} className="blog-writer">
                      {" "}
                      <i className="flaticon-user" /> {post.username}
                    </Link>{" "}
                    <Link to={`#`} className="blog-comment">
                      {" "}
                      <i className="flaticon-comment" /> <span> (3) </span>
                      Comment
                    </Link>
                  </div>{" "}
                </div>{" "}
                <div className="blog-img-xl">
                  <img src={post.image} alt="" className="img-fluid" />
                  <div className="blog-date">
                    {" "}
                    <i className="flaticon-calendar" />{" "}
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </div>{" "}
                </div>{" "}
                <div className="blog-texts mt-30">
                  <p>{post.description}</p>{" "}
                </div>{" "}
                {userInfo ? (
                  <div className="blog-bottom">
                    {userInfo.isAdmin === true ? (
                      <>
                        <div className="blog-tags">
                          <i className="bx bx-highlight trash" />
                        </div>
                        <div className="blog-social">
                          <i
                            className="bx bx-trash trash"
                            onClick={handleDelete}
                          ></i>
                        </div>
                      </>
                    ) : (
                      <div />
                    )}
                  </div>
                ) : (
                  <div />
                )}
                <div className="blog-reply">
                  {userInfo ? (
                    <form onSubmit={handleSubmit}>
                      <h5> Leave A Comment </h5>{" "}
                      <div className="row">
                        <div className="col-lg-12">
                          <textarea
                            cols={30}
                            rows={7}
                            placeholder="Write Message"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                          />{" "}
                        </div>{" "}
                        <div className="col-lg-12">
                          <input type="submit" defaultValue="Submit Now" />
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
                <div className="blog-bottom">
                  <div className="blog-tags">
                    <h5> tags: </h5>{" "}
                    <ul>
                      <li>
                        <Link to={`#`}> Trip </Link>{" "}
                      </li>{" "}
                      <li>
                        <Link to={`#`}> Travel Forest </Link>{" "}
                      </li>{" "}
                      <li>
                        <Link to={`#`}> Tourist </Link>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="blog-social">
                    <ul>
                      <li>
                        <Link to={`#`}>
                          {" "}
                          <i className="bx bxl-instagram" />{" "}
                        </Link>{" "}
                        <Link to={`#`}>
                          {" "}
                          <i className="bx bxl-facebook" />{" "}
                        </Link>{" "}
                        <Link to={`#`}>
                          {" "}
                          <i className="bx bxl-twitter" />{" "}
                        </Link>{" "}
                        <Link to={`#`}>
                          {" "}
                          <i className="bx bxl-whatsapp" />{" "}
                        </Link>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="blog-comments">
                  <h5> {post.numComments} Comments </h5>
                  {dataIsLoading ? (
                    <ul>
                      {post.comments.length === 0 && (
                        <Message variant={"alert-info mt-3"}>
                          {" "}
                          No Comments
                        </Message>
                      )}
                      {post.comments.map(review => (
                        <li key={review._id}>
                          <div className="commentor">
                            <div className="commentor-id">
                              <strong> {review.name} </strong>{" "}
                              <p>
                                {" "}
                                <span> {review.createdAt}</span>
                              </p>{" "}
                            </div>{" "}
                          </div>{" "}
                          <p className="comment">{review.comment}</p>{" "}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Loading />
                  )}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="blog-categorie mt-40">
                      <h5 className="categorie-head"> Categories </h5>{" "}
                      <ul>
                        <li>
                          <Link to={`#`}>
                            {" "}
                            <i className="bx bxs-chevrons-right" /> Adventure
                            Tour{" "}
                          </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}>
                            {" "}
                            <i className="bx bxs-chevrons-right" /> City Tour{" "}
                          </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}>
                            {" "}
                            <i className="bx bxs-chevrons-right" /> Group Tour{" "}
                          </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}>
                            {" "}
                            <i className="bx bxs-chevrons-right" /> Couple Tour{" "}
                          </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}>
                            {" "}
                            <i className="bx bxs-chevrons-right" /> Village Tour{" "}
                          </Link>{" "}
                        </li>{" "}
                      </ul>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-12 col-md-6">
                    <div className="blog-popular mt-40">
                      <h5 className="categorie-head"> Popular Post </h5>{" "}
                      <ul>
                        <li className="blog-card-sm">
                          <div className="blog-img-sm">
                            <img src={b_sm_1} alt="" />
                          </div>{" "}
                          <div className="blog-details-sm">
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details`}
                              className="blog-title-sm"
                            >
                              {" "}
                              Lake Garda{" "}
                            </Link>{" "}
                            <div className="blog-info">
                              <Link to={`#`} className="blog-writer">
                                {" "}
                                <i className="flaticon-user" /> Dina Jems{" "}
                              </Link>{" "}
                              <Link to={`#`} className="blog-date">
                                {" "}
                                <i className="flaticon-calendar" /> 11 April,
                                2021{" "}
                              </Link>{" "}
                            </div>{" "}
                          </div>{" "}
                        </li>{" "}
                      </ul>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="blog-tag mt-40">
                      <h5 className="categorie-head"> Tag Tour </h5>{" "}
                      <ul>
                        <li>
                          <Link to={`#`}> Adventure </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}> Trip </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}> Guided </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}> Historical </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}> Road Trips </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}> Tourist </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}> Tourist </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}> Selivia </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}> Tour Guide </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}> Cultural </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}> Natural </Link>{" "}
                        </li>{" "}
                        <li>
                          <Link to={`#`}> Journey </Link>{" "}
                        </li>{" "}
                      </ul>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>{" "}
      </div>{" "}
      {/* ===============  Blog wrapper area end =============== */} <Footers />
    </>
  );
};

export default BlogDetails;
