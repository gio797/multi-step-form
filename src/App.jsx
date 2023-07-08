import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    eMail: "",
    phoneNumber: "",
    plan: "",
    monthlyOnlineService: false,
    monthlyLargeStorage: false,
    monthlyCustomizableProfile: false,
    yearlyOnlineService: false,
    yearlyLargeStorage: false,
    yearlyCustomizableProfile: false,
  });

  const [planType, setPlanType] = useState(true);

  function handlePlanType() {
    setPlanType((prev) => !prev);
  }

  // console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={<Page1 handleChange={handleChange} formData={formData} />}
        />
        <Route
          path="/page2"
          element={
            <Page2
              handleChange={handleChange}
              formData={formData}
              handlePlanType={handlePlanType}
              planType={planType}
            />
          }
        />
        <Route
          path="/page3"
          element={
            <Page3
              handleChange={handleChange}
              formData={formData}
              planType={planType}
            />
          }
        />
        <Route
          path="/page4"
          element={
            <Page4
              handleChange={handleChange}
              formData={formData}
              planType={planType}
            />
          }
        />
        <Route path="/page5" element={<Page5 />} />
      </Routes>
    </Router>
  );
}

export default App;
