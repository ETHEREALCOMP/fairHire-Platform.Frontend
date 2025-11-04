"use client";

import { useState } from "react";

interface Task {
  id: number;
  title: string;
  company: string;
  status: "active" | "completed";
  rating?: number;
}

const FILTER_TABS = ["all", "active", "completed"] as const;
type FilterTab = (typeof FILTER_TABS)[number];

export default function MyTasks() {
  const [filter, setFilter] = useState<FilterTab>("all");

  const tasks: Task[] = [
    {
      id: 1,
      title: "React TodoList з TypeScript",
      company: "TechCorp",
      status: "active",
    },
    {
      id: 2,
      title: "API Integration Challenge",
      company: "StartupXYZ",
      status: "active",
    },
    {
      id: 3,
      title: "Responsive Dashboard Layout",
      company: "DesignHub",
      status: "completed",
      rating: 85,
    },
    {
      id: 4,
      title: "Database Optimization",
      company: "DataTech",
      status: "completed",
      rating: 92,
    },
  ];

  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : task.status === filter
  );

  const getStatusLabel = (status: "active" | "completed") => {
    return status === "active" ? "Очікує виконання" : "Завершене";
  };

  const getStatusColor = (status: "active" | "completed") => {
    return status === "active"
      ? "bg-[#0F0F0F] text-[#5DD62C] border-[#5DD62C]" // Очікує виконання
      : "bg-[#0F0F0F] text-[#5DD62C] border-[#5DD62C]"; // Завершене
  };

  return (
    <div className="bg-[#202020] rounded-2xl shadow-lg p-6 border border-[#202020] w-[810px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base font-normal text-[#F8F8F8]">Мої завдання</h2>
      </div>

      {/* Filter Tabs з об'єднаним фоном */}
      <div className="bg-[#F5F5F5] rounded-full p-1 mb-8 flex w-[220px] h-9">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`flex-1 rounded-full font-medium transition duration-200 text-sm flex items-center justify-center mx-0.5 ${
              filter === tab
                ? "bg-white text-[#0F0F0F] shadow-sm"
                : "text-[#99A1AF] hover:text-[#0F0F0F]"
            }`}
          >
            {tab === "all" ? "Всі" : tab === "active" ? "Активні" : "Завершені"}
          </button>
        ))}
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="bg-[#0F0F0F] border border-[#0F0F0F] rounded-xl p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h3 className="text-base font-normal text-[#F8F8F8] mb-1">
                  {task.title}
                </h3>
                <p className="text-[#99A1AF] text-sm">{task.company}</p>
              </div>

              {/* Права колонка - оцінка та статус */}
              <div className="flex flex-col items-end space-y-2">
                {/* Оцінка з'являється тільки для завершених завдань */}
                {task.status === "completed" && task.rating && (
                  <div className="flex items-center px-2 py-1 rounded-lg border border-[#5DD62C] bg-[#0F0F0F] text-[#5DD62C] font-normal">
                    <span className="text-xs mr-1">Оцінка:</span>
                    <span className="font-bold">{task.rating}</span>
                  </div>
                )}

                {/* Статус */}
                <div
                  className={`px-2 py-1 rounded-lg text-xs font-normal border ${getStatusColor(
                    task.status
                  )}`}
                >
                  {getStatusLabel(task.status)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
