import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";

function Page1({ formData, handleChange }) {
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [mailErrorMsg, setMailErrorMsg] = useState("");
  const [phNumberErrorMsg, setPhNumberErrorMsg] = useState("");

  const isLinkDisabled =
    formData.name.length === 0 ||
    formData.eMail.length === 0 ||
    formData.phoneNumber.length === 0; // Modify the condition as needed

  function onNextPage(event) {
    if (isLinkDisabled) {
      event.preventDefault();
      setNameErrorMsg("Please fill in the input field.");
      setMailErrorMsg("Please fill in the input field.");
      setPhNumberErrorMsg("Please fill in the input field.");
    }
  }

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
        <p className="error-msg">{nameErrorMsg}</p>
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
        <p className="error-msg">{mailErrorMsg}</p>
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
        <p className="error-msg">{phNumberErrorMsg}</p>
      </form>

      <Link to="/page2" className="next-page-btn-page-one" onClick={onNextPage}>
        next step
      </Link>
    </main>
  );
}

export default Page1;
