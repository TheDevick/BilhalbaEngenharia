type Question = {
  title: string
  description: string
}

const questions: Question[] = []

export default function Home() {
  return (
    <>
      <section id="faq">
        <h2>Perguntas Frequentes.</h2>
        <ul>
          {questions.map((question, key) => (
            <li key={key}>
              <span>{question.title}</span>
              <p>{question.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
