import React, { useEffect } from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  ArrowDownTrayIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

type Props = {};

export const Navbar = (props: Props) => {

  return (
    <div className="w-full flex justify-around fixed bg-stone-900 text-stone-400 bottom-0 bg-stone-900 p-4 ">
      <HomeIcon height={28} width={28} color="white" />
      <MagnifyingGlassIcon height={28} width={28} />
      <RectangleStackIcon height={28} width={28} />
      <ArrowDownTrayIcon height={28} width={28} />
      <Bars3Icon height={28} width={28} />
    </div>
  );
};
