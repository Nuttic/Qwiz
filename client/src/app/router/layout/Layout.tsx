import React, { useEffect } from 'react';
import styles from './Layout.module.css';
import { refreshAccessToken } from '@/entities/user';
// import { Footer } from '@/widgets/Footer';
import { Navbar } from '@/widgets/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '@/shared/hooks/reduxHooks';

const Layout: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(refreshAccessToken())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
