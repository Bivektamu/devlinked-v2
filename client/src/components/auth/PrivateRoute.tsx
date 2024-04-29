import { Component, ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { auth } from "../../store/slices/authSlice";


type Prop = {
  Component: () => JSX.Element
}


const PrivateRoute = ({ Component }: Prop) => {


  const { isLoggedIn } = useSelector(auth)

  return isLoggedIn ? <Component /> : <Navigate to="/" />;
};
export default PrivateRoute;