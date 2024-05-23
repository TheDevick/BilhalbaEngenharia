import { allPosts, Post as PostType } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { format } from 'date-fns/format';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';

export default function Posts() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <section className="posts">
      {posts.map((post: PostType, key) => {
        return <Post post={post} key={key}/>
      })}
    </section>
  )
}

function Post({ post }: { post: PostType }) {
  return (
    <article>
      <header>
        <span className="date">{format(post.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
        <h2>
          <Link href={post.slug}>{post.title}</Link>
        </h2>
      </header>
      <Link href={post.slug} className="image fit">
        <img src={post.mainPicture} alt="" />
      </Link>
      <p>{post.description}</p>
      <ul className="actions special">
        <li key={1}>
          <Link href={post.slug} className="button">Ver mais</Link>
        </li>
      </ul>
    </article>
  )
}