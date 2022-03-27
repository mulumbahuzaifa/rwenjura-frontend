import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Headers from "../../common/headers";
import Footers from "../../common/footers";
import { toast } from "react-toastify";
import Toast from "../../LoadingError/Toast";

import axios from "axios";
const PackageCreate = () => {
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
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [keyword, setKeyword] = useState();
  const [tag, setTag] = useState();
  const [price, setPrice] = useState();
  const [price_less, setPrice_less] = useState();
  const [country, setCountry] = useState();
  const [departure, setDeparture] = useState();
  const [more_desc, setMore_desc] = useState();
  const [isFeatured, setIsFeatured] = useState(false);
  const [isPopular, setIsPopular] = useState(false);
  const dispatch = useDispatch();
  let history = useNavigate();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const handleSubmit = async e => {
    e.preventDefault();
    const newProduct = {
      name,
      tag,
      description,
      price,
      price_less,
      country,
      departure,
      more_desc,
      isFeatured,
      isPopular,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newProduct.image = filename;
      try {
        await axios.post(
          "https://rwenjura-server.herokuapp.com/api/upload",
          data
        );
      } catch (err) {}
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const res = await axios.post(
        "https://rwenjura-server.herokuapp.com/api/products",
        newProduct,
        config
      );
      toast.success("Package successfully reviewed", Toastobjects);
      window.location.replace("/package-details/" + res.data._id);
    } catch (err) {}
  };

  const handleChange = e => {
    const { checked } = e.target;
    setIsFeatured(checked);
  };
  const handleChange2 = e => {
    const { checked } = e.target;
    setIsPopular(checked);
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

          <div className="writeFormGroup">
            <label for="Is-Popular">Is-Popular</label>
            <input
              type="checkbox"
              defaultChecked={isPopular}
              className="writeInput"
              name="Is-Popular"
              id="Is-Popular"
              // autoFocus={true}
              onChange={e => handleChange2(e)}
            />
          </div>
          <div className="writeFormGroup">
            <label for="Is-Featured">Is-Featured</label>
            <input
              type="checkbox"
              defaultChecked={isFeatured}
              className="writeInput"
              name="Is-Featured"
              id="Is-Featured"
              // autoFocus={true}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className="writeFormGroup">
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              required
              autoFocus={true}
              onChange={e => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="About package"
              className="writeInput"
              required
              autoFocus={true}
              onChange={e => setTag(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <input
              required
              type="text"
              placeholder="Current Price"
              className="writeInput"
              autoFocus={true}
              onChange={e => setPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="Prev Price"
              className="writeInput"
              autoFocus={true}
              onChange={e => setPrice_less(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <input
              required
              type="text"
              placeholder="Country"
              className="writeInput"
              autoFocus={true}
              onChange={e => setCountry(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Departure-Date e.g 2022/03/03"
              className="writeInput"
              autoFocus={true}
              onChange={e => setDeparture(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              required
              placeholder="Description..."
              type="text"
              className="writeInput writeText"
              onChange={e => setDesc(e.target.value)}
            ></textarea>
            <textarea
              placeholder="More-info..."
              type="text"
              className="writeInput writeText"
              onChange={e => setMore_desc(e.target.value)}
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

export default PackageCreate;
