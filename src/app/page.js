'use client';
import Image from "next/image";
import thumbnail from "../../public/photography-thumbnail.jpeg";
import React from "react";
import { StyledRadioLink } from "./components/Links/StyledRadioLink.styled";
import { StyledHome, StyledBanner } from "./StyledHome.styled";
import styled from "styled-components";

const StyledImage = styled(Image)`
  z-index: -1;
`;

export default function Home() {
  return (
    <StyledHome>
      <StyledImage
        src={thumbnail}
        alt="Thumbnail"
        layout="fill"
        objectFit="cover"
      />
      <StyledBanner>
        <h1>Photo Search</h1>
        <p>Find the best photographers in your city</p>
        <StyledRadioLink href="/local-photographers">Search</StyledRadioLink>
      </StyledBanner>
    </StyledHome>
  )
}
