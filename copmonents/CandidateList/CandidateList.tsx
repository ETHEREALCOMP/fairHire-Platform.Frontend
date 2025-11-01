export default function CandidateList() {
  return (
    <div className="pt-6 pb-6">
      <div className="rounded-2xl bg-[#202020] p-6 text-gray-200">
        <h2 className="mb-6">Список кандидатів</h2>

        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-sm text-gray-400 border-b border-white/10">
                <th className="pb-3">Ім’я</th>
                <th className="pb-3">Позиція</th>
                <th className="pb-3">Мислення</th>
                <th className="pb-3">Потенціал</th>
                <th className="pb-3">Комунікація</th>
                <th className="pb-3">Оцінка</th>
                <th className="pb-3">Статус</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              <tr className="bg-[#252525] rounded-xl">
                <td className="flex items-center gap-3 rounded-l-xl px-4 py-3">
                  <div className="grid size-8 place-items-center rounded-full bg-white/10 text-sm font-semibold">
                    О
                  </div>
                  <span className="font-medium">Олексій Петренко</span>
                </td>
                <td className="text-gray-300 px-4 py-3">Frontend Developer</td>
                <td className="px-4 py-3">
                  <span
                    className="inline-flex h-7 min-w-9 items-center justify-center rounded-md
                     bg-[rgba(93,214,44,0.1)] px-2 text-sm font-medium text-[#5DD62C]
                     ring-1 ring-[#5DD62C]/30"
                  >
                    88
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex h-7 min-w-9 items-center justify-center rounded-md bg-[rgba(93,214,44,0.1)] px-2 text-sm font-medium text-[#5DD62C] ring-1 ring-[#5DD62C]/30">
                    92
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex h-7 min-w-9 items-center justify-center rounded-md bg-[rgba(93,214,44,0.1)] px-2 text-sm font-medium text-[#5DD62C] ring-1 ring-[#5DD62C]/30">
                    90
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold text-gray-100">
                  85/100
                </td>
                <td className="px-4 py-3">
                  <span
                    className="inline-flex items-center rounded-full bg-[#5DD62C]
                     px-3 py-1 text-xs font-semibold text-black"
                  >
                    Завершено
                  </span>
                </td>
                <td className="px-4 py-3 text-right rounded-r-xl">
                  <button className="flex items-center gap-2 text-gray-300 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.964-7.178z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Профіль
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
