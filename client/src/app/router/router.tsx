import { createBrowserRouter } from "react-router-dom";
import { MainPage, LoginPage, RegistrPage, TopicPage } from "@/pages";
import { ROUTES } from "./routes";
import Layout from "./layout/Layout";
import { ProtectedRoute } from "@/shared/ui/ProtectedRoute";
import { PublicRoute } from "@/shared/ui/PublicRoute";
import ErrorPage from "@/pages/error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
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

      {
        path: ROUTES.TOPICS,
        element: (
          <ProtectedRoute>
            <TopicPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.ERROR,
        element: (
            <ErrorPage />
        ),

      },
    ],
  },
]);
