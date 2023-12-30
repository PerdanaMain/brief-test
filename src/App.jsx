import { React } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
const App = () => {
  const credential = localStorage.getItem("credentialResponse") || null;

  return (
    <Routes>
      <Route
        path="/"
        element={credential != null ? <AdminLayout /> : <AuthLayout />}
      />
      <Route path="/*" element={<Navigate to="/" />} />
      <Route
        path="admin/*"
        element={credential != null ? <AdminLayout /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
