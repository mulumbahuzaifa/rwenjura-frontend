import React, { Component } from "react";
import { Link } from "react-router-dom";

import p_1 from "../../../assets/images/package/p-1.jpg";
import p_2 from "../../../assets/images/package/p-2.jpg";
import p_3 from "../../../assets/images/package/p-3.jpg";
import p_4 from "../../../assets/images/package/p-4.jpg";
import p_5 from "../../../assets/images/package/p-5.jpg";
import p_6 from "../../../assets/images/package/p-6.jpg";
import sidebarBanner from "../../../assets/images/sidebar-banner.png";
// Using an ES6 transpiler like Babel
import Slider from "react-rangeslider";
// To include the default styles
import "react-rangeslider/lib/index.css";
import $ from "jquery";
import Headers from "../../common/headers";
import Footers from "../../common/footers";

class PackageSidebar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 10,
      manageState: "",
    };
  }

  handleChangeStart = () => {
    console.log("Change event started");
  };

  handleChange = value => {
    this.setState({
      value: value,
    });
  };

  handleChangeComplete = () => {
    console.log("Change event completed");
  };

  componentDidMount() {
    var matched = $(".select-selected").length;
    if (matched === 1) {
      this.intiScripts();
    }
  }

  componentWillMount() {
    var matched = $(".select-selected").length;
    if (matched === 2) {
      this.intiScripts();
    }
  }

  intiScripts() {
    //  custom select input
    var packageSidebarClass, i, j, l, ll, selElmnt, a, b, c;
    packageSidebarClass = document.getElementsByClassName(
      "package-selected-sidebar"
    );
    l = packageSidebarClass.length;
    for (i = 0; i < l; i++) {
      selElmnt = packageSidebarClass[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      packageSidebarClass[i].appendChild(a);
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML === this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      packageSidebarClass[i].appendChild(b);
      a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
                and open/close the current select box:*/
        e.stopPropagation();
        closeAllPackageSideBarSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }

    function closeAllPackageSideBarSelect(elmnt) {
      var packageSidebarClass,
        y,
        i,
        xl,
        yl,
        arrNo = [];
      packageSidebarClass = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      xl = packageSidebarClass.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt === y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          packageSidebarClass[i].classList.add("select-hide");
        }
      }
    }
    document.addEventListener("click", closeAllPackageSideBarSelect);
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <Headers />
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="breadcrumb-wrap">
                  <h2> Package Sidebar </h2>{" "}
                  <ul className="breadcrumb-links">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/`}> Home </Link>{" "}
                      <i className="bx bx-chevron-right" />
                    </li>{" "}
                    <li> Package Sidebar </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        {/* ===============  breadcrumb area end =============== */}
        {/* ===============  Package  area start =============== */}
        <div className="package-sidebar-wrapper pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row mb-30">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="package-filter">
                      <h5> Showing 1 - 5 of 10 Result </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="custom-select package-option package-selected-sidebar">
                      <select>
                        <option value={0}> Package 1 </option>{" "}
                        <option value={1}> Package 2 </option>{" "}
                        <option value={2}> Package 3 </option>{" "}
                        <option value={3}> Package 4 </option>{" "}
                      </select>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img src={p_1} alt="" className="img-fluid" />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $180 </span>/Per Person{" "}
                          </h5>{" "}
                          <h5>
                            {" "}
                            <i className="flaticon-calendar" /> 5 Days / 6 night{" "}
                          </h5>{" "}
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
                        <div className="package-rating">
                          <strong>
                            {" "}
                            <i className="bx bxs-star" /> <span> 8 K + </span>{" "}
                            Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img src={p_2} alt="" className="img-fluid" />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $280 </span>/PerPerson{" "}
                          </h5>{" "}
                          <h5>
                            {" "}
                            <i className="flaticon-calendar" /> 5 Days / 6 night{" "}
                          </h5>{" "}
                        </div>{" "}
                        <h3>
                          {" "}
                          <i className="flaticon-arrival" />
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            {" "}
                            Lake Garda, Italy{" "}
                          </Link>{" "}
                        </h3>{" "}
                        <div className="package-rating">
                          <strong>
                            {" "}
                            <i className="bx bxs-star" /> <span> 8 K + </span>{" "}
                            Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img src={p_3} alt="" className="img-fluid" />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $120 </span>/Per Person{" "}
                          </h5>{" "}
                          <h5>
                            {" "}
                            <i className="flaticon-calendar" /> 5 Days / 6 night{" "}
                          </h5>{" "}
                        </div>{" "}
                        <h3>
                          {" "}
                          <i className="flaticon-arrival" />
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            {" "}
                            Mgahiga National Parkr{" "}
                          </Link>{" "}
                        </h3>{" "}
                        <div className="package-rating">
                          <strong>
                            {" "}
                            <i className="bx bxs-star" /> <span> 8 K + </span>{" "}
                            Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img src={p_4} alt="" className="img-fluid" />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $300 </span>/PerPerson{" "}
                          </h5>{" "}
                          <h5>
                            {" "}
                            <i className="flaticon-calendar" /> 5 Days / 6 night{" "}
                          </h5>{" "}
                        </div>{" "}
                        <h3>
                          {" "}
                          <i className="flaticon-arrival" />
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            {" "}
                            Lake Victoria, Uganda{" "}
                          </Link>{" "}
                        </h3>{" "}
                        <div className="package-rating">
                          <strong>
                            {" "}
                            <i className="bx bxs-star" /> <span> 8 K + </span>{" "}
                            Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img src={p_5} alt="" className="img-fluid" />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $240 </span>/Per Person{" "}
                          </h5>{" "}
                          <h5>
                            {" "}
                            <i className="flaticon-calendar" /> 5 Days / 6 night{" "}
                          </h5>{" "}
                        </div>{" "}
                        <h3>
                          {" "}
                          <i className="flaticon-arrival" />
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            {" "}
                            French Rivira, France{" "}
                          </Link>{" "}
                        </h3>{" "}
                        <div className="package-rating">
                          <strong>
                            {" "}
                            <i className="bx bxs-star" /> <span> 8 K + </span>{" "}
                            Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img src={p_6} alt="" className="img-fluid" />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $145 </span>/Per Person{" "}
                          </h5>{" "}
                          <h5>
                            {" "}
                            <i className="flaticon-calendar" /> 5 Days / 6 night{" "}
                          </h5>{" "}
                        </div>{" "}
                        <h3>
                          {" "}
                          <i className="flaticon-arrival" />
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            {" "}
                            Lake Geneva, France{" "}
                          </Link>{" "}
                        </h3>{" "}
                        <div className="package-rating">
                          <strong>
                            {" "}
                            <i className="bx bxs-star" /> <span> 8 K + </span>{" "}
                            Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img src={p_1} alt="" className="img-fluid" />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $180 </span>/Per Person{" "}
                          </h5>{" "}
                          <h5>
                            {" "}
                            <i className="flaticon-calendar" /> 5 Days / 6 night{" "}
                          </h5>{" "}
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
                        <div className="package-rating">
                          <strong>
                            {" "}
                            <i className="bx bxs-star" /> <span> 8 K + </span>{" "}
                            Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img src={p_2} alt="" className="img-fluid" />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $280 </span>/Per Person{" "}
                          </h5>{" "}
                          <h5>
                            {" "}
                            <i className="flaticon-calendar" /> 5 Days / 6 night{" "}
                          </h5>{" "}
                        </div>{" "}
                        <h3>
                          {" "}
                          <i className="flaticon-arrival" />
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            {" "}
                            Lake Garda, Italy{" "}
                          </Link>{" "}
                        </h3>{" "}
                        <div className="package-rating">
                          <strong>
                            {" "}
                            <i className="bx bxs-star" /> <span> 8 K + </span>{" "}
                            Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img src={p_3} alt="" className="img-fluid" />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $120 </span>/Per Person{" "}
                          </h5>{" "}
                          <h5>
                            {" "}
                            <i className="flaticon-calendar" /> 5 Days / 6 night{" "}
                          </h5>{" "}
                        </div>{" "}
                        <h3>
                          {" "}
                          <i className="flaticon-arrival" />
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            {" "}
                            Mgahiga National Parkr{" "}
                          </Link>{" "}
                        </h3>{" "}
                        <div className="package-rating">
                          <strong>
                            {" "}
                            <i className="bx bxs-star" /> <span> 8 K + </span>{" "}
                            Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="package-card">
                      <div className="package-thumb">
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          <img src={p_4} alt="" className="img-fluid" />
                        </Link>{" "}
                      </div>{" "}
                      <div className="package-details">
                        <div className="package-info">
                          <h5>
                            {" "}
                            <span> $300 </span>/Per Person{" "}
                          </h5>{" "}
                          <h5>
                            {" "}
                            <i className="flaticon-calendar" /> 5 Days / 6 night{" "}
                          </h5>{" "}
                        </div>{" "}
                        <h3>
                          {" "}
                          <i className="flaticon-arrival" />
                          <Link
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            {" "}
                            Lake Victoria, Uganda{" "}
                          </Link>{" "}
                        </h3>{" "}
                        <div className="package-rating">
                          <strong>
                            {" "}
                            <i className="bx bxs-star" /> <span> 8 K + </span>{" "}
                            Rating
                          </strong>
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="pagination mt-30">
                      <Link to={"#"}>
                        {" "}
                        <i className="bx bx-chevron-left" />{" "}
                      </Link>{" "}
                      <Link to={"#"} className="active">
                        {" "}
                        1{" "}
                      </Link>{" "}
                      <Link to={"#"}> 2 </Link> <Link to={"#"}> 3 </Link>{" "}
                      <Link to={"#"}> 4 </Link>{" "}
                      <Link to={"#"}>
                        {" "}
                        <i className="bx bx-chevron-right" />{" "}
                      </Link>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-4">
                <div className="package-sidebar">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="sidebar-searchbox">
                        <div className="input-group search-box">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Tour..."
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                          >
                            {" "}
                            <i className="bx bx-paper-plane" />{" "}
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="col-lg-12 col-md-12">
                      <div className="sidebar-range mt-40">
                        <h5 className="categorie-head"> Price Range </h5>{" "}
                        <div className="slider">
                          <Slider
                            min={0}
                            max={100}
                            value={value}
                            onChangeStart={this.handleChangeStart}
                            onChange={this.handleChange}
                            onChangeComplete={this.handleChangeComplete}
                          />{" "}
                          <div className="value"> {value} </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="col-lg-12 col-md-6">
                      <div className="sidebar-duration mt-40">
                        <h5 className="categorie-head"> Durations </h5>{" "}
                        <div className="durations-option radio-box">
                          <div className="single-option">
                            <input
                              type="radio"
                              name="duration"
                              id="duration1"
                            />
                            <label htmlFor="duration1"> 0 - 24 Hour </label>{" "}
                          </div>{" "}
                          <div className="single-option">
                            <input
                              type="radio"
                              name="duration"
                              id="duration2"
                            />
                            <label htmlFor="duration2"> 1 - 2 Days </label>{" "}
                          </div>{" "}
                          <div className="single-option">
                            <input
                              type="radio"
                              name="duration"
                              id="duration3"
                            />
                            <label htmlFor="duration3"> 2 - 3 Days </label>{" "}
                          </div>{" "}
                          <div className="single-option">
                            <input
                              type="radio"
                              name="duration"
                              id="duration4"
                            />
                            <label htmlFor="duration4"> 3 - 4 Days </label>{" "}
                          </div>{" "}
                          <div className="single-option">
                            <input
                              type="radio"
                              name="duration"
                              id="duration5"
                            />
                            <label htmlFor="duration5"> 5 - 6 Days </label>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="col-lg-12 col-md-6">
                      <div className="sidebar-categorie mt-40">
                        <h5 className="categorie-head"> Categories </h5>{" "}
                        <div className="durations-option radio-box">
                          <div className="single-option">
                            <input
                              type="radio"
                              name="categorie"
                              id="categorie1"
                            />
                            <label htmlFor="categorie1"> Adventure Tour </label>{" "}
                          </div>{" "}
                          <div className="single-option">
                            <input
                              type="radio"
                              name="categorie"
                              id="categorie2"
                            />
                            <label htmlFor="categorie2"> City Tour </label>{" "}
                          </div>{" "}
                          <div className="single-option">
                            <input
                              type="radio"
                              name="categorie"
                              id="categorie3"
                            />
                            <label htmlFor="categorie3"> Group Tour </label>{" "}
                          </div>{" "}
                          <div className="single-option">
                            <input
                              type="radio"
                              name="categorie"
                              id="categorie4"
                            />
                            <label htmlFor="categorie4"> Couple Tour </label>{" "}
                          </div>{" "}
                          <div className="single-option">
                            <input
                              type="radio"
                              name="categorie"
                              id="categorie5"
                            />
                            <label htmlFor="categorie5"> Village Tour </label>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="col-lg-12 col-md-6">
                      <div className="sidebar-banner mt-40">
                        <img src={sidebarBanner} alt="" className="img-fluid" />
                        <div className="sidebar-banner-overlay">
                          <div className="overlay-content">
                            <h3> Get 50 % Off In Dubai Tour </h3>{" "}
                            <div className="sidebar-banner-btn">
                              <Link to={"#"}> Book Now </Link>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* ===============  Package  area end =============== */} <Footers />
      </>
    );
  }
}

export default PackageSidebar;
