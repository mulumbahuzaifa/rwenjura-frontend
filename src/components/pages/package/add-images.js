import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Headers from "../../common/headers";
import Footers from "../../common/footers";
import { toast } from "react-toastify";
import Toast from "../../LoadingError/Toast";

import axios from "axios";
const ImagesCreate = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };
  const [file, setFile] = useState(null);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  let history = useNavigate();

  const url = window.location.pathname;
  const productId = url.substring(url.lastIndexOf("/") + 1);

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const productGallaryCreate = useSelector(state => state.productGallaryCreate);
  const {
    loading: loadingCreateGallary,
    error: errorCreateGallary,
    success: successCreateGallary,
  } = productGallaryCreate;

  useEffect(() => {
    scrollTop();
  }, []);

  // const handleImageSubmit = e => {
  //   e.preventDefault();
  //   dispatch(
  //     createProductGallary(productId, {
  //       image,
  //     })
  //   );
  // };

  const handleSubmit = async e => {
    e.preventDefault();
    const newProduct = {};
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newProduct.image = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    try {
      await axios.post(
        `http://localhost:5000/api/products/${productId}/images`,
        newProduct,
        config
      );
      toast.success("Image Successfully Added", Toastobjects);
      window.location.replace("/package-details/" + productId);
    } catch (err) {}
  };

  return (
    <>
      <Headers /> <Toast />
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
              required
              style={{ display: "none" }}
              onChange={e => setFile(e.target.files[0])}
            />
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

export default ImagesCreate;
