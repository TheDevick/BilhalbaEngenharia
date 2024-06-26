import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ImageCollection from '@/components/Common/Image/ImageCollection'
import { MajorHeading } from '@/components/Common/MajorHeading/MajorHeading'
import PostImagesFinder from '@/lib/PostImagesFinder'
import { allPosts, Post } from 'contentlayer/generated'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

function findPost(slug: string): Post {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  if (!post) notFound()

  return post
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = findPost(params.slug)

  return {
    title: {
      absolute: post.title,
    },
    description: post.description,
    openGraph: {
      images: [
        {
          url: post.mainPicture,
        },
      ],
    },
  }
}

export default async function PostLayout({
  params,
}: {
  params: { slug: string }
}) {
  const post = findPost(params.slug)

  const gallery = PostImagesFinder(post.slug)

  return (
    <section className="post">
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostGallery gallery={gallery} />
    </section>
  )
}

function PostHeader({ post }: { post: Post }) {
  return (
    <MajorHeading.Root>
      <MajorHeading.Featured>
        {format(post.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
      </MajorHeading.Featured>
      <h1>{post.title}</h1>
      <MajorHeading.Description>{post.description}</MajorHeading.Description>
      <MajorHeading.Picture src={post.mainPicture} />
    </MajorHeading.Root>
  )
}

function PostBody({ post }: { post: Post }) {
  return (
    <div>
      <span className="image left">
        <img src={post.sidePicture} alt="" />
      </span>
      <span dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  )
}

function PostGallery({ gallery }: { gallery: string[][] }) {
  return (
    <div>
      {gallery.map((imageCollection, key) => (
        <ImageCollection imageCollection={imageCollection} key={key} />
      ))}
    </div>
  )
}
