export default function ActiveTask() {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200">
      <a href="" className="text-xs bg-green-500 py-1 px-3 rounded-lg ml-3 ">
        Активне завдання
      </a>

      <div className="rounded-xl p-4  ">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl  text-white mb-2">
              React TodoList з TypeScript
            </h3>
            <p className="text-gray-400">TechCorp</p>
          </div>
          <span className=" text-gray-500 text-sm font-medium px-3 py-1 rounded-full">
            2 дні
          </span>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Прогрес</span>
            <span className="text-green-500">60%</span>
          </div>
          <div className="w-full bg-white-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-gray-600 to-gray-600 h-3 rounded-full transition-all duration-300"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>

        <button className="w-full bg-green-500 hover:from-blue-700 hover:to-indigo-700 text-black font-medium py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg">
          Продовжити
        </button>
      </div>
    </div>
  );
}
