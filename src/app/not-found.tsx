import { MajorHeading } from '@/components/Common/MajorHeading/MajorHeading'
import Link from 'next/link'

export default function NotFound() {
  return (
    <MajorHeading.Root>
      <h2>Página não encontrada.</h2>
      <MajorHeading.Description>
        Voltar à <Link href="/">Página Inicial</Link>
      </MajorHeading.Description>
    </MajorHeading.Root>
  )
}
