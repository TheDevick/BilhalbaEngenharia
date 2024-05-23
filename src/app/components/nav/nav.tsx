import Link from "@/app/components/nav/link"
import { LinkType} from "@/app/components/nav/types"
import { Socials, SocialType } from "@/app/social"

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
      {links.map((link, id) => {
        return <Link link={link} id={id.toString()} />
      })}
    </ul>
  )
}