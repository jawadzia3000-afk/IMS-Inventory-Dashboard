import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import RequireAuth from "./components/RequireAuth";
import Login from "./components/pages/Login";
import AdminDashboard from "./components/pages/AdminDashboard";
import EmployeeDashboard from "./components/pages/EmployeeDashboard";
import Inventory from "./components/pages/Inventory";
import AddInventory from "./components/pages/AddInventory";
import Employees from "./components/pages/Employees";
import Reports from "./components/pages/Reports";
import Settings from "./components/pages/Settings";
import UpdateStatus from "./components/pages/UpdateStatus";
import { useAuth } from "./context/AuthContext";

function RoleDashboard() {
  const { user } = useAuth();
  return user?.role === "admin" ? <AdminDashboard /> : <EmployeeDashboard />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <RequireAuth>
            <DashboardLayout />
          </RequireAuth>
        }
      >
        <Route index element={<RoleDashboard />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="add-inventory" element={<AddInventory />} />
        <Route path="edit-inventory/:id" element={<AddInventory />} />
        <Route path="employees" element={<Employees />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="status" element={<UpdateStatus />} />
      </Route>
    </Routes>
  );
}

export default App;
