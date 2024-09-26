import { createBrowserRouter } from 'react-router-dom';
// import {MainPage, LoginPage, RegistrPage, TopicPage} from '@/pages'
import { ROUTES } from './router';
// import Layout from './Layout/Layput';
// import React from 'react';

// import { ProtectedRoute } from '@/shared/ui/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    // element: <Layout/>,
    children: [
    //   {
    //     path: ROUTES.HOME,
    //     element: <MainPage />,
    //   },
    //   {
    //     path: ROUTES.LOGIN,
    //     element: <LoginPage />,
    //   },
    //   {
    //     path: ROUTES.REGISTR,
    //     element: <RegistrPage />,
    //   },
    //   {
    //     path: ROUTES.TOPICS,
    //     element: (
    //     //   <ProtectedRoute>
    //         <TopicPage />
       
    //     //   </ProtectedRoute>
    //     ),
    //   },
    ],
  },
]);