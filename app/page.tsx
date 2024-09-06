import Image from "next/image";
import {
  PencilIcon,
  PlusCircleIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";
import profiles from "@/public/profiles.json"; // This import style requires "esModuleInterop", see "side notes"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-center">
      {/* ==== landing page logo ==== */}
      {/* <div>
        <Image
          src="/logos_netflix.svg"
          alt="Netflix Logo"
          className="dark:invert"
          width={207}
          height={55.79}
          priority
        />
      </div> */}

      {/* ==== choose user ==== */}
      <div className="min-h-screen w-full justify-center py-8">
        <div className="w-full  mb-20 flex items-center justify-between px-4">
          <PencilIcon color="transparent" width={24} height={24} />
          <Image
            src="/logos_netflix.svg"
            alt="Netflix Logo"
            className="dark:invert"
            width={138}
            height={37.2}
            priority
          />
          <PencilIcon color="white" width={24} height={24} />
        </div>

        <div className="w-1/2 m-auto grid grid-cols-2 gap-8">
          {profiles.map((profile, i) => (
            <div className="w-fit text-center font-semibold text-white">
              <Image
                src={`/rectangle-${profile.color}.svg`}
                alt="user-1"
                className="dark:invert"
                width={100}
                height={92}
                priority
              />
              <p className="leading-10 capitalize">{profile.name}</p>
            </div>
          ))}

          <div className="flex flex-col items-center text-center font-semibold text-white">
            <PlusCircleIcon width={50} height={50} />
            <p>Add Profile</p>
          </div>
        </div>

        <span></span>
      </div>
    </main>
  );
}
