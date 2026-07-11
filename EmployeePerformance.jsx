import { useInventory } from "../context/InventoryContext";

function EmployeePerformance() {
    const { employeePerformance, maxPerformance } = useInventory();

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-6">
                Top Employees
            </h2>

            {employeePerformance.length === 0 ? (
                <p className="text-gray-400 text-sm">No data yet.</p>
            ) : (
                employeePerformance.slice(0, 5).map((emp) => (

                    <div
                        key={emp.name}
                        className="mb-5 last:mb-0"
                    >

                        <div className="flex justify-between mb-2">

                            <span>
                                {emp.name}
                            </span>

                            <span>
                                {emp.total}
                            </span>

                        </div>

                        <div className="bg-gray-200 h-2 rounded-full">

                            <div
                                className="bg-blue-600 h-2 rounded-full transition-all"
                                style={{
                                    width: `${(emp.total / maxPerformance) * 100}%`
                                }}
                            />

                        </div>

                    </div>

                ))
            )}

        </div>

    );
}

export default EmployeePerformance;
