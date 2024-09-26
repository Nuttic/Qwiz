import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
// import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import { logout } from '@/entities/user';
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { Button } from "antd";

export const Navbar: React.FC = () => {
    const {user, loading} = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()

    const handleLogout = () => {
      dispatch(logout())
    }

  return (
    <>
      <h1>Navbar</h1>
      <div>
        <span>
          <Button>
          <Link to={ROUTES.HOME}>Home</Link>
          </Button>
        </span>
        <span>
          <Button>
          <Link to={ROUTES.TOPICS}>Wishes</Link>
          </Button>
        </span>

        {user ? (
          <>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <span>
              <Button>
              <Link to={ROUTES.LOGIN}>Log In</Link>
              </Button>
            </span>

            <span>
              <Button>
              <Link to={ROUTES.REGISTR}>Sign Up</Link>
              </Button>
            </span>
          </>
        )}
      </div>
    </>
  );
};
