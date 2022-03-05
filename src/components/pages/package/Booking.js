import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../../Redux/Actions/ProductActions";
import Loading from "../../LoadingError/Loading";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../../Redux/Constants/ProductConstants";
import moment from "moment";
import DatePicker from "react-datepicker";
import { saveShippingAddress } from "../../../Redux/Actions/ProductActions";

const Booking = () => {
  //   window.scrollTo(0, 0);
  const history = useNavigate();
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [email, setEmail] = useState(shippingAddress.email);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [country, setCountry] = useState(shippingAddress.country);
  const [noOfPeople, setNoOfPeople] = useState(shippingAddress.noOfPeople);
  const [date, setNewDate] = useState(shippingAddress.date);
  const [message, setMessage] = useState(shippingAddress.message);

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        fullName,
        email,
        phone,
        country,
        noOfPeople,
        date,
        message,
      })
    );
    history("/thankyou");
  };
  const [startDate, setDate] = useState(new Date());
  return (
    <div className="col-lg-12 col-md-6">
      <div className="p-sidebar-form">
        <form onSubmit={submitHandler}>
          <h5 className="package-d-head"> Book This Package </h5>{" "}
          <div className="row">
            <div className="col-lg-12">
              <input
                type="text"
                placeholder="Your Full Name"
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
                required
                onChange={e => setEmail(e.target.value)}
              />
            </div>{" "}
            <div className="col-lg-12">
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                required
                onChange={e => setPhone(e.target.value)}
              />
            </div>{" "}
            <div className="col-lg-12">
              <input
                type="text"
                placeholder="country"
                value={country}
                required
                onChange={e => setCountry(e.target.value)}
              />
            </div>{" "}
            <div className="col-lg-12">
              <input
                type="number"
                placeholder="No Of Travellers"
                value={noOfPeople}
                required
                onChange={e => setNoOfPeople(e.target.value)}
              />
            </div>{" "}
            <div className="col-lg-12">
              <div className="calendar-input" id="packageCalenderMainDiv">
                <DatePicker
                  value={date}
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
                name="message"
                value={message}
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
