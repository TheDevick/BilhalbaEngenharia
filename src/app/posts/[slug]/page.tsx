import MajorHeading from '@/components/common/major-heading/major-heading';
import PostImagesFinder from '@/lib/post-images-finder';
import { allPosts, Post } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()
  return { title: post.title }
}

export default async function PostLayout({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()

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
    <MajorHeading
      date={post.date}
      title={{ tag: "h1", text: post.title }}
      description={post.description}
      picture={post.mainPicture}
    />
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
      {gallery.map((imageCollection, key) =>
        <PostGalleryImageCollection imageCollection={imageCollection} key={key} />
      )}
    </div>
  )
}

function PostGalleryImageCollection({ imageCollection }: { imageCollection: string[] }) {
  return (
    <div className="box alt">
      <div className="row gtr-50 gtr-uniform" style={{ justifyContent: "center" }}>
        {imageCollection.map((image, key) =>
          <PostGalleryImage image={image} key={key} />
        )}
      </div>
    </div>
  )
}

function PostGalleryImage({ image }: { image: string }) {
  return (
    <div className="col-4">
      <span className="image fit">
        <img src={image} alt="" />
      </span>
    </div>
  )
}
