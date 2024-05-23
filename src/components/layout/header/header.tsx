import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Intro />
      <div id="header">
        <Link href="/" className="logo"> Bilhalba Engenharia: Projetos Elétricos </Link>
      </div>
    </header>
  );
}

function Intro() {
  return (
    <div id="intro">
      <h1>
        Bilhalba Engenharia: <br /> Projetos Elétricos
      </h1>
      <p>
        Oferecendo serviços de engenharia elétrica e energia solar às cidades da fronteira de Quaraí, Artigas e região
      </p>
      <ul className="actions">
        <li key={1}>
          <a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a>
        </li>
      </ul>
    </div>
  );
}
