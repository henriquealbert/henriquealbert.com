import { AiOutlineDownload } from 'react-icons/ai'

export const Resume = () => (
  <section className="mb-8 flex items-center gap-2 text-neutral-500 hover:cursor-pointer hover:underline">
    <AiOutlineDownload size="18px" />

    <a
      href="https://drive.google.com/file/d/1snLDmY-TbjZcEh1S0ZEqJHW0AhQqK-FC/view?usp=share_link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download my resume
    </a>
  </section>
)
