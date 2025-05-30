import Button from '@/components/Common/Button/Button'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Intro />
      <div id="header">
        <Link href="/" className="logo">
          {' '}
          Abella Bilhalba Engenharia: Projetos Elétricos
        </Link>
      </div>
    </header>
  )
}

function Intro() {
  return (
    <div id="intro" style={{ justifyContent: 'center' }}>
      <h1>
        Abella Bilhalba Engenharia: <br /> Projetos Elétricos
      </h1>
      <p>
        Oferecendo serviços de engenharia elétrica e energia solar às cidades da
        fronteira: Quaraí, Artigas e região
      </p>
      <div className="actions">
        <Button
          href="#header"
          className="icon solid solo fa-arrow-down scrolly"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
