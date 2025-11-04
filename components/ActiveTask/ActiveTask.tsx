export default function ActiveTask() {
  return (
    <div className="bg-[#202020] rounded-2xl shadow-lg p-6 border border-[#202020]">
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
            {/* Іконка годинника */}
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            2 дні
          </span>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-[#99A1AF] mb-2">
            <span>Прогрес</span>
            <span className="text-green-500">60 %</span>
          </div>
          <div className="w-full bg-white-200 rounded-full h-3">
            <div
              className="bg-linear-to-r from-[#171717] to-[#171717] h-3 rounded-full transition-all duration-300"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>

        <button
          className="flex items-center justify-center w-full bg-[#5DD62C] hover:bg-green-400 text-black text-sm font-normal rounded-lg transition duration-200"
          style={{ height: "36px" }}
        >
          {/* Іконка Play */}
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          Продовжити
        </button>
      </div>
    </div>
  );
}
