import { MajorHeading } from '@/components/Common/MajorHeading/MajorHeading'

export function generateMetadata() {
  return {
    title: 'Sobre Nós',
  }
}

export default function Home() {
  return (
    <>
      <section className="post featured">
        <MajorHeading.Root>
          <MajorHeading.Featured>
            Soluções de engenharia elétrica e energia solar que atendam às suas
            necessidades específicas.
          </MajorHeading.Featured>
          <h2>Dedicados em fornecer soluções em engenharia elétrica.</h2>
        </MajorHeading.Root>
      </section>
      <Services />
      <p>
        Se você precisa de serviços de instalações elétricas, reparos na
        eletricidade ou deseja explorar os benefícios da energia solar para sua
        residência ou sua empresa, nossa equipe está à disposição para fornecer
        informações detalhadas, realizar orçamentos personalizados e esclarecer
        todas as suas dúvidas. Entre em contato conosco hoje mesmo e descubra
        como podemos ajudar você a adotar uma solução energética sustentável e
        eficiente.
      </p>
    </>
  )
}

function Services() {
  const services = [
    {
      title: 'Instalações Elétricas',
      text: 'Realizamos instalações elétricas completas para residências, empresas e estabelecimentos comerciais, garantindo segurança e eficiência energética.',
    },
    {
      title: 'Reparos e Manutenção',
      text: 'Realizamos instalações elétricas completas para residências, empresas e estabelecimentos comerciais, garantindo segurança e eficiência energética.',
    },
    {
      title: 'Projetos Elétricos',
      text: 'Desenvolvemos projetos elétricos personalizados, levando em consideração as necessidades específicas de cada cliente e as melhores práticas da indústria.',
    },
    {
      title: 'Energia Solar',
      text: 'Oferecemos soluções completas em energia solar, desde a avaliação inicial e projeto até a instalação e monitoramento do sistema. A energia solar é uma opção sustentável e econômica para residências e empresas que desejam reduzir sua dependência de fontes tradicionais de energia.',
    },
  ]

  return (
    <section>
      <h3>Serviços</h3>
      <ul>
        {services.map((service, key) => {
          return (
            <li key={key}>
              <strong>{service.title}</strong>: {service.text}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
