import { Resume } from './Resume'

export const About = () => (
  <section className="mt-8 flex min-w-0 flex-auto flex-col px-2 md:mt-3 md:px-0">
    <h1 className="font-serif text-3xl font-semibold">
      Henrique Albert Schmaiske
    </h1>

    <div className="mb-5 font-sans">
      <p className="my-4">
        {
          'Henrique is a highly skilled Engineering Manager with a diverse background and extensive experience in delivering top-notch software solutions. With expertise in marketing and self-taught software engineering, he exemplifies a commitment to continuous learning and improvement.'
        }
      </p>

      <p className="my-4">
        {
          'As an Engineering Manager, Henrique has led cross-functional teams, successfully managing projects involving the MeteorJS framework, shared component libraries, loyalty applications, and blockchain technology. His strong focus on quality and results ensures effective task management, roadmap planning, and team collaboration.'
        }
      </p>
      <p className="my-4">
        {
          "A Digital Nomad since 2019, Henrique's adventurous spirit has taken him to over 22 countries, fostering a love for cultural exploration and adaptability in various environments."
        }
      </p>
      <p className="my-4">
        {
          'Confident, concise, and driven, Henrique brings a wealth of technical knowledge, leadership skills, and a proven track record of success. With his exceptional ability to navigate challenges and drive innovation, he is a valuable asset to any team.'
        }
      </p>
    </div>
    <Resume />
  </section>
)
