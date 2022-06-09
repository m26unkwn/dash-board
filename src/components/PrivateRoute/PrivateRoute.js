import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../store/provider/auth-provider";

export const PrivateRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ lastLocation: location }} replace />
  );
};
