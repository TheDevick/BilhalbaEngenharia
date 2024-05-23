import clsx from "clsx"

export const socials = [{
  'href': 'https://www.facebook.com/josenewtoncoffy.bilhalba',
  'text': 'Facebook',
  'icon': 'fa-facebook-f'
}]

export type SocialType = {
  href: string,
  text: string,
  icon: string,
}

export function Social({ social }: { social: SocialType }) {
  return (
    <li>
      <a href={social.href} className={clsx("icon brands", social.icon)} target="_blank">
        <span className="label">
          {social.text}
        </span>
      </a>
    </li>
  )
}

export function Socials({ useAlt = false }: { useAlt?: boolean }) {
  return (
    <ul className={clsx('icons', { 'alt': useAlt })}>
      {socials.map((social, key) => {
        return <Social social={social} key={key.toString()} />
      })}
    </ul>
  )
}
