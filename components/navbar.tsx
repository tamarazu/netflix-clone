import React, { useEffect } from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  ArrowDownTrayIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {};

export const Navbar = (props: Props) => {
  // const pathname = usePathname()
  // const searchParams = useSearchParams()
  // useEffect(() => {
  //   // Do something here...
  // }, [pathname, searchParams])
  return (
    <div className="w-full flex justify-around fixed bg-stone-900 text-stone-400 bottom-0 bg-white p-4 ">
      <HomeIcon height={40} width={40} className={`text-white`} />
      <MagnifyingGlassIcon height={40} width={40} />
      <RectangleStackIcon height={40} width={40} />
      <ArrowDownTrayIcon height={40} width={40} />
      <Bars3Icon height={40} width={40} />
    </div>
  );
};
