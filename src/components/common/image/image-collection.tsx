import Image from "@/components/common/image/image"

export default function ImageCollection({ imageCollection }: { imageCollection: string[] }) {
  return (
    <div className="box alt">
      <div className="row gtr-50 gtr-uniform" style={{ justifyContent: "center" }}>
        {imageCollection.map((image, key) =>
          <SingleImage image={image} key={key} />
        )}
      </div>
    </div>
  )
}

function SingleImage({ image }: { image: string }) {
  return (
    <div className="col-4">
      <Image src={image} />
    </div>
  )
}
