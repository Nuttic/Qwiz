import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { useAppSelector } from "@/shared/hooks/reduxHooks";

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const { user } = useAppSelector((state) => state.user);

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return children;
};
