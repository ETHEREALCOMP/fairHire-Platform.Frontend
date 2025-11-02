import { MdOutlineRemoveRedEye } from 'react-icons/md';

export default function CandidateList() {
  return (
    <div className="pt-8 pb-6">
      <div className="rounded-2xl bg-[#202020] p-6 text-gray-200">
        <h2 className="mb-6">Список кандидатів</h2>

        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-sm text-gray-400 border-b border-white/10 [&>th]:pb-2">
                <th className="pl-2 w-64">Ім’я</th>
                <th className="w-[189px]">Позиція</th>
                <th className="text-center">Мислення</th>
                <th className="text-center">Потенціал</th>
                <th className="text-center">Комунікація</th>
                <th className="text-center">Оцінка</th>
                <th className="text-center">Статус</th>
                <th className="text-center"></th>
              </tr>
            </thead>

            <tbody className="text-sm [&>tr>td]:border-t [&>tr>td]:border-white [&>tr>td]:pt-[8.5px] [&>tr>td]:pb-[8.5px]">
              <tr>
                <td className="flex items-center gap-3 pl-2 w-64">
                  <div className="flex w-10 h-10 justify-center items-center rounded-full bg-[#0f0f0f] text-sm font-semibold">
                    О
                  </div>
                  <span className="font-medium">Олексій Петренко</span>
                </td>
                <td className="text-gray-300 w-[189px]">Frontend Developer</td>
                <td className="text-center">
                  <span
                    className="inline-flex h-7 min-w-9 items-center justify-center rounded-md
                     bg-[rgba(93,214,44,0.1)] px-2 text-sm font-medium text-[#5DD62C]
                     ring-1 ring-[#5DD62C]/30"
                  >
                    88
                  </span>
                </td>
                <td className="text-center">
                  <span className="inline-flex h-7 min-w-9 items-center justify-center rounded-md bg-[rgba(93,214,44,0.1)] px-2 text-sm font-medium text-[#5DD62C] ring-1 ring-[#5DD62C]/30">
                    92
                  </span>
                </td>
                <td className="text-center">
                  <span className="inline-flex h-7 min-w-9 items-center justify-center rounded-md bg-[rgba(93,214,44,0.1)] px-2 text-sm font-medium text-[#5DD62C] ring-1 ring-[#5DD62C]/30">
                    90
                  </span>
                </td>
                <td className=" text-center font-semibold text-[#5DD62C]">
                  85/100
                </td>
                <td className="text-center">
                  <span
                    className="inline-flex items-center rounded-[7px] bg-[#5DD62C]
                     px-3 py-1 text-xs font-semibold text-black"
                  >
                    Завершено
                  </span>
                </td>
                <td className="text-center align-middle">
                  <button className="inline-flex items-center justify-center gap-2 text-gray-300 hover:text-white">
                    <MdOutlineRemoveRedEye size={16} />
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
