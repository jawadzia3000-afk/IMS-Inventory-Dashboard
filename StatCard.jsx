function StatCard({ title, value, color }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">

      <div>
        <p className="text-gray-500">{title}</p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div className={`${color} h-14 w-14 rounded-full`} />

    </div>
  );
}

export default StatCard;