'use client';
import React from "react";
import { Jua, Kalam } from 'next/font/google';
import Image from "next/image";
import { StyledLink } from "./components/Links/StyledLink.styled";
import { StyledHome, StyledBanner } from "./StyledHome.styled";
import Typography from "./components/Typography/Typography";

// fonts
const jua = Jua({ subsets: ['latin'], weight: '400'});
const kalam = Kalam({ subsets: ['latin'], weight: '300'});

export default function Home() {
  return (
    <StyledHome>
      <Image
        src="/photography-thumbnail.jpeg"
        alt="Thumbnail"
        layout="fill"
        objectFit="cover"
      />
      <StyledBanner>
        <Typography className={jua.className} variant="h1" label="PhotoSearch"/>
        <Typography className={kalam.className} label="Find the best photographers in your city"/>
        <StyledLink isRadius={true} className={jua.className} href="/local-photographers">Search</StyledLink>
      </StyledBanner>
    </StyledHome>
  )
}
