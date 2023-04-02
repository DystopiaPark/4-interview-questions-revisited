import React from "react";
import SignIn from "./components/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import AdminView from "./views/AdminView";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import VisitorView from "./views/VisitorView";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/visitor" element={<VisitorView />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminView />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
