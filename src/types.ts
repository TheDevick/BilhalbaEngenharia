import React from "react"

export type LinkType = {
  href: string,
  text: string,
  isNextLink: boolean,
}

export type DateType = string | number | Date

export type ChildrenType = string | React.JSX.Element | React.JSX.Element[]
