import { Resume } from './Resume'

export const About = () => (
  <section className="mt-8 flex min-w-0 flex-auto flex-col px-2 md:mt-3 md:px-0">
    <h1 className="font-serif text-3xl font-semibold">
      Henrique Albert Schmaiske
    </h1>

    <div className="mb-5 font-sans">
      <p className="my-4">
        {`I'm`} a highly skilled <strong>Senior Software Engineer</strong> and{' '}
        <strong>Tech Lead</strong> with a diverse skill set and experience
        working on various projects and technologies. I have a strong focus on
        delivering high-quality products, and I can adapt to any environment,
        making me a valuable asset to any team. I have a{' '}
        <strong>background in Marketing</strong> and self-taught in software
        engineering.
      </p>

      <p className="my-4">
        I have held various Tech Lead roles throughout my career, including
        leading a team working on the <strong>MeteorJS framework</strong>, a
        shared component library and Loyalty app for restaurants in Denmark, and
        a blockchain project using Filecoin & Lotus for{' '}
        <strong>Protocol Labs</strong>. In these roles, I have managed tasks,
        roadmaps, and team members contributed to open-source projects and
        participated in strategy and business decisions.
      </p>
      <p className="my-4">
        I have also been a Digital Nomad since 2019, traveling to 22+ countries
        with my wife and gaining a love for learning about different cultures.
        Today, {`I'm`} based in Brazil 🇧🇷
      </p>
    </div>
    <Resume />
  </section>
)
