import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";

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
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">FInishing up</h1>
        <p className="text">
          Double-check everything looks ok before confirming.
        </p>
        <div>
          <h2>{formData.plan}</h2>
          {planType ? <p>${planPrice}/mo</p> : <p>${planPrice}/yr</p>}
          <hr />

          {monthlyOnlineService ? (
            <div>
              <p>Online service</p>
              <p>${monthlyOnlineService}/mo</p>
            </div>
          ) : null}

          {monthlyLargeStorage ? (
            <div>
              <p>Large Storage</p>
              <p>${monthlyLargeStorage}/mo</p>
            </div>
          ) : null}

          {monthlyCustomizableProfile ? (
            <div>
              <p>Customizable profile</p>
              <p>${monthlyCustomizableProfile}/mo</p>
            </div>
          ) : null}

          {yearlyOnlineService ? (
            <div>
              <p>Online service</p>
              <p>${yearlyOnlineService}/yr</p>
            </div>
          ) : null}

          {yearlyLargeStorage ? (
            <div>
              <p>Large Storage</p>
              <p>${yearlyLargeStorage}/yr</p>
            </div>
          ) : null}

          {yearlyCustomizableProfile ? (
            <div>
              <p>Customizable profile</p>
              <p>${yearlyCustomizableProfile}/yr</p>
            </div>
          ) : null}

          <br />
          <br />

          {planType ? (
            <div>
              <p>Total(per month)</p>
              <p>${total}/mo</p>
            </div>
          ) : (
            <div>
              <p>Total(per year)</p>
              <p>${total}/yr</p>
            </div>
          )}
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
