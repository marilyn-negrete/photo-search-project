'use client';
import Image from "next/image";
import thumbnail from "../../public/photography-thumbnail.jpeg";
import React from "react";
import { StyledRadioLink } from "./ui/Links/StyledRadioLink.styled";
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
      <h1>Photo Search</h1>
      <p>Find the best photographers in your city</p>
      <StyledRadioLink href="/local-photographers">Search</StyledRadioLink>
    </section>
    
  )
}
