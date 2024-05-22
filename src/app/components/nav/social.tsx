import clsx from "clsx";
import { SocialType } from "@/app/components/nav/types";

export default function Social({ social, id }: { social: SocialType, id: string }) {
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