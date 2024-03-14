import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./views/Layout/Layout";
import LandingPage from "./views/LandingPage/LandingPage";
import Dashboard from "./views/Dashboard/Dashboard";
import Materials from "./views/Materials/Materials";
import { Signin, Signup } from "./views/UserAuth";
//import AboutPage from "./AboutPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/materials" exact element={<Materials />} />
          {/* <Route path="/about" component={AboutPage} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
