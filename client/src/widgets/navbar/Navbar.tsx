import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
// import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
// import { logout } from '@/entities/user';

export const Navbar: React.FC = () => {
  //   const {user, loading} = useAppSelector((state) => state.user)
  //   const dispatch = useAppDispatch()

  //   const handleLogout = () => {
  //     dispatch(logout())
  //   }

  return (
    <>
      <h1>Navbar</h1>
      <div>
        <span>
          <Link to={ROUTES.HOME}>Home</Link>
        </span>
        <span>
          <Link to={ROUTES.TOPICS}>Wishes</Link>
        </span>

        {true ? (
          <>
            {/* <h1>{user.name}</h1> */}
            {/* <UserCard user={user} /> */}
            <span>Logout</span>
          </>
        ) : (
          <>
            <span>
              <Link to={ROUTES.LOGIN}>Login</Link>
            </span>

            <span>
              <Link to={ROUTES.REGISTR}>Registr</Link>
            </span>
          </>
        )}
      </div>
    </>
  );
};
