import React from "react";
import Banner from "@/components/banner";
import Previews from "@/components/previews";
import ContiueWatch from "@/components/continue-watch";
import Recommendation from "@/components/recommendation";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="bg-black text-white relative min-h-screen w-full">
      <Banner/>
      <Previews/>
      <ContiueWatch/>
      <Recommendation name="Popular on Netflix"/>
      <Recommendation name="Trending Now"/>
      <Recommendation name="Top 10 in Indonesia"/>
      <Recommendation name="My List>"/>
      <Recommendation name="Korean Dramas"/>
      <Recommendation name="Indonesian Movies"/>
    </div>
  );
}
