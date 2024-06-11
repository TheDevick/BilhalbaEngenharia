import { MajorHeading } from '@/components/Common/MajorHeading/MajorHeading'
import Posts from '@/components/Home/Posts'

export function generateMetadata() {
  return {
    title: 'Últimos Posts',
    description: 'Explore todos os nossos posts e atualizações em um só lugar.',
  }
}

export default function Home() {
  return (
    <>
      <article className="post featured">
        <MajorHeading.Root>
          <MajorHeading.Featured>
            Explore todos os nossos posts e atualizações em um só lugar.
          </MajorHeading.Featured>
          <h2>Últimos Posts</h2>
        </MajorHeading.Root>
      </article>
      <Posts />
    </>
  )
}
