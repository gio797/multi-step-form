import React from "react";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import img from "../assets/images/icon-thank-you.svg";
import sidebarDesk from "../assets/images/bg-sidebar-desktop.svg";

function Page5() {
  return (
    <main>
      <img src={sidebar} alt="" className="side-bar-mob" />
      <img src={sidebarDesk} alt="" className="side-bar-desk" />
      <div className="bubbles-wrapper">
        <div className="bubble-box">
          <div className="bubble">1</div>
          <div className="bubble-info">
            <p className="bubble-info-step">step 1</p>
            <p className="bubble-info-title">your info </p>
          </div>
        </div>
        <div className="bubble-box">
          <div className="bubble">2</div>
          <div className="bubble-info">
            <p className="bubble-info-step">step 2</p>
            <p className="bubble-info-title">select plan</p>
          </div>
        </div>
        <div className="bubble-box">
          <div className="bubble">3</div>
          <div className="bubble-info">
            <p className="bubble-info-step">step 3</p>
            <p className="bubble-info-title">add-ons</p>
          </div>
        </div>
        <div className="bubble-box">
          <div className="bubble active">4</div>
          <div className="bubble-info">
            <p className="bubble-info-step">step 4</p>
            <p className="bubble-info-title">summery</p>
          </div>
        </div>
      </div>
      <form className="form page5">
        <img src={img} alt="icon" className="thank-you-icon" />
        <h1 className="title">Thank you</h1>
        <p className="text">
          Thanks for confirming your subscription! <br />
          We hope you have fun using our platform. If you ever need support,
          please feel free to email us at support@loremgaming.com.
        </p>
      </form>
    </main>
  );
}

export default Page5;
