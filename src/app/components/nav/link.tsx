'use client'

import { LinkType } from "@/app/components/nav/types";
import { clsx } from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

function IsLinkActive(link: string) {
  return link === usePathname()
}

export default function Link({ link, id }: { link: LinkType, id: string }) {
  const Anchor = () => {
    if (link.isNextLink) {
      return <NextLink href={link.href}>{link.text}</NextLink>
    }

    return <a href={link.href}>{link.text}</a>
  }

  return (
    <li id={id} className={clsx({
      'isActive': IsLinkActive(link.href)
    })}>
      <Anchor />
    </li>
  )
}