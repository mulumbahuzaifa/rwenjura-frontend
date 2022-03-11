import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../../Redux/Actions/ProductActions";
import Loading from "../../LoadingError/Loading";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../../Redux/Constants/ProductConstants";
import moment from "moment";
import DatePicker from "react-datepicker";
import { saveShippingAddress } from "../../../Redux/Actions/ProductActions";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import Toast from "../../LoadingError/Toast";


const Booking = () => {
  //   window.scrollTo(0, 0);
  // const history = useNavigate();
  // const cart = useSelector(state => state.cart);
  // const { shippingAddress } = cart;

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState();
  const [noOfPeople, setNoOfPeople] = useState();
  const [date, setNewDate] = useState();
  const [message, setMessage] = useState();

  // const dispatch = useDispatch();

  // const submitHandler = e => {
  //   e.preventDefault();
  //   dispatch(
  //     saveShippingAddress({
  //       fullName,
  //       email,
  //       phone,
  //       country,
  //       noOfPeople,
  //       date,
  //       message,
  //     })
  //   );
  //   history("/thankyou");
  // };
      const toastId = React.useRef(null);
    const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };
  const form = useRef();
  const [result, showResult] = useState(false)
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.YOUR_SERVICE_ID2, process.env.YOUR_TEMPLATE_ID2, form.current, process.env.YOUR_USER_ID)
      .then((result) => {
        
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      toast.success("Message Submited successfully", Toastobjects);
      e.target.reset()
      showResult(true)
      
  };
  // const [startDate, setDate] = useState(new Date());
  return (
    
    <div className="col-lg-12 col-md-6">
    <Toast />
      <div className="p-sidebar-form">
        <form ref={form}  onSubmit={sendEmail}>
          <h5 className="package-d-head"> Book This Package </h5>{" "}
          <div className="row">
            <div className="col-lg-12">
              <input
                type="text"
                placeholder="Your Full Name"
                name="fullName"
                value={fullName}
                required
                onChange={e => setFullName(e.target.value)}
              />
            </div>{" "}
            <div className="col-lg-12">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                name="email"
                required
                onChange={e => setEmail(e.target.value)}
              />
            </div>{" "}
            <div className="col-lg-12">
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
                vale={phone}
                required
                onChange={e => setPhone(e.target.value)}
              />
            </div>{" "}
            <div className="col-lg-12">
              <input
                type="text"
                placeholder="country"
                name="country"
                value={country}
                required
                onChange={e => setCountry(e.target.value)}
              />
            </div>{" "}
            <div className="col-lg-12">
              <input
                type="number"
                placeholder="No Of Travellers"
                name="noOfPeople"
                value={noOfPeople}
                required
                onChange={e => setNoOfPeople(e.target.value)}
              />
            </div>{" "}
            <div className="col-lg-12">
              <div className="calendar-input" id="packageCalenderMainDiv">
                <DatePicker
                value={date}
                  name="date"
                  selected={date}
                  onChange={date => setNewDate(date)}
                  className="input-field check-in"
                  placeholder="dd-mm-yy"
                />
                <i className="flaticon-calendar" id="packageCalenderIcon" />
              </div>{" "}
            </div>{" "}
            <div className="col-lg-12">
              <textarea
                vale={message}
                name="message"
                cols={30}
                rows={7}
                placeholder="Message"
                onChange={e => setMessage(e.target.value)}
              />{" "}
            </div>{" "}
            <div className="col-lg-12">
              <input type="submit" defaultValue="Book Now" />
            </div>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default Booking;
