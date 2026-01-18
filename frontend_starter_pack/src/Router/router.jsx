import React from "react";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import TaskList from "../components/TaskList";
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";
import UserManagement from "../components/UserManagement";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/Layout";

export const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <TaskList />
          </ProtectedRoute>
        )
      },
      {
        path: "tasks/:id",
        element: (
          <ProtectedRoute>
            <TaskDetails />
          </ProtectedRoute>
        )
      },
      {
        path: "tasks/create",
        element: (
          <ProtectedRoute adminOnly>
            <TaskForm />
          </ProtectedRoute>
        )
      },
      {
        path: "tasks/edit/:id",
        element: (
          <ProtectedRoute adminOnly>
            <TaskForm />
          </ProtectedRoute>
        )
      },
      {
        path: "admin/users",
        element: (
          <ProtectedRoute adminOnly>
            <UserManagement />
          </ProtectedRoute>
        )
      },
      {
        path: "admin/dashboard",
        element: (
          <ProtectedRoute adminOnly>
            <TaskList />
          </ProtectedRoute>
        )
      }
    ]
  }
];
