import { ChildrenType } from '@/types'
import clsx from 'clsx'
import Link from 'next/link'

export type ButtonSize = 'large' | 'default' | 'small'

export default function Button({
  children,
  href,
  className = '',
  size = 'default',
  fit = false,
  disabled = false,
  primary = false,
}: {
  children: ChildrenType
  href: string
  className?: string
  size?: ButtonSize
  fit?: boolean
  disabled?: boolean
  primary?: boolean
}) {
  const buttonSize = size === 'default' ? '' : size
  return (
    <Link
      className={clsx('button', className, buttonSize, {
        primary,
        fit,
        disabled,
      })}
      href={href}
    >
      {children}
    </Link>
  )
}
