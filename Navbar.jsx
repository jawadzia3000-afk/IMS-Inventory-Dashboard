import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBell, FiSearch } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { useInventory } from "../context/InventoryContext";
import { timeAgo } from "../utils/time";
import userAvatar from "../assets/User.jpg";

function Navbar() {
  const { user } = useAuth();
  const { activity } = useInventory();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSearchSubmit(e) {
    e.preventDefault();
    navigate(`/inventory?search=${encodeURIComponent(query)}`);
  }

  const recentAlerts = activity.slice(0, 6);

  return (
    <header className="bg-white shadow-sm h-16 px-6 flex items-center justify-between relative">

      <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search inventory..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent outline-none ml-3 w-full"
        />
      </form>

      <div className="flex items-center gap-6">
        <div className="relative" ref={panelRef}>
          <button
            className="relative"
            onClick={() => setShowNotifications((s) => !s)}
            aria-label="Notifications"
          >
            <FiBell size={22} />
            {recentAlerts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white h-5 w-5 rounded-full text-xs flex items-center justify-center">
                {recentAlerts.length}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
              <div className="px-4 py-3 border-b font-semibold">Recent Activity</div>
              <div className="max-h-80 overflow-y-auto">
                {recentAlerts.length === 0 ? (
                  <p className="text-gray-400 text-sm p-4">No activity yet.</p>
                ) : (
                  recentAlerts.map((a) => (
                    <div key={a.id} className="px-4 py-3 border-b last:border-b-0 hover:bg-gray-50">
                      <p className="text-sm">
                        <span className="font-semibold">{a.user}</span> {a.action}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{timeAgo(a.time)}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <img
            src={userAvatar}
            alt={user?.name || "User"}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold">{user?.name || "Guest"}</h4>
            <p className="text-sm text-gray-500">
              {user?.role === "admin" ? "Admin" : "Employee"}
            </p>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Navbar;
