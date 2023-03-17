import React from "react";
import { Route } from "react-router-dom";
import Auth from "../Pages/Authorization/Auth";
import Login from "../Pages/Login/Login";

const Routes = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routes;
