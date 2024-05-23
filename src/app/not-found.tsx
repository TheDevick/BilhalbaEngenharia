import Link from "next/link";

export default function NotFound() {
  return (
    <header className="major">
      <span className="date">
        404 Not Found
      </span>
      <h1>Página não encontrada.</h1>
      <p>Voltar à <Link href="/">Página Inicial</Link></p>
    </header>
  )
}