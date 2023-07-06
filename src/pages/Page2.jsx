import React, { useState } from "react";
import { Link } from "react-router-dom";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";

function Page2({ formData, handleChange }) {
  // console.log(formData);
  const [planType, setPlanType] = useState(true);

  return (
    <main>
      <img src={sidebar} alt="" className="side-bar-mob" />
      <form className="form">
        <h1 className="title">Select your plan</h1>
        <p className="text">You have the option of monthly or yearly billing</p>

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
                <p>Arcade</p> <span>$90/mo</span>
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
                <p>advanced</p> <span>$120/mo</span>
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
                <p>pro</p> <span>$150/mo</span>
                <p>2 months free</p>
              </div>
            </label>
          </>
        )}

        <button
          type="button"
          className="switch-btn"
          onClick={() => setPlanType((prev) => !prev)}
        >
          <span>Monthly </span>
          {planType ? (
            <i className="fa-solid fa-toggle-on fa-rotate-180 fa-2xl"></i>
          ) : (
            <i className="fa-solid fa-toggle-on fa-2xl"></i>
          )}

          <span> Yearly</span>
        </button>
      </form>
      <div className="links-wrapper">
        <Link to="/">go back</Link>
        <Link to="/page3" className="next-page-btn">
          next step
        </Link>
      </div>
    </main>
  );
}

export default Page2;
