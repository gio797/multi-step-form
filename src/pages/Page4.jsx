import React from "react";
import { Link, useNavigate } from "react-router-dom";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";

function Page4({ planType, formData }) {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    navigate("/page5");
  }

  return (
    <main>
      <img src={sidebar} alt="" className="side-bar-mob" />
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">FInishing up</h1>
        <p className="text">
          Double-check everything looks ok before confirming.
        </p>
        <div>
          <h2>{formData.plan}</h2>
        </div>
        <button className="next-page-btn">confirm</button>
      </form>
      <div className="links-wrapper">
        <Link to="/page3">go back</Link>
        {/* <Link to="/page5" className="next-page-btn">
          Confirm
        </Link> */}
      </div>
    </main>
  );
}

export default Page4;
