import React from "react";
import Image from "next/image";
import { PlusIcon, PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="relative">
      <Image
        src="/banner.png"
        alt="Netflix Logo"
        className="dark:invert"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        priority
      />
      <div className="w-full flex items-center absolute top-0 z-10">
        <Image
          src="/icon-netflix.svg"
          alt="Netflix Icon"
          className="dark:invert"
          width={53}
          height={57}
          priority
        />
        <div className="w-full font-semibold flex justify-around items-center px-4">
          <p>Tv Shows</p>
          <p>Movies</p>
          <p>My List</p>
        </div>
      </div>
      <div className="absolute w-full bottom-14 flex justify-center font-bold text-center">
        <div className="flex flex-col m-0 justify-center w-[18px] h-[19px] border">
          <p className="text-[5px] leading-[5px]">TOP</p>
          <p className="text-[7px] leading-[8px]">10</p>
        </div>
        <p className="ml-2 text-sm">#2 in Indonesia Today</p>
      </div>
      <div className="w-full bg-black text-center py-2 flex gap-x-6 justify-center text-xs">
        <div className="flex flex-col items-center">
          <PlusIcon width={16} height={16} />
          <p>My List</p>
        </div>
        <button className="flex py-1.5 px-3 gap-1 rounded items-center bg-gray-300 text-black text-base font-semibold">
          <PlayIcon width={16} height={16} />
          <p>Play</p>
        </button>
        <div className="flex flex-col items-center">
          <InformationCircleIcon width={16} height={16} />
          <p>info</p>
        </div>
      </div>
    </div>
  );
}
