import React from "react";
import { Link } from "react-router-dom";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";

function Page1({ formData, handleChange }) {
  return (
    <main>
      <img src={sidebar} alt="" className="side-bar-mob" />
      <form className="form">
        <h1 className="title">Personal info </h1>
        <p className="text">
          Please provide your name, email address, and phone number
        </p>
        <label htmlFor="name">Name</label>
        <input
          placeholder="e.g. Stephen King"
          className="input"
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={formData.name}
        />
        <label htmlFor="e-mail">E-mail</label>
        <input
          placeholder="e.g. Stephenking@lorem.com"
          className="input"
          type="email"
          name="eMail"
          id="e-mail"
          onChange={handleChange}
          value={formData.eMail}
        />
        <label htmlFor="ph-number">Phone Number</label>
        <input
          placeholder="e.g. +1 234 567 890"
          className="input"
          type="tel"
          name="phoneNumber"
          id="ph-number"
          onChange={handleChange}
          value={formData.phoneNumber}
        />
      </form>
      <Link to="/page2" className="next-page-btn-page-one">
        next step
      </Link>
    </main>
  );
}

export default Page1;
