import { Socials } from "@/components/layout/social"
import Link from "@/components/layout/navbar/link"
import { LinkType } from "@/types"

export default function Navbar() {
  const links = [{
    'href': '/',
    'text': 'Página Inicial',
    'isNextLink': true
  }, {
    'href': '/about-us',
    'text': 'Sobre Nós',
    'isNextLink': true
  }]

  return (
    <nav id="nav">
      <Links links={links} />
      <Socials />
    </nav>
  )
}

function Links({ links }: { links: LinkType[] }) {
  return (
    <ul className="links">
      {links.map((link, key) => {
        return <Link link={link} key={key.toString()} />
      })}
    </ul>
  )
}