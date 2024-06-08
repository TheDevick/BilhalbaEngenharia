import { Socials } from '@/components/Layout/Social'
import Link from '@/components/Layout/Navbar/Link'
import { LinkType } from '@/types'

export default function Navbar() {
  const links = [
    {
      href: '/',
      text: 'Página Inicial',
      isNextLink: true,
    },
    {
      href: '/sobre-nos',
      text: 'Sobre Nós',
      isNextLink: true,
    },
    {
      href: '/posts',
      text: 'Posts',
      isNextLink: true,
    },
  ]

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
