// components/MyTasks/MyTasks.tsx
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
      ? "bg-orange-100 text-orange-800 border-orange-200"
      : "bg-green-100 text-green-800 border-green-200";
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 90) return "text-green-600 bg-green-50 border-green-200";
    if (rating >= 80) return "text-blue-600 bg-blue-50 border-blue-200";
    if (rating >= 70) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Мої завдання</h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 mb-6">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
              filter === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
            className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition duration-200"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                  {task.title}
                </h3>
                <p className="text-gray-600">{task.company}</p>
              </div>
              {task.rating && (
                <div
                  className={`flex items-center px-3 py-1 rounded-lg border font-medium ${getRatingColor(
                    task.rating
                  )}`}
                >
                  <span className="text-sm mr-1">Оцінка:</span>
                  <span className="font-bold">{task.rating}</span>
                </div>
              )}
            </div>

            <div
              className={`inline-block px-3 py-1 rounded-lg text-sm font-medium ${getStatusColor(
                task.status
              )}`}
            >
              {getStatusLabel(task.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
