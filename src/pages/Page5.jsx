import React from "react";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import img from "../assets/images/icon-thank-you.svg";

function Page5() {
  return (
    <main>
      <img src={sidebar} alt="" className="side-bar-mob" />
      <div className="bubble-wrapper">
        <div className="bubble">1</div>
        <div className="bubble">2</div>
        <div className="bubble">3</div>
        <div className="bubble active">4</div>
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
