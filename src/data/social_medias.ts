import type { IconType } from "react-icons";
import { FaDiscord, FaGithub, FaEnvelope } from "react-icons/fa";

export default <SocialMedia[]>[
  {
    icon: FaEnvelope,
    href: "mailto:me@richaar.dev"
  },
  {
    icon: FaGithub,
    href: "https://github.com/richaardev",
  },
  {
    icon: FaDiscord,
    href: "https://discord.com/users/646416170123132959"
  }
]

export interface SocialMedia {
  icon: IconType;
  href: string;
}