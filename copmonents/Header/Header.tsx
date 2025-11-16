import Link from "next/link";

export default function Header() {
  return (
    <header aria-label="navigation">
      <nav>
        <ul className="flex p-6 justify-between items-center">
          <li className="flex justify-center items-center gap-2">
            <div className="flex items-center justify-center rounded-lg bg-custom-green w-10 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#000"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <Link href="">FairHire</Link>
          </li>
          <li>
            <Link
              href=""
              className="rounded-lg border-2 py-2 px-4 border-gray-400 hover:bg-gray-400 hover:text-gray-900 transition"
            >
              Увійти
            </Link>
          </li>
        </ul>
        <div className="w-full border-t border-gray-600"></div>
      </nav>
    </header>
  );
}
