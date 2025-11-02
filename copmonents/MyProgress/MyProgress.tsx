// components/MyProgress/MyProgress.tsx
export default function MyProgress() {
  const stats = [
    { label: "Завдань виконано", value: "12" },
    { label: "Середня оцінка", value: "63/100" },
    { label: "Компаній переглянули", value: "8" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Твій прогрес</h2>

      <div className="space-y-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200"
          >
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600 text-sm font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
