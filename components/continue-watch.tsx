import React from "react";
import Image from "next/image";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

export default function ContiueWatch({}: Props) {
  const array = ["", "", "", "", ""];
  return (
    <div className="py-2">
      <h2 className="px-4 text-xl font-bold ">Continue Watching for Enola</h2>
      <div className="w-screen overflow-scroll p-4">
        <div className="inline-flex gap-3">
          {array.map((data, i) => (
            <div className="h-[177px] w-[103px]">
              <Image
                src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVWnpEUwJ7xvg1AMY0Oi2P4AughaQTJDSsb6tdriSLhAdTn3xqmWT2dO3okfMDWUCBruLoUFus63RTQtHnGUgKo3rmARYSjbWhkwYMjtzyIC5tZ00d3a9eL60exK8eobW-WdZg.jpg?r=93a"
                alt="previews"
                className="dark:invert"
                width={207}
                height={55.79}
                priority
              />
              <div className="w-full bg-stone-600 h-1.5 dark:bg-gray-700">
                <div className="bg-red-600 h-1.5 w-[45%]"></div>
              </div>
              <div className="flex justify-between px-1 py-2 bg-neutral-900">
                <InformationCircleIcon color="white" width={24} height={24} />
                <EllipsisVerticalIcon color="white" width={24} height={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
