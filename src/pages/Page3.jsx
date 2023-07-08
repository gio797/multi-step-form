import React, { useState } from "react";
import { Link } from "react-router-dom";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";

function Page3({ formData, handleChange, planType }) {
  return (
    <main>
      <img src={sidebar} alt="" className="side-bar-mob" />
      <div className="bubble-wrapper">
        <div className="bubble">1</div>
        <div className="bubble">2</div>
        <div className="bubble active">3</div>
        <div className="bubble">4</div>
      </div>
      <form className="form">
        <h1 className="title">Pick add-ons</h1>
        <p className="text">Add-ons help enhance your gaming experience</p>
        {planType ? (
          <>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="monthlyOnlineService"
                checked={formData.monthlyOnlineService}
                onChange={handleChange}
                name="monthlyOnlineService"
              />
              <label htmlFor="monthlyOnlineService">
                <div>
                  <p>Online services</p>
                  <p className="info">Access to multiplayer games</p>
                </div>
              </label>
              <p className="price">+1/mo</p>
            </div>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="monthlyLargeStorage"
                checked={formData.monthlyLargeStorage}
                onChange={handleChange}
                name="monthlyLargeStorage"
              />
              <label htmlFor="monthlyLargeStorage">
                <div>
                  <p>Large storage</p>
                  <p className="info">Extra 1TB of cloud save</p>
                </div>
              </label>
              <p className="price">+2/mo</p>
            </div>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="monthlyCustomizableProfile"
                checked={formData.monthlyCustomizableProfile}
                onChange={handleChange}
                name="monthlyCustomizableProfile"
              />
              <label htmlFor="monthlyCustomizableProfile">
                <div>
                  <p>Customizable profile</p>
                  <p className="info">Custom theme on your profile</p>
                </div>
              </label>
              <p className="price">+2/mo</p>
            </div>
          </>
        ) : (
          <>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="yearlyOnlineService"
                checked={formData.yearlyOnlineService}
                onChange={handleChange}
                name="yearlyOnlineService"
              />
              <label htmlFor="yearlyOnlineService">
                <div>
                  <p>Online services</p>
                  <p className="info">Access to multiplayer games</p>
                </div>
              </label>
              <p className="price">+10/mo</p>
            </div>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="yearlyLargeStorage"
                checked={formData.yearlyLargeStorage}
                onChange={handleChange}
                name="yearlyLargeStorage"
              />
              <label htmlFor="yearlyLargeStorage">
                <div>
                  <p>Large storage</p>
                  <p className="info">Extra 1TB of cloud save</p>
                </div>
              </label>
              <p className="price">+20/mo</p>
            </div>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="yearlyCustomizableProfile"
                checked={formData.yearlyCustomizableProfile}
                onChange={handleChange}
                name="yearlyCustomizableProfile"
              />
              <label htmlFor="yearlyCustomizableProfile">
                <div>
                  <p>Customizable profile</p>
                  <p className="info">Custom theme on your profile</p>
                </div>
              </label>
              <p className="price">+20/mo</p>
            </div>
          </>
        )}
      </form>
      <div className="links-wrapper">
        <Link to="/page2">go back</Link>
        <Link to="/page4" className="next-page-btn">
          next step
        </Link>
      </div>
    </main>
  );
}

export default Page3;
