import Link from "@/app/components/nav/link"
import Social from "@/app/components/nav/social"
import { LinkType, SocialType } from "@/app/components/nav/types"

export default function Nav() {
  const links = [{
    'href': '/',
    'text': 'Página Inicial',
    'isNextLink': true
  }]

  const socials = [{
    'href': 'https://www.facebook.com/josenewtoncoffy.bilhalba',
    'text': 'Facebook',
    'icon': 'fa-facebook-f'
  }]

  return (
    <nav id="nav">
      <Links links={links} />
      <Socials socials={socials} />
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

function Socials({ socials }: { socials: SocialType[] }) {
  return (
    <ul className="icons">
      {socials.map((social, id) => {
        return <Social social={social} id={id.toString()} />
      })}
    </ul>
  )
}
