import { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import LoadingSpinner from "./LoadingSpinner";

export const IndexPage = lazy(() => import("../pages/IndexPage"));
export const ProfilePage = lazy(() => import("../pages/ProfilePage"));
export const SettingsPage = lazy(() => import("../pages/SettingsPage"));

const AppContent = () => {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<LoadingSpinner />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          path: "/",
          element: <IndexPage />,
          index: true,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/settings",
          element: <SettingsPage />,
        },
      ],
    },
  ]);

  return routes;
};

export default AppContent;
