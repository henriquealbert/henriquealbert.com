import { AiOutlineDownload } from 'react-icons/ai'

export const Resume = () => (
  <section className="mb-8 flex items-center gap-2 text-neutral-500 hover:cursor-pointer hover:underline">
    <AiOutlineDownload size="18px" />

    <a
      href="https://media.licdn.com/dms/document/media/D4D2DAQFw876lcMw2XA/profile-treasury-document-pdf-analyzed/0/1687189140897?e=1687996800&v=beta&t=L3WMy7LxvvopZWL3kCtaflk13r_PTv4Za4yZRDr6jB4"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download my resume
    </a>
  </section>
)
