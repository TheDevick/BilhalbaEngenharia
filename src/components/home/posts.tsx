import { allPosts, Post as PostType } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { format } from 'date-fns/format'
import { ptBR } from 'date-fns/locale'
import Link from 'next/link'
import Button from '@/components/common/button/button'
import { ImageNextLink } from '@/components/common/image/image'

export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <section className="posts">
      {posts.map((post: PostType, key) => {
        return <Post post={post} key={key} />
      })}
    </section>
  )
}

function Post({ post }: { post: PostType }) {
  return (
    <article>
      <header>
        <span className="date">
          {format(post.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
        </span>
        <h2>
          <Link href={post.slug}>{post.title}</Link>
        </h2>
      </header>
      <ImageNextLink href={post.slug} src={post.mainPicture} />
      <p>{post.description}</p>
      <div className="actions special">
        <Button href={post.slug}>Ver mais</Button>
      </div>
    </article>
  )
}
