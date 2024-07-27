import React from "react";
import Banner from "@/components/banner";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="relative min-h-screen w-full">
      <Banner/>
      <h1>Ini adalah pembatas</h1>
    </div>
  );
}
