import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { Dashboard } from "./components/dashboard/dashboard";
import { TablesList } from "./components/tables/tables";
import { Table } from "./components/table/table";
import { Provider } from "react-redux";
import { store } from "./store/store";
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("No element with id 'root' found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/tables",
        element: <TablesList />,
      },
      {
        path: "/table",
        element: <Table />,
      },
      // {
      //   path: "/create",
      //   element: <CreateTable />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
