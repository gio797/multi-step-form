import React, { useState } from "react";
import { Link } from "react-router-dom";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import sidebarDesk from "../assets/images/bg-sidebar-desktop.svg";

function Page3({ formData, handleChange, planType }) {
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
          <div className="bubble active">3</div>
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
              <p className="price">+10/yr</p>
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
              <p className="price">+20/yr</p>
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
              <p className="price">+20/yr</p>
            </div>
          </>
        )}
        <div className="links-wrapper">
          <Link to="/page2">go back</Link>
          <Link to="/page4" className="next-page-btn">
            next step
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Page3;
