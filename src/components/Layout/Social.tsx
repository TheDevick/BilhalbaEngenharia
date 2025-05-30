import clsx from 'clsx'

export const socials = [
  {
    href: 'https://www.facebook.com/bilhalba.engenharia',
    text: 'Facebook',
    icon: 'brands fab fa-facebook-f',
  },
  {
    href: 'https://www.instagram.com/abellabilhalba.eng',
    text: 'Instagram',
    icon: 'brands fab fa-instagram',
  },
  {
    href: 'https://api.whatsapp.com/send/?phone=5555984496965',
    text: 'Whatsapp',
    icon: 'brands fab fa-whatsapp',
  },
  {
    href: 'mailto:contato@bilhalba.com.br',
    text: 'Email',
    icon: 'fas fa-envelope',
  },
]

export type SocialType = {
  href: string
  text: string
  icon: string
}

export function Social({ social }: { social: SocialType }) {
  return (
    <li>
      <a
        href={social.href}
        className={clsx('icon', social.icon)}
        target="_blank"
      >
        <span className="label">{social.text}</span>
      </a>
    </li>
  )
}

export function Socials({ useAlt = false }: { useAlt?: boolean }) {
  return (
    <ul className={clsx('icons', { alt: useAlt })}>
      {socials.map((social, key) => {
        return <Social social={social} key={key.toString()} />
      })}
    </ul>
  )
}
