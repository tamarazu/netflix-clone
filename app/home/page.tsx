import React from "react";
import Banner from "@/components/banner";
import Previews from "@/components/previews";
import ContiueWatch from "@/components/continue-watch";
import Recommendation from "@/components/recommendation";

type Props = {};

export default function Page({}: Props) {
  const recommendationTitles = [
    "Trending Now",
    "Popular on Netflix",
    "Top 10 in Indonesia",
    "My List",
    "Korean Dramas",
    "Indonesian Movies"
  ]
  return (
    <div className="bg-black text-white relative min-h-screen w-full">
      <Banner/>
      <Previews/>
      <ContiueWatch/>
      {
        recommendationTitles.map((name, index) => (
          <Recommendation name={name}/>
        ))
      }
    </div>
  );
}
