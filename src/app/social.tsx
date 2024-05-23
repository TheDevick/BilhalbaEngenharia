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

export function Social({ social, id }: { social: SocialType, id: string }) {
  return (
    <li id={id}>
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
      {socials.map((social, id) => {
        return <Social social={social} id={id.toString()} />
      })}
    </ul>
  )
}
