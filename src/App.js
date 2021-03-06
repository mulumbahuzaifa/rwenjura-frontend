import "./App.css";
import React, { Component } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//Image LightBox

//Layout default import from components.
import MainLayout from "./components/layouts/main";
import MainTwoLayout from "./components/layouts/main-two";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

//Import wrapping layout

//Import all page from components
import AboutUs from "./components/pages/about-us/AboutUs";
import Destinations from "./components/pages/destinations/Destinations";
import Packages from "./components/pages/package/Packages";
import Contact from "./components/pages/contact/Contact";
import Faq from "./components/pages/faq/Faq";
import Error4 from "./components/pages/404/404";
import GuideComponent from "./components/pages/guide/GuideComponent";
import GalleryComponent from "./components/pages/gallary/GalleryComponent";
import PackageSidebar from "./components/pages/package/PackageSidebar";
import PackageStanderd from "./components/pages/package/PackageStanderd";
import PackageDetails from "./components/pages/package/PackageDetails";
import BlogComponent from "./components/pages/blog/BlogComponent";
import BlogSidebar from "./components/pages/blog/BlogSidebar";
import BlogStandard from "./components/pages/blog/BlogStandard";
import BlogDetails from "./components/pages/blog/BlogDetails";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/Register/Register";
import ProfileScreen from "./components/pages/profile/ProfileScreen";
import commerce from "./lib/commerce";
import PrivateRouter from "./PrivateRouter";
import BlogCreate from "./components/pages/blog/BlogCreate";
import PackageCreate from "./components/pages/package/add-package";
import Bookings from "./components/pages/bookings/Bookings";
import BookingDetails from "./components/pages/bookings/Booking-details";
import ImagesCreate from "./components/pages/package/add-images";
import TravelPlanCreate from "./components/pages/package/add-travel-plan";

//Default Warniing Error Hide
// console.log = console.warn = console.error = () => {};

/*
 * Version : 0.1
 * Event : Rendering all content to web.
 * Actions: Define all routes and page.
 * @return html
 * */

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route exact path="/" element={<MainLayout />} />
          <Route exact path="/search/:keyword" element={<Packages />} />
          <Route exact path="/page/:pageNumber" element={<Packages />} />
          <Route
            exact
            path="/search/:keyword/page/:pageNumber"
            element={<Packages />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/about-us`}
            element={<AboutUs />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/destination`}
            element={<Destinations />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/package`}
            element={<Packages />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/package-details/:id`}
            element={<PackageDetails />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/booking-details/:id`}
            element={<BookingDetails />}
          />{" "}
          <Route path={`${process.env.PUBLIC_URL}/faq`} element={<Faq />} />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/guide`}
            element={<GuideComponent />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/gallary`}
            element={<GalleryComponent />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/blog`}
            element={<BlogComponent />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/bookings`}
            element={<Bookings />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/blog-details/:id`}
            element={<BlogDetails />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/create-blog`}
            element={<BlogCreate />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/contact`}
            element={<Contact />}
          />{" "}
          <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/register`}
            element={<Register />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/add-product`}
            element={<PackageCreate />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/add-images/:id`}
            element={<ImagesCreate />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/add-travel-plan/:id`}
            element={<TravelPlanCreate />}
          />{" "}
          <Route
            path={`${process.env.PUBLIC_URL}/profile`}
            element={
              <PrivateRouter>
                <ProfileScreen />
              </PrivateRouter>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
