import { LuClock, LuPlay } from "react-icons/lu";

export default function ActiveTask() {
  return (
    <div className="bg-[#202020] rounded-2xl shadow-lg p-4 md:p-6 border border-[#202020] w-full">
      <a
        href=""
        className="text-xs text-normal bg-[#5DD62C] hover:bg-green-400 py-1 px-3 rounded-lg ml-3 "
      >
        Активне завдання
      </a>

      <div className="rounded-xl p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-base text-white mb-2">
              React TodoList з TypeScript
            </h3>
            <p className="text-[#99A1AF] text-sm mb-4">TechCorp</p>
          </div>
          <span className="flex items-center text-[#99A1AF] text-sm font-medium px-3 py-1 rounded-full">
            <LuClock size={16} className="mr-1" />2 дні
          </span>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-[#99A1AF] mb-2">
            <span>Прогрес</span>
            <span className="text-green-500">60 %</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-[#171717] h-3 rounded-full transition-all duration-300"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>

        <button
          className="flex items-center justify-center w-full bg-[#5DD62C] hover:bg-green-400 text-black text-sm font-normal rounded-lg transition duration-200"
          style={{ height: "36px" }}
        >
          <LuPlay size={16} className="mr-2" />
          Продовжити
        </button>
      </div>
    </div>
  );
}
