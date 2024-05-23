export default function Picture({ src, alt }: { src?: string, alt?: string }) {
  if (src === undefined) {
    return;
  }

  return (
    <div className="image main">
      <img src={src} alt={alt} />
    </div>
  )
}