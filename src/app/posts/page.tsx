import MajorHeading from '@/components/common/major-heading/major-heading'
import Posts from '@/components/home/posts'

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
        <MajorHeading
          title={{ tag: 'h2', text: 'Últimos Posts' }}
          description="Explore todos os nossos posts e atualizações em um só lugar."
        />
      </article>
      <Posts />
    </>
  )
}
