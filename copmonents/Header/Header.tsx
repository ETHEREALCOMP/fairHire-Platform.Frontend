import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="">
        <ul>
          <li>
            <Link href="/">FairHire</Link>
          </li>
          <li>
            <Link href="/sign-in">Увійти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
