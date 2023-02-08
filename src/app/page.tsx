import Link from "next/link";
import social_medias from "../data/social_medias";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-center mx-auto max-w-5xl px-4 md:px-16">
      <h1 className="text-md sm:text-2xl font-medium">Howdly!</h1>
      <h2 className="text-2xl sm:text-4xl font-bold">I'm richaardev</h2>
      <span className="text-sm sm:text-lg">
        Full Stack developer and passionate about Technology!
      </span>
      <div className="flex mt-3 gap-3">
        {social_medias.map(({ icon: IconComponent, href }) => (
          <Link key={href} href={href} className="box-border border-2 border-zinc-200 rounded-md p-1.5">
            <span>
              <IconComponent size={24} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
