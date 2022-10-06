import { AuthContext } from "../context/AuthContext";
import UnauthRoutes from "./UnauthRoutes";
import React, { useContext } from "react";
import AuthRoutes from "./AuthRoutes";

const Routes = () => {
  const { signed } = useContext(AuthContext);
  return <>{signed ? <AuthRoutes /> : <UnauthRoutes />}</>;
};

export default Routes;
