import { Link } from "react-router-dom";
import { useInventory } from "../context/InventoryContext";

function LowStockCard() {
    const { lowStockItems } = useInventory();

    return (
        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-5">
                Low Stock
            </h2>

            {lowStockItems.length === 0 ? (
                <p className="text-gray-400 text-sm">Everything is well stocked.</p>
            ) : (
                lowStockItems.slice(0, 6).map((item) => (

                    <Link
                        to="/inventory"
                        key={item.id}
                        className="flex justify-between border-b last:border-b-0 py-3 hover:bg-gray-50 -mx-2 px-2 rounded"
                    >
                        <span>
                            {item.product}
                        </span>

                        <span className="text-red-600 font-semibold">
                            {item.quantity} left
                        </span>

                    </Link>

                ))
            )}

        </div>

    );
}

export default LowStockCard;
