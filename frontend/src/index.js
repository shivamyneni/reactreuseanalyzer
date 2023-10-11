import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Signin from "./Auth/Signin";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Resetpassword from "./Auth/Resetpassword";
import Fileupload from "./Fileupload";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Codereport from "./Codereport";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index path="/" element={<Home />} />
          {/* <Route path="/signin" element={<Signin />} /> */}
          {/* <Route path="/auth/signup" element={<Signin />} />
          <Route path="/auth/forgot-password" element={<Resetpassword />} /> */}
          <Route path="/scan" element={<Fileupload />} />
          <Route path="/auth">
            <Route path="/auth/signin" element={<Signin />} />
            <Route path="/auth/signup" element={<Signin />} />
            <Route path="/auth/resetpassword" element={<Resetpassword />} />
          </Route>
          <Route path="/report" element={<Codereport />} />
        </Route>

        {/* <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
