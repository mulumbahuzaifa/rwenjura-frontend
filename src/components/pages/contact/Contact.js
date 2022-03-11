import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Headers from "../../common/headers";
import Footers from "../../common/footers";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Toast from "../../LoadingError/Toast";

const Result = () => {
  const toastId = React.useRef(null);
  const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };
  return (
    <p>Your message has been submited successfully. I will contact you soon</p>
  );
};
const Contact = () => {
  const toastId = React.useRef(null);
  const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.YOUR_SERVICE_ID,
        process.env.YOUR_TEMPLATE_ID,
        form.current,
        process.env.YOUR_USER_ID
      )
      .then(
        result => {
          // toastId.current = toast.success("Profile Updated", Toastobjects);
        },
        error => {
          console.log(error.text);
        }
      );
    toast.success("Message Submited successfully", Toastobjects);
    e.target.reset();
    showResult(true);
  };

  return (
    <>
      <Headers /> {/* ===============  breadcrumb area start =============== */}{" "}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="breadcrumb-wrap">
                <h2> Contact US </h2>{" "}
                <ul className="breadcrumb-links">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/`}> Home </Link>{" "}
                    <i className="bx bx-chevron-right" />
                  </li>{" "}
                  <li> Contact Us </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Toast />
      {/* ===============  breadcrumb area end =============== */}{" "}
      <div className="contact-wrapper pt-90">
        <div className="contact-cards">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="contact-card">
                  <div className="contact-icon">
                    {" "}
                    <i className="flaticon-arrival" />
                  </div>{" "}
                  <div className="contact-info">
                    <h5> Address </h5>{" "}
                    <p>PO.Box 930004 Lugard Street, Fort Portal, Uganda </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="contact-card">
                  <div className="contact-icon">
                    {" "}
                    <i className="flaticon-customer-service" />
                  </div>{" "}
                  <div className="contact-info">
                    <h5> Email & amp; Phone </h5>{" "}
                    <p> +256-778-876-071| info @rwenjuratoursandtravel. com </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="contact-card">
                  <div className="contact-icon">
                    {" "}
                    <i className="flaticon-thumbs-up" />
                  </div>{" "}
                  <div className="contact-info">
                    <h5> Social Media </h5>{" "}
                    <ul className="contact-icons">
                      <li>
                        <a href="https://www.instagram.com/rwenjuratours/">
                          {" "}
                          <i className="bx bxl-instagram" />{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        <a href="https://twitter.com/RwenjuraTours?t=a0TaHw32Y9-XBhaNKCYQaA&s=09">
                          {" "}
                          <i className="bx bxl-facebook" />{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        <a href="https://twitter.com/RwenjuraTours?t=a0TaHw32Y9-XBhaNKCYQaA&s=09">
                          {" "}
                          <i className="bx bxl-twitter" />{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        <a href="https://wa.me/message/4IUPSNXB6TUFK1">
                          {" "}
                          <i className="bx bxl-whatsapp" />{" "}
                        </a>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="container">
          <div className="contact-inputs pt-100">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-details">
                  <h5 className="contact-d-head"> Get In Touch </h5>{" "}
                  <p>
                    {" "}
                    Our mission is to serve our clients by operating memorable
                    safari tours suited for our clients while emphasizing
                    quality, professionalism and a personal touch. Through our
                    dedicated office staff and field guides, we help put
                    together exciting and wonderful vacations for our clients.
                    We help you acquire the necessary permits, book
                    accommodations, arrange transport and guidance throughout
                    your tour.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-6">
                <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                    <h5 className="contact-d-head"> Contact Us </h5>{" "}
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="user_name"
                          required
                        />
                      </div>{" "}
                      <div className="col-lg-6">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          required
                        />
                      </div>{" "}
                      <div className="col-lg-6">
                        <input
                          type="email"
                          placeholder="Your Email"
                          required
                          name="user_email"
                        />
                      </div>{" "}
                      <div className="col-lg-6">
                        <input
                          type="text"
                          placeholder="Phone"
                          name="phone"
                          required
                        />
                      </div>{" "}
                      <div className="col-lg-12">
                        <textarea
                          cols={30}
                          rows={7}
                          placeholder="Write Message"
                          defaultValue={""}
                          name="message"
                        />{" "}
                      </div>{" "}
                      <div className="col-lg-12">
                        <input type="submit" defaultValue="Submit Now" />
                        <div> {result ? <Result /> : null}</div>
                      </div>{" "}
                    </div>{" "}
                  </form>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Footers />
    </>
  );
};

export default Contact;
