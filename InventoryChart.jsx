import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { useInventory } from "../context/InventoryContext";

function InventoryChart() {
    const { monthlyTrend } = useInventory();

    return (
        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-6">
                Monthly Inventory
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyTrend}>
                    <XAxis dataKey="month" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar
                        dataKey="inventory"
                        fill="#2563eb"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}

export default InventoryChart;
