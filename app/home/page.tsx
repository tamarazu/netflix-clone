import React from "react";
import Banner from "@/components/banner";
import Previews from "@/components/previews";
import ContiueWatch from "@/components/continue-watch";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="bg-black text-white relative min-h-screen w-full">
      <Banner/>
      <Previews/>
      <ContiueWatch/>
    </div>
  );
}
