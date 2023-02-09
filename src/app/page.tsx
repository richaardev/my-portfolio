import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import projects from "../data/projects";
import social_medias from "../data/social_medias";
import "../styles/globals.css";

export default function Home() {
  return (
    <div>
      <div className="border-b-2 border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col justify-center max-w-5xl min-h-screen px-4 py-16 mx-auto md:px-16">
          <h1 className="font-medium text-md sm:text-2xl">Howdly!</h1>
          <h2 className="text-2xl font-bold sm:text-4xl">I'm richaardev</h2>
          <span className="text-sm sm:text-lg">
            Full Stack developer and passionate about Technology!
          </span>
          <div className="flex gap-3 mt-3">
            {social_medias.map(({ icon: IconComponent, href }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                className="box-border border-2 border-zinc-200 dark:border-zinc-800 rounded-md p-1.5"
              >
                <IconComponent size={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-5xl px-4 py-16 mx-auto md:px-16">
        <h1 className="text-2xl font-bold underline sm:text-4xl">Projects</h1>
        <div className="grid grid-cols-1 gap-5 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ name, tags, links, image }) => (
            <div
              key={name}
              className="box-border overflow-hidden border-2 rounded-md shadow-md border-zinc-200 dark:border-zinc-800"
            >
              <div
                style={{ backgroundImage: `url(${image})` }}
                className="w-full bg-center bg-cover border-b-2 cursor-pointer aspect-video border-zinc-200 dark:border-zinc-800"
              ></div>
              <div className="p-5">
                <span className="flex gap-3 font-bold">
                  {name}
                  <div className="flex gap-2">
                    {links.map(({ icon: IconComponent, url }) => (
                      <Link href={url} className="transition-transform hover:scale-110">
                        <IconComponent size={20} />
                      </Link>
                    ))}
                  </div>
                </span>
                <div className="flex flex-wrap gap-1 mt-3">
                  {tags.map((tag) => (
                    <span className="select-none p-1.5 text-xs bg-zinc-200 dark:bg-zinc-800 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
