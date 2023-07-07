import React from "react";
import { Link } from "react-router-dom";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";

function Page4({ planType, formData }) {
  return (
    <main>
      <img src={sidebar} alt="" className="side-bar-mob" />
      <form className="form">
        <h1 className="title">FInishing up</h1>
        <p className="text">
          Double-check everything looks ok before confirming.
        </p>
        <div>
          <h2>{formData.plan}</h2>
        </div>
      </form>
      <div className="links-wrapper">
        <Link to="/page3">go back</Link>
        <Link to="/page5" className="next-page-btn">
          Confirm
        </Link>
      </div>
    </main>
  );
}

export default Page4;
