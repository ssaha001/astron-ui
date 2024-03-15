import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Layout,
  LandingPage,
  Dashboard,
  Materials,
  Scheduling,
  Financing,
} from "./views";
import { Signin, Signup } from "./views/UserAuth";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./ProtectedRoute";
//import AboutPage from "./AboutPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/dashboard" exact element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/materials" exact element={<ProtectedRoute><Materials /></ProtectedRoute>} />
          <Route path="/scheduling" exact element={<ProtectedRoute><Scheduling /></ProtectedRoute>} />
          <Route path="/financing" exact element={<ProtectedRoute><Financing /></ProtectedRoute>} />
          {/* <Route path="/about" component={AboutPage} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
