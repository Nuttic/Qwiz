import { createBrowserRouter } from "react-router-dom";
import { MainPage, LoginPage, RegistrPage } from "@/pages";
import { ROUTES } from "./routes";
// import { ProtectedRoute } from '@/shared/ui/ProtectedRoute';

import React from "react";
import { PublicRoute } from "@/shared/ui";
import Layout from './layout/Layout';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout/>,
    children: [
      {
        path: ROUTES.HOME,
        element: <MainPage />,
      },
      {
        path: ROUTES.LOGIN,
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: ROUTES.REGISTR,
        element: (
          <PublicRoute>
            <RegistrPage />
          </PublicRoute>
        ),
      },
      //   {
      //     path: ROUTES.TOPICS,
      //     element: (
      //   <ProtectedRoute>
      //         <TopicPage />

      //   </ProtectedRoute>
      //     ),
      //   },

    ],
  },
]);
