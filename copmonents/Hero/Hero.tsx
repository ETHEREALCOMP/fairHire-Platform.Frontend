import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="py-24 flex flex-col justify-center items-center"
    >
      <h2 className="sr-only">Hero Section</h2>
      <h2 className="mb-6">FairHire — чесний найм без понтів</h2>
      <p className="pb-6 text-center sm:w-[300px] md:w-[500px] lg:w-[700px] text-gray-400">
        Платформа, яка показує не резюме, а людину в дії. Отримайте справедливу
        оцінку ваших навичок через реальні завдання.
      </p>
      <ul className="flex justify-center items-center gap-4 pt-6">
        <li>
          <Link
            href="/sing-up?role=candidate"
            className="rounded-lg py-3 px-4 text-black  bg-custom-green hover:bg-gray-100 transition"
          >
            Я кандидат
          </Link>
        </li>
        <li>
          <Link
            href="/sing-up?role=company"
            className="rounded-lg  py-3 px-4  hover:bg-gray-100 bg-custom-dark-green transition"
          >
            Я компанія
          </Link>
        </li>
      </ul>
    </section>
  );
}
