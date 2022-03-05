import React, { Component } from "react";
import ModalVideo from "react-modal-video";

import about1Img from "../../../assets/images/about-1.jpg";
import about2Img from "../../../assets/images/about-2.jpg";
import { Link } from "react-router-dom";

class AboutWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
        {" "}
        {/* ===============  About wrapper area start =============== */}{" "}
        <div className="about-wrapper mt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="about-wrapper-left">
                  <div className="about-img">
                    <img src={about1Img} alt="" className="img-fluid" />
                  </div>{" "}
                  <div className="about-video">
                    <img src={about2Img} alt="" className="img-fluid" />
                    <i
                      onClick={() =>
                        this.setState({
                          isOpen: true,
                        })
                      }
                      class="flaticon-play-button-arrowhead"
                    >
                      {" "}
                    </i>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-lg-5 col-md-12">
                <div className="about-wrapper-right section-head head-left">
                  <h5> About Rwenjura </h5>{" "}
                  <h2> Uganda’s Best Tour Company </h2>{" "}
                  <p>
                    {" "}
                    Rwenjura Tours and Travel (U) Ltd inspired by Mt.Rwenjura
                    commonly known as Mt.Rwenzori is an amzing and breath taking
                    Company when you think about your Dream Destination in
                    Africa. We are Tested and Trusted. Are you thinking about
                    taking a break in the wild,Discovering or adventure? Then
                    Rwenjura should be on your finger tips. Whether you are a
                    native of East African Community all a friend from across
                    Boarders,we shall be able to lead you across
                    Uganda,Kenya,Tanzania,Rwanda,Burundi,Congo and S.Sudan in a
                    Customized Corporate,Individual Explora,Adventure,Research
                    and Study Tours. So far the Clients from Europe, Australia,
                    Asia, North America, South America and Africa we have
                    satisfactory served are an inspiration why we should equally
                    be your first choice Travel Partner. We’ll help you tour
                    every corner of our beautiful country, and East Africa
                    Member States to explore our diverse cultures and enjoy our
                    rich cuisine. We’re always ready to serve you. We’ll help
                    you book your hotels, book your flight, organize airport
                    transfers, choose the best and most unique destinations for
                    your tours. Anything to make your travel convenient &
                    affordable. This way, you can explore, meet new people &
                    create lasting memories. Reach out to us to plan your dream
                    holiday. We have all kinds of tour packages. These range
                    from Safaris, beach vacations, hiking & mountain climbing,
                    weekend getaways, honeymoons to team building activities.{" "}
                  </p>{" "}
                  <ul className="about-list">
                    <li>
                      {" "}
                      <i className="flaticon-double-checking" /> Donec viverra
                      orci On a{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <i className="flaticon-double-checking" /> Donec viverra
                      orci On a{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <i className="flaticon-double-checking" /> Donec viverra
                      orci On a{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <i className="flaticon-double-checking" /> Donec viverra
                      orci On a{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <i className="flaticon-double-checking" /> Donec viverra
                      orci On a{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <i className="flaticon-double-checking" /> Donec viverra
                      orci On a{" "}
                    </li>{" "}
                  </ul>{" "}
                  <div className="about-wrapper-btn">
                    <Link to={"#"} className="btn-common">
                      {" "}
                      Read More{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="-tJYN-eG1zk"
            onClose={() =>
              this.setState({
                isOpen: false,
              })
            }
          />{" "}
        </React.Fragment>
        {/* ===============  About wrapper area end =============== */}{" "}
      </>
    );
  }
}

export default AboutWrapper;
