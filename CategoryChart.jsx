import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend
} from "recharts";
import { useInventory } from "../context/InventoryContext";

const COLORS = [
    "#2563eb",
    "#22c55e",
    "#eab308",
    "#ef4444",
    "#8b5cf6",
    "#06b6d4"
];

function CategoryChart() {
    const { categoryBreakdown } = useInventory();

    return (
        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-6">
                Inventory Categories
            </h2>

            {categoryBreakdown.length === 0 ? (
                <p className="text-gray-400 text-center py-16">No inventory yet.</p>
            ) : (
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={categoryBreakdown}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={100}
                        >
                            {categoryBreakdown.map((entry, index) => (
                                <Cell
                                    key={entry.name}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            )}

        </div>
    );
}

export default CategoryChart;
