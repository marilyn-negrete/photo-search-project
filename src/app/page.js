'use client';
import React from "react";
import RadioLink from "./ui/Links/RadioLink";

export default function Home() {
  return (
    <>
     <h1>Home Page</h1>
     <RadioLink label="Search" url="/local-photographers"/>
    </>
  )
}
