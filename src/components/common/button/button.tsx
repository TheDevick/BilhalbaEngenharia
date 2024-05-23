import { ChildrenType } from "@/types";
import clsx from "clsx";
import Link from "next/link";

export default function Button({ href, children, className, primary = false, small = false, fit = false }: { href: string, children: ChildrenType, className?: string, primary?: boolean, small?: boolean, fit?: boolean }) {
  return (
    <Link
      className={clsx("button", className, {
        primary: primary,
        small: small,
        fit: fit
      })}
      href={href}
    >
      {children}
    </Link>
  )
}
