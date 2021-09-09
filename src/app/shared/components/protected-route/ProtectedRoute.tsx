import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { useAppSelector } from "core/hooks";
import { selectIsLoggedIn } from "store/authSlice";

// export type ProtectedRouteProps = {
//     isAuthenticated: boolean;
//     authenticationPath: string;
// } & RouteProps;

export default function ProtectedRoute({ ...routeProps }: RouteProps) {
  const isAuthenticated: boolean = useAppSelector(selectIsLoggedIn);

  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: "/auth/login" }} />;
  }
}
