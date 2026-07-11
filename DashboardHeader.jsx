import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function DashboardHeader() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-8 flex-wrap gap-4">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back, {user?.name || "there"} 
        </p>
      </div>

      <button
        onClick={() => navigate("/reports")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition"
      >
        Download Report
      </button>

    </div>
  );
}

export default DashboardHeader;
