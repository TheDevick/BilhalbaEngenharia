import { MajorHeading } from '@/components/Common/MajorHeading/MajorHeading'
import Banner from '@/assets/images/logos/banner.png'
import Image from 'next/image'

export default function Featured() {
  return (
    <article className="post featured">
      <MajorHeading.Root>
        <h2>
          Energia Solar: A solução para um futuro mais sustentável e econômico
        </h2>
        <Image
          src={Banner}
          height={500}
          alt="Abella Bilhalba Engenharia"
          style={{ height: 300, width: '100%', objectFit: 'contain' }}
        />
        <MajorHeading.Description>
          O futuro já chegou! Invista em Energia Solar e tenha uma grande
          redução na sua conta de luz.
        </MajorHeading.Description>
      </MajorHeading.Root>
    </article>
  )
}
