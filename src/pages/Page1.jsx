import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import sidebarDesk from "../assets/images/bg-sidebar-desktop.svg";

function Page1({ formData, handleChange }) {
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [mailErrorMsg, setMailErrorMsg] = useState("");
  const [phNumberErrorMsg, setPhNumberErrorMsg] = useState("");

  const isInitialRender = useRef(true);
  const [firstTry, setFirstTry] = useState(true);

  // console.log(isInitialRender.current);

  const isEmailCorrect =
    formData.eMail.length === 0 || !formData.eMail.includes("@");

  const isLinkDisabled =
    formData.name.length === 0 ||
    isEmailCorrect ||
    formData.phoneNumber.length === 0;

  function checkInputs() {
    if (!firstTry) {
      if (formData.name.length === 0) {
        setNameErrorMsg("Please fill in the input field.");
      } else setNameErrorMsg("");

      if (formData.eMail.length === 0) {
        setMailErrorMsg("Please fill in the input field.");
      } else if (!formData.eMail.includes("@")) {
        setMailErrorMsg("The email address is not formatted correctly");
      } else setMailErrorMsg("");

      if (formData.phoneNumber.length === 0) {
        setPhNumberErrorMsg("Please fill in the input field.");
      } else setPhNumberErrorMsg("");
    }
  }

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else {
      checkInputs();
      console.log(formData.name, nameErrorMsg);
    }
  }, [formData.name, formData.eMail, formData.phoneNumber, firstTry]);

  function onNextPage(event) {
    if (isLinkDisabled) {
      event.preventDefault();
      setFirstTry(false);
      checkInputs();
    }
  }

  return (
    <main>
      <img src={sidebar} alt="" className="side-bar-mob" />
      <img src={sidebarDesk} alt="" className="side-bar-desk" />
      <div className="bubbles-wrapper">
        <div className="bubble-box">
          <div className="bubble active">1</div>
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
          <div className="bubble">4</div>
          <div className="bubble-info">
            <p className="bubble-info-step">step 4</p>
            <p className="bubble-info-title">summery</p>
          </div>
        </div>
      </div>
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
          type="number"
          name="phoneNumber"
          id="ph-number"
          onChange={handleChange}
          value={formData.phoneNumber}
        />
        <p className="error-msg">{phNumberErrorMsg}</p>
        <div className="links-wrapper">
          <Link
            to="/page2"
            className="next-page-btn-page-one"
            onClick={onNextPage}
          >
            next step
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Page1;
