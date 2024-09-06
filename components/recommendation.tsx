import React from "react";
import Image from "next/image";

type Props = {
  name: string;
};

export default function Recommendation({ name }: Props) {
  const array = ["", "", "", "", "", ""];
  return (
    <div className="font-bold text-xl">
      <h2 className="px-4">{name}</h2>
      <div className="w-screen overflow-scroll px-4">
        <div className="inline-flex gap-3 py-4">
          {array.map((data, i) => (
            <div className="h-[161px] w-[103px] rounded-sm">
              <Image
                src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVWnpEUwJ7xvg1AMY0Oi2P4AughaQTJDSsb6tdriSLhAdTn3xqmWT2dO3okfMDWUCBruLoUFus63RTQtHnGUgKo3rmARYSjbWhkwYMjtzyIC5tZ00d3a9eL60exK8eobW-WdZg.jpg?r=93a"
                alt="previews"
                className="dark:invert"
                width={207}
                height={55.79}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
