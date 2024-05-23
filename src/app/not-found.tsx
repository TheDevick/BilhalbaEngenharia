import MajorHeading from "@/components/common/major-heading/major-heading";
import Link from "next/link";

export default function NotFound() {
  const titleText = 'Página não encontrada.';
  const description = <>Voltar à <Link href="/">Página Inicial</Link></>

  return (
    <MajorHeading
      title={{ tag: "h1", text: titleText }}
      description={description}
    />
  )
}