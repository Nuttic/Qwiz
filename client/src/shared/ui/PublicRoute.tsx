import { useAppSelector } from "@/shared/hooks/reduxHooks";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const PublicRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  }, [user, navigate, location.state]);

  return children;
};
