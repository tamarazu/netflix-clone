import React from "react";
import Image from "next/image";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="bg-black min-h-screen w-full">
      <Image
        src="/banner.png"
        alt="Netflix Logo"
        className="dark:invert"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        priority
      />
    </div>
  );
}
