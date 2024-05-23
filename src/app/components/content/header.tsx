import Link from "next/link";

export default function Header() {
  return (
    <header id="header">
        <Link href="/" className="logo"> Bilhalba Engenharia: Projetos Elétricos </Link>
    </header>
  );
}