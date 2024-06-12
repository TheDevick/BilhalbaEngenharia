import React from 'react'

export default function Description({
  children,
}: {
  children?: React.ReactNode
}) {
  return <p>{children}</p>
}
