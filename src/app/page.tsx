import Link from "next/link";
import projects from "../data/projects";
import social_medias from "../data/social_medias";
import "./globals.css";

export const metadata = {
  title: "richaardev's website",
  openGraph: {
    siteName: "richaardev",
    title: "richaardev",
    type: "website",
    url: "https://richaar.dev/",
    images:
      "https://cdn.discordapp.com/avatars/646416170123132959/a1fbb34ed5bca4847d3de96227ded664.png",
    description: "Howdly! I'm richaardev, a full stack developer and passionate about Technology!",
  },
  twitter: {
    title: "richaardev's website",
    description: "Howdly! I'm richaardev, a full stack developer and passionate about Technology!",
    siteId: "1515896423094620161",
    creator: "@richaardev",
    creatorId: "1515896423094620161",
  },
  themeColor: "#18181b",
};

export default function Home() {
  return (
    <div>
      <div className="border-b-2 border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col justify-center max-w-5xl min-h-screen px-4 py-16 mx-auto md:px-16">
          <h1 className="font-medium text-md sm:text-2xl">Howdly!</h1>
          <h2 className="text-2xl font-bold sm:text-4xl">I&apos;m richaardev</h2>
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
        <div className="grid grid-cols-1 gap-3 pt-10 sm:grid-cols-2">
          {projects.map(({ name, tags, links, image }) => (
            <div
              key={name}
              className="box-border overflow-hidden w-full border-2 rounded-md shadow-md border-zinc-200 dark:border-zinc-800"
            >
              <div
                style={{ backgroundImage: `url(${image})` }}
                className="w-full bg-center bg-cover border-b-2 cursor-pointer aspect-video border-zinc-200 dark:border-zinc-800"
              ></div>
              <div className="px-3 py-5">
                <span className="flex items-center gap-3">
                  <span className="font-bold text-lg">{name}</span>
                  <div className="flex gap-2">
                    {links.map(({ icon: IconComponent, url }) => (
                      <Link key={url} href={url} className="transition-transform hover:scale-110">
                        <IconComponent size={20} />
                      </Link>
                    ))}
                  </div>
                </span>
                <div className="flex flex-wrap gap-1 mt-3">
                  {tags.map((tag) => (
                    <span
                      key={name + tag}
                      className="select-none px-1.5 py-1 text-xs bg-zinc-200 dark:bg-zinc-800 rounded-md"
                    >
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
