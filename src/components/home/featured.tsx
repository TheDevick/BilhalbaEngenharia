import MajorHeading from "@/components/common/major-heading/major-heading";

export default function Featured() {
  const titleText = 'Energia Solar: A solução para um futuro mais sustentável e econômico'

  return (
    <article className="post featured">
      <MajorHeading
        title={{ tag: "h2", text: titleText }}
        description="O futuro já chegou! Invista em Energia Solar e tenha uma grande redução na sua conta de luz."
      />
    </article>
  )
}