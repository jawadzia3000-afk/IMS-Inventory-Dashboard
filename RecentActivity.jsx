import { useInventory } from "../context/InventoryContext";
import { timeAgo } from "../utils/time";

const DOT_COLORS = {
  add: "bg-green-500",
  update: "bg-yellow-500",
  delete: "bg-red-500",
};

function RecentActivity() {
  const { activity } = useInventory();
  const recent = activity.slice(0, 6);

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-5">
        Recent Activity
      </h2>

      {recent.length === 0 ? (
        <p className="text-gray-400 text-sm">No activity yet.</p>
      ) : (
        recent.map((item) => (

          <div
            key={item.id}
            className="border-b last:border-b-0 py-3 flex items-start gap-3"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full mt-2 shrink-0 ${DOT_COLORS[item.type] || "bg-gray-400"}`}
            />

            <div>
              <h3 className="font-semibold">
                {item.user}
              </h3>

              <p className="text-gray-600">
                {item.action}
              </p>

              <small className="text-gray-400">
                {timeAgo(item.time)}
              </small>
            </div>
          </div>

        ))
      )}

    </div>
  );
}

export default RecentActivity;
