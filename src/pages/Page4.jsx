import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import sidebarDesk from "../assets/images/bg-sidebar-desktop.svg";

function Page4({ planType, formData }) {
  const navigate = useNavigate();

  const [planPrice, setPlanPrice] = useState(null);

  const [monthlyOnlineService, setMonthlyOnlineService] = useState(null);
  const [monthlyLargeStorage, setMonthlyLargeStorage] = useState(null);
  const [monthlyCustomizableProfile, setMonthlyCustomizableProfile] =
    useState(null);

  const [yearlyOnlineService, setYearlyOnlineService] = useState(null);
  const [yearlyLargeStorage, setYearlyLargeStorage] = useState(null);
  const [yearlyCustomizableProfile, setYearlyCustomizableProfile] =
    useState(null);

  const total =
    planPrice +
    monthlyOnlineService +
    monthlyLargeStorage +
    monthlyCustomizableProfile +
    yearlyOnlineService +
    yearlyLargeStorage +
    yearlyCustomizableProfile;

  useEffect(() => {
    if (formData.plan === "monthly-arcade") {
      setPlanPrice(9);
    } else if (formData.plan === "monthly-advanced") {
      setPlanPrice(12);
    } else if (formData.plan === "monthly-pro") {
      setPlanPrice(15);
    } else if (formData.plan === "yearly-arcade") {
      setPlanPrice(90);
    } else if (formData.plan === "yearly-advanced") {
      setPlanPrice(120);
    } else if (formData.plan === "yearly-pro") {
      setPlanPrice(150);
    }
  }, [formData.plan]);

  useEffect(() => {
    if (formData.monthlyCustomizableProfile) {
      setMonthlyCustomizableProfile(2);
    }
  }, [formData.monthlyCustomizableProfile]);

  useEffect(() => {
    if (formData.monthlyOnlineService) {
      setMonthlyOnlineService(1);
    }
  }, [formData.monthlyOnlineService]);

  useEffect(() => {
    if (formData.monthlyLargeStorage) {
      setMonthlyLargeStorage(2);
    }
  }, [formData.monthlyLargeStorage]);

  useEffect(() => {
    if (formData.yearlyCustomizableProfile) {
      setYearlyCustomizableProfile(20);
    }
  }, [formData.yearlyCustomizableProfile]);

  useEffect(() => {
    if (formData.yearlyOnlineService) {
      setYearlyOnlineService(10);
    }
  }, [formData.yearlyOnlineService]);

  useEffect(() => {
    if (formData.yearlyLargeStorage) {
      setYearlyLargeStorage(20);
    }
  }, [formData.yearlyLargeStorage]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    navigate("/page5");
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
          <div className="bubble active">4</div>
          <div className="bubble-info">
            <p className="bubble-info-step">step 4</p>
            <p className="bubble-info-title">summery</p>
          </div>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">FInishing up</h1>
        <p className="text">
          Double-check everything looks ok before confirming.
        </p>
        <div>
          <div className="main-price-wrapper">
            <h3 className="title">{formData.plan}</h3>
            {planType ? (
              <h3 className="title">${planPrice}/mo</h3>
            ) : (
              <h3 className="title">${planPrice}/yr</h3>
            )}
          </div>
          <hr />

          {monthlyOnlineService ? (
            <div className="price-wrapper">
              <p>Online service</p>
              <p>${monthlyOnlineService}/mo</p>
            </div>
          ) : null}

          {monthlyLargeStorage ? (
            <div className="price-wrapper">
              <p>Large Storage</p>
              <p>${monthlyLargeStorage}/mo</p>
            </div>
          ) : null}

          {monthlyCustomizableProfile ? (
            <div className="price-wrapper">
              <p>Customizable profile</p>
              <p>${monthlyCustomizableProfile}/mo</p>
            </div>
          ) : null}

          {yearlyOnlineService ? (
            <div className="price-wrapper">
              <p>Online service</p>
              <p>${yearlyOnlineService}/yr</p>
            </div>
          ) : null}

          {yearlyLargeStorage ? (
            <div className="price-wrapper">
              <p>Large Storage</p>
              <p>${yearlyLargeStorage}/yr</p>
            </div>
          ) : null}

          {yearlyCustomizableProfile ? (
            <div className="price-wrapper">
              <p>Customizable profile</p>
              <p>${yearlyCustomizableProfile}/yr</p>
            </div>
          ) : null}

          <br />
          <br />

          {planType ? (
            <div className="price-wrapper">
              <p>Total(per month)</p>
              <p className="t-price">${total}/mo</p>
            </div>
          ) : (
            <div className="price-wrapper">
              <p>Total(per year)</p>
              <p className="t-price">${total}/yr</p>
            </div>
          )}
        </div>
        <div className="links-wrapper">
          <Link to="/page3" className="go-back-btn">
            go back
          </Link>
          <button className="submit-btn">Confirm</button>
        </div>
      </form>
    </main>
  );
}

export default Page4;
