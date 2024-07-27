import React from "react";
import Image from "next/image";

type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="bg-white relative">
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
        <div className="w-full text-white font-semibold flex justify-around items-center px-4">
          <p>Tv Shows</p>
          <p>Movies</p>
          <p>My List</p>
        </div>
      </div>
      <div className="absolute w-full bottom-1 text-white flex justify-center font-bold text-center">
        <div className="flex flex-col justify-center w-[24px] h-[24px] border">
          <p className="text-[5px] leading-[7px]">TOP</p>
          <p className="text-[7px] leading-[10px]">10</p>
        </div>
        <p className="ml-2">#2 in Indonesia Today</p>
      </div>
    </div>

  );
}
