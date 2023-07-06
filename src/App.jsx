import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    eMail: "",
    phoneNumber: "",
    plan: "",
  });

  console.log(formData);

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
          element={<Page2 handleChange={handleChange} formData={formData} />}
        />
        <Route
          path="/page3"
          element={<Page3 handleChange={handleChange} formData={formData} />}
        />
        <Route
          path="/page4"
          element={<Page4 handleChange={handleChange} formData={formData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
