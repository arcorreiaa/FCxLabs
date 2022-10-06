import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import React from "react";

const UnauthRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UnauthRoutes;
