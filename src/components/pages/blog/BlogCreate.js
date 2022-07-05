import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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

import sidebarBanner from "../../../assets/images/sidebar-banner.png";

import axios from "axios";
const BlogCreate = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useNavigate();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const handleSubmit = async e => {
    e.preventDefault();
    const newPost = {
      username: userInfo.name,
      title,
      description,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;
      try {
        await axios
          .post("http://localhost:5000/api/upload", data)
          .then(result => {
            newPost.image = result.data.secure_url;
          });
      } catch (err) {}
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace("/blog-details/" + res.data._id);
    } catch (err) {}
  };

  return (
    <>
      <Headers />{" "}
      {/* ===============  Blog wrapper area start =============== */}{" "}
      <div className="write">
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon bx bx-image-alt"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={e => setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeInput writeText"
              onChange={e => setDesc(e.target.value)}
            ></textarea>
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
      {/* ===============  Blog wrapper area end =============== */} <Footers />
    </>
  );
};

export default BlogCreate;
