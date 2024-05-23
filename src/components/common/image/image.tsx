import Link from "next/link"

const classes = "image fit"

function InternalImage({ src, alt = '' }: { src: string, alt?: string }) {
  return <img src={src} alt={alt} />
}

export default function Image({ src, alt = '', }: { src: string, alt?: string }) {
  return (
    <span className={classes}>
      <InternalImage src={src} alt={alt} />
    </span>
  )
}

export function ImageNextLink({ href, src, alt = '' }: { href: string, src: string, alt?: string }) {
  return (
    <Link href={href} className={classes}>
      <img src={src} alt={alt} />
    </Link>
  )
}

export function ImageLink({ href, src, alt = '' }: { href: string, src: string, alt?: string }) {
  return (
    <a href={href} className={classes}>
      <img src={src} alt={alt} />
    </a>
  )
}
