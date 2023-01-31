import Image from 'next/image'
import { CiTwitter, CiLinkedin } from 'react-icons/ci'
import { AiOutlineGithub } from 'react-icons/ai'

const socialMedia = [
  {
    name: 'Twitter',
    icon: <CiTwitter size="28px" />,
    url: 'https://twitter.com/hschmaiske'
  },
  {
    name: 'LinkedIn',
    icon: <CiLinkedin size="28px" />,
    url: 'https://www.linkedin.com/in/henrique-albert-schmaiske/'
  },
  {
    name: 'GitHub',
    icon: <AiOutlineGithub size="24px" className="ml-0.5" />,
    url: 'https://github.com/henriquealbert'
  }
]

export const Sidebar = () => (
  <aside className="-mx-4 flex flex-col md:mx-0 md:w-[200px] md:flex-shrink-0 md:px-0">
    <Image
      src="/images/profile-pic.png"
      alt="Henrique Albert Schmaiske"
      width={150}
      height={150}
    />

    <nav>
      <ul className="ml-14 mt-8 flex flex-col gap-2 text-neutral-400">
        {socialMedia.map(({ name, icon, url }) => (
          <li
            key={name}
            className="hover:cursor-pointer hover:text-neutral-700"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
)
