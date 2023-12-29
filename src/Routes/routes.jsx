import React from "react";
import { paths } from "./paths";
import Layout from "../Components/Layout/Layout";
import AdminLayout from "../Components/Layout/AdminLayout";
import { guestRoutes } from "./guest.routes";
import { adminRoutes } from "./admin.routes";

export const allRoutes = [
  {
    path: paths.HOME_PAGE,
    element: <Layout />,
    children: guestRoutes,
  },
  {
    path: paths.DASHBOARD_PAGE,
    element: <AdminLayout />,
    children: adminRoutes,
  },
  {
    path: "*",
    element: React.createElement(() => <>not found page</>),
  },
];
