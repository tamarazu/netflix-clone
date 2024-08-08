import React from "react";
import Banner from "@/components/banner";
import Previews from "@/components/previews";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="relative min-h-screen w-full">
      <Banner/>
      <Previews/>
    </div>
  );
}
