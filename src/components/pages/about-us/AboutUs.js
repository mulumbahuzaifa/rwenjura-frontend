import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import AboutWrapper from "./AboutWrapper";
import GuideWrapper from "./GuideWrapper";
import Achievement from "../home/Achievement";
import Review from "../home/Review";
import AboutBlog from "./AboutBlog";
import Blog from "../home/Blog";
import Headers from "../../common/headers";
import Footers from "../../common/footers";
import HeaderTwo from "../../common/headers2";

class AboutUs extends Component {
  render() {
    return (
      <>
        <Headers />
        <BreadCrumb />
        <AboutWrapper />
        <GuideWrapper />
        <Achievement />
        <Review />
        <Blog />
        <Footers />
      </>
    );
  }
}

export default AboutUs;
