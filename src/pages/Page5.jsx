import React from "react";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";

function Page5({ planType, formData }) {
  return (
    <main>
      <img src={sidebar} alt="" className="side-bar-mob" />
      <form className="form">
        <h1 className="title">Thank you</h1>
        <p className="text">
          Thanks for confirming your subscription! <br />
          We hope you have fun using our platform. If you ever need support,
          please feel free to email us at support@loremgaming.com.
        </p>
      </form>
    </main>
  );
}

export default Page5;
