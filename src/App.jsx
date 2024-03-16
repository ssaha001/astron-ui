import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Layout,
  LandingPage,
  Dashboard,
  Materials,
  Scheduling,
  Financing,
  DashboardEmp,
  Property,
} from "./views";
import { Signin, Signup } from "./views/UserAuth";
import VendorDetails from "./views/Materials/VendorDetails";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "./redux/store";
//import AboutPage from "./AboutPage";

function App() {
  const { user } = useSelector((state) => state);
  return (
    <Router>
      <Layout>
        <Routes> {/* Change from Route to Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/materials"
            element={
              <ProtectedRoute>
                <Materials />
              </ProtectedRoute>
            }
          />
          <Route
            path="/scheduling"
            element={
              <ProtectedRoute>
                <Scheduling />
              </ProtectedRoute>
            }
          />
          <Route
            path="/financing"
            element={
              <ProtectedRoute>
                <Financing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <Property />
              </ProtectedRoute>
            }
          />
          <Route path="/vendor/:name" element={<VendorDetails />} /> {/* Change from component to element */}
        </Routes> {/* Change from Route to Routes */}
      </Layout>
    </Router>
  );
}

export default App;