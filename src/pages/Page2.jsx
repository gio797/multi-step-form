import React, { useState } from "react";
import { Link } from "react-router-dom";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import sidebarDesk from "../assets/images/bg-sidebar-desktop.svg";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";

function Page2({ formData, handleChange, planType, handlePlanType }) {
  const [errorMsg, setErrorMsg] = useState("");

  const isLinkDisabled = formData.plan.length === 0;

  function onNextPage(event) {
    if (isLinkDisabled) {
      event.preventDefault();
      setErrorMsg("A step is submitted, but no selection has been made");
    }
  }

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
          <div className="bubble active">2</div>
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
        <h1 className="title">Select your plan</h1>
        <p className="text">You have the option of monthly or yearly billing</p>
        <p className="error-msg">{errorMsg}</p>

        {planType ? (
          <>
            <input
              type="radio"
              id="monthly-arcade"
              name="plan"
              value="monthly-arcade"
              checked={formData.plan === "monthly-arcade"}
              onChange={handleChange}
            />
            <label htmlFor="monthly-arcade" className="radio-lbl">
              <img src={iconArcade} alt="icon" />
              <div>
                <p>Arcade</p> <span>$9/mo</span>
              </div>
              <br />
            </label>
            <input
              type="radio"
              id="monthly-advanced"
              name="plan"
              value="monthly-advanced"
              checked={formData.plan === "monthly-advanced"}
              onChange={handleChange}
            />
            <label htmlFor="monthly-advanced" className="radio-lbl">
              <img src={iconAdvanced} alt="icon" />
              <div>
                <p>advanced</p> <span>$12/mo</span>
              </div>
            </label>
            <input
              type="radio"
              id="monthly-pro"
              name="plan"
              value="monthly-pro"
              checked={formData.plan === "monthly-pro"}
              onChange={handleChange}
            />
            <label htmlFor="monthly-pro" className="radio-lbl">
              <img src={iconPro} alt="icon" />
              <div>
                <p>pro</p> <span>$15/mo</span>
              </div>
            </label>
          </>
        ) : (
          <>
            <input
              type="radio"
              id="yearly-arcade"
              name="plan"
              value="yearly-arcade"
              checked={formData.plan === "yearly-arcade"}
              onChange={handleChange}
            />
            <label htmlFor="yearly-arcade" className="radio-lbl">
              <img src={iconArcade} alt="icon" />
              <div>
                <p>Arcade</p> <span>$90/yr</span>
                <p>2 months free</p>
              </div>
            </label>
            <input
              type="radio"
              id="yearly-advanced"
              name="plan"
              value="yearly-advanced"
              checked={formData.plan === "yearly-advanced"}
              onChange={handleChange}
            />
            <label htmlFor="yearly-advanced" className="radio-lbl">
              <img src={iconAdvanced} alt="icon" />
              <div>
                <p>advanced</p> <span>$120/yr</span>
                <p>2 months free</p>
              </div>
            </label>
            <input
              type="radio"
              id="yearly-pro"
              name="plan"
              value="yearly-pro"
              checked={formData.plan === "yearly-pro"}
              onChange={handleChange}
            />
            <label htmlFor="yearly-pro" className="radio-lbl">
              <img src={iconPro} alt="icon" />
              <div>
                <p>pro</p> <span>$150/yr</span>
                <p>2 months free</p>
              </div>
            </label>
          </>
        )}

        <button type="button" className="switch-btn" onClick={handlePlanType}>
          <span>Monthly </span>
          {planType ? (
            <i className="fa-solid fa-toggle-on fa-rotate-180 fa-2xl"></i>
          ) : (
            <i className="fa-solid fa-toggle-on fa-2xl"></i>
          )}

          <span> Yearly</span>
        </button>
        <div className="links-wrapper">
          <Link to="/" className="go-back-btn">
            go back
          </Link>
          <Link to="/page3" className="next-page-btn" onClick={onNextPage}>
            next step
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Page2;
