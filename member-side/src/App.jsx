import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginForm";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import BrowseEvents from "./pages/BrowseEvents";
import OnlineDisc from "./pages/OnlineDisc";
import ManageAcc from "./pages/ManageAcc";
import LandingPage from "./pages/LandingPage";
import Error404 from "./pages/Error404";
import LoadingScreen from "./components/Loading";
import BrowseChurch from "./pages/BrowseChurch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/browse" element={<BrowseEvents />} />
        <Route path="/church" element={<BrowseChurch />} />
        <Route path="/disc" element={<OnlineDisc />} />
        <Route path="/manage" element={<ManageAcc />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
