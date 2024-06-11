import { MajorHeading } from '@/components/Common/MajorHeading/MajorHeading'
import Link from 'next/link'

export default function NotFound() {
  return (
    <MajorHeading.Root>
      <MajorHeading.Featured>
        Voltar à <Link href="/">Página Inicial</Link>
      </MajorHeading.Featured>
      <h2>Página não encontrada.</h2>
    </MajorHeading.Root>
  )
}
