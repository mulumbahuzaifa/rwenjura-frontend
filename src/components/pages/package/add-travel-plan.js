import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Headers from "../../common/headers";
import Footers from "../../common/footers";
import { toast } from "react-toastify";
import Toast from "../../LoadingError/Toast";
import { createProductDays } from "../../../Redux/Actions/ProductActions";
import Loading from "../../LoadingError/Loading";
import { PRODUCT_CREATE_DAYS_RESET } from "../../../Redux/Constants/ProductConstants";

import axios from "axios";
const TravelPlanCreate = () => {
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
  const [startingTime, setStartingTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const dispatch = useDispatch();
  let history = useNavigate();

  const url = window.location.pathname;
  const productId = url.substring(url.lastIndexOf("/") + 1);

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const productDaysCreate = useSelector(state => state.productDaysCreate);
  const {
    loading: loadingCreateDays,
    error: errorCreateDays,
    success: successCreateDays,
  } = productDaysCreate;

  useEffect(() => {
    if (successCreateDays) {
      toast.success("Day successfully Added", Toastobjects);
      setName("");
      setStartingTime("");
      setEndTime("");
      setDescription("");
      setTags("");
      dispatch({ type: PRODUCT_CREATE_DAYS_RESET });
      window.location.replace("/package-details/" + productId);
    }
  }, [dispatch, productId, successCreateDays]);

  const handleDaysSubmit = e => {
    e.preventDefault();
    dispatch(
      createProductDays(productId, {
        name,
        startingTime,
        endTime,
        description,
        tags,
      })
    );
  };

  //   const handleSubmit = async e => {
  //     e.preventDefault();
  //     const newDays = {
  //       name,
  //       startingTime,
  //       endTime,
  //       description,
  //       tags,
  //     };

  //     try {
  //       const config = {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${userInfo.token}`,
  //         },
  //       };
  //       const res = await axios.post(
  //         "https://rwenjura-server.herokuapp.com/api/products//images",
  //         newDays,
  //         config
  //       );
  //       toast.success("Package successfully reviewed", Toastobjects);
  //       window.location.replace("/package-details/" + res.data._id);
  //     } catch (err) {}
  //   };

  return (
    <>
      <Headers /> <Toast />
      {/* ===============  Blog wrapper area start =============== */}{" "}
      <div className="write">
        <form className="writeForm" onSubmit={handleDaysSubmit}>
          <div className="writeFormGroup">
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              required
              autoFocus={true}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <input
              required
              type="text"
              placeholder="Start Time"
              className="writeInput"
              autoFocus={true}
              onChange={e => setStartingTime(e.target.value)}
            />
            <input
              type="text"
              placeholder="End Time"
              className="writeInput"
              autoFocus={true}
              onChange={e => setEndTime(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <input
              required
              type="text"
              placeholder="Add Tags"
              className="writeInput"
              autoFocus={true}
              onChange={e => setTags(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              required
              placeholder="Description..."
              type="text"
              className="writeInput writeText"
              onChange={e => setDescription(e.target.value)}
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

export default TravelPlanCreate;
