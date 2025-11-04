export default function MyProgress() {
  const stats = [
    { label: "Завдань виконано", value: "12" },
    { label: "Середня оцінка", value: "83/100" },
    { label: "Компаній переглянули", value: "8" },
  ];

  return (
    <div className="bg-[#202020] rounded-2xl shadow-lg p-6 border border-[#202020] w-[390px]">
      {/* Заголовок з іконкою стрілки */}
      <div className="flex space-x-2 items-center mb-6">
        <svg
          className="w-6 h-6 text-[#5DD62C]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
        <h2 className="text-[16px] leading-5 font-normal text-[#F8F8F8]">
          Твій прогрес
        </h2>
      </div>

      {/* Список статистики */}
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-[14px] leading-5 font-normal text-[#99A1AF]">
              {stat.label}
            </span>
            <span className="text-[14px] leading-5 font-normal text-[#F8F8F8]">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
