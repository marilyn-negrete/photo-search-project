'use client';
import Image from "next/image";
import thumbnail from "../../public/photography-thumbnail.jpeg";
import React from "react";
import RadioLink from "./ui/Links/RadioLink";
import styled from "styled-components";


const StyledImage = styled(Image)`
  z-index: -1;
`;

export default function Home() {
  return (
    <section>
      <StyledImage
        src={thumbnail}
        alt="Thumbnail"
        layout="fill"
        objectFit="cover"
      />
      <h1>Home Page</h1>
      <RadioLink label="Search" url="/local-photographers"/>
    </section>
    
  )
}
