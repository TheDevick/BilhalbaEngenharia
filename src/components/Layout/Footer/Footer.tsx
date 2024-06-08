import { Socials } from '@/components/Layout/Social'

export default function Footer() {
  return (
    <footer id="footer">
      <section className="split contact">
        <section className="alt">
          <h3>Contato</h3>
          <p>Entre em contato para contratar um serviço</p>
        </section>
        <section>
          <h3>Telefone</h3>
          <p>
            <a href="tel:+5555984496965">+55 (55) 98449-6965</a>
          </p>
        </section>
        <section>
          <h3>Email</h3>
          <p>
            <a href="mailto:projetos@bilhalba.com.br">
              projetos@bilhalba.com.br
            </a>
          </p>
        </section>
        <section>
          <h3>Social</h3>
          <Socials useAlt />
        </section>
      </section>
    </footer>
  )
}
