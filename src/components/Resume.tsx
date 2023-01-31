import { AiOutlineDownload } from 'react-icons/ai'

export const Resume = () => (
  <section className="flex items-center gap-2 text-neutral-500 hover:cursor-pointer hover:underline">
    <AiOutlineDownload size="18px" />

    <a
      href="https://drive.google.com/file/d/1v2qc0Ww0--ot4Tu0-J8vpdENabkqtTga/view?usp=share_link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download my resume
    </a>
  </section>
)
