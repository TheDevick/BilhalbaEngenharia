import Link from "@/app/components/content/nav/link"
import { LinkType } from "@/app/components/content/nav/types"
import { Socials } from "@/app/social"

export default function Nav() {
  const links = [{
    'href': '/',
    'text': 'Página Inicial',
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