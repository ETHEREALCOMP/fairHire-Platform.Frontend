import { IoIosCode } from "react-icons/io";
import { IoIosTrendingUp } from "react-icons/io";
import { LuUsersRound } from "react-icons/lu";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function HowItWorks() {
  return (
    <section
      aria-label="How it works"
      className="
      pb-24
      flex
      flex-col
      justify-center
      items-center
  "
    >
      <h2 className="sr-only"> How It Works Section</h2>
      <h2 className="pb-12">Як це працює</h2>
      <ul className="flex flex-col items-center justify-center md:flex-row lg:flex-row flex-wrap gap-7 pb-12">
        <li>
          <div className="flex flex-col items-center justify-center px-9 py-9 bg-card-how-it-works rounded-2xl">
            <div className="flex items-center justify-center w-16 h-16 rounded-4xl bg-circle-green-how-it-works mb-6">
              <IoIosCode className="w-10 h-10 fill-icons-how-it-works" />
            </div>
            <h3 className="pb-3">Пройди коротке завдання</h3>
            <p className="text-center w-[279px] text-gray-400">
              Виконай практичне завдання замість заповнення довгих анкет
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center justify-center px-9 py-9 bg-card-how-it-works rounded-2xl">
            <div className="flex items-center justify-center w-16 h-16 rounded-4xl bg-circle-green-how-it-works mb-6">
              <IoIosTrendingUp className="w-10 h-10 fill-icons-how-it-works" />
            </div>
            <h3 className="pb-3">Отримай реальний фідбек</h3>
            <p className="text-center w-[279px] text-gray-400">
              Дізнайся свої сильні сторони та зони росту від професіоналів
            </p>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center justify-center px-9 py-9 bg-card-how-it-works rounded-2xl">
            <div className="flex items-center justify-center w-16 h-16 rounded-4xl bg-circle-green-how-it-works mb-6">
              <LuUsersRound className="w-10 h-10 stroke-icon-how-it-works" />
            </div>
            <h3 className="pb-3">Отримай шанс</h3>
            <p className="text-center w-[279px] text-gray-400">
              Навіть без досвіду — покажи своє мислення та потенціал
            </p>
          </div>
        </li>
      </ul>
      <div className="flex flex-col justify-center items-center bg-card-how-it-works px-12 py-12 w-full lg:w-[1100px] md:w-[750px] rounded-xl">
        <h3 className="pb-6">Прозорість і чесність</h3>

        <p className="text-center w-full lg:w-[720px] pb-6 text-gray-400">
          FairHire створена для того, щоб оцінка була справедливою. Ми не
          ховаємо критерії, не використовуємо незрозумілі алгоритми. Ви завжди
          знаєте, що від вас очікують і як вас оцінюють.
        </p>

        <ul className="flex flex-row flex-wrap items-center justify-center gap-6 w-full lg:w-auto">
          <li className="flex items-center gap-3">
            <IoCheckmarkCircleOutline className="w-6 h-6 stroke-icon-how-it-works" />
            <span className="text-gray-400">Без прихованих критеріїв</span>
          </li>

          <li className="flex items-center gap-3">
            <IoCheckmarkCircleOutline className="w-6 h-6 stroke-icon-how-it-works" />
            <span className="text-gray-400">Реальний фідбек</span>
          </li>

          <li className="flex items-center gap-3">
            <IoCheckmarkCircleOutline className="w-6 h-6 stroke-icon-how-it-works" />
            <span className="text-gray-400">Безпечне середовище</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
