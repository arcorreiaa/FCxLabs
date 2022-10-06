import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import React from "react";

const AuthRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AuthRoute;
