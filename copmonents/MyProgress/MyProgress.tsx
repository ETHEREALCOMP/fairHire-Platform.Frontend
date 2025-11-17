import { LuTrendingUp } from "react-icons/lu";

export default function MyProgress() {
  const stats = [
    { label: "Завдань виконано", value: "12" },
    { label: "Середня оцінка", value: "83/100" },
    { label: "Компаній переглянули", value: "8" },
  ];

  return (
    <div className="bg-[#202020] rounded-2xl shadow-lg p-4 md:p-6 border border-[#202020] w-full">
      <div className="flex space-x-2 items-center mb-6">
        <LuTrendingUp size={24} className="text-[#5DD62C]" />
        <h2 className="text-[16px] leading-5 font-normal text-[#F8F8F8]">
          Твій прогрес
        </h2>
      </div>

      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-[14px] leading-5 font-normal text-[#99A1AF]">
              {stat.label}
            </span>
            <span className="text-[14px] leading-5 font-normal text-[#5DD62C]">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
