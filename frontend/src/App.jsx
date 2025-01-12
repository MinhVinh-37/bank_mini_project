import LoginPage from "./pages/LoginPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { useState } from "react";
import { storageAccountKey } from "./constants.js";

export default function App() {
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem(storageAccountKey))
  );

  function loginCurrentAccount(data) {
    localStorage.setItem(storageAccountKey, JSON.stringify(data));
    setAccount(data);
  }

  function logoutCurrentAccount() {
    localStorage.removeItem(storageAccountKey);
    setAccount(null);
  }

  function updateLatestAccount(data) {
    setAccount(data);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage loginCurrentAccount={loginCurrentAccount} />}
        />
        <Route
          path="/dashboard"
          element={
            <DashboardPage
              account={account}
              logoutCurrentAccount={logoutCurrentAccount}
              updateLatestAccount={updateLatestAccount}
            />
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
