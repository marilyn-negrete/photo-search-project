'use client';
import React from "react";
import { Jua, Kalam } from 'next/font/google';
import Image from "next/image";
import { StyledLink } from "./components/Links/StyledLink.styled";
import { StyledHome, StyledBanner } from "./StyledHome.styled";

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
        <h1 className={jua.className}>PhotoSearch</h1>
        <p className={kalam.className}>Find the best photographers in your city</p>
        <StyledLink isRadius={true} className={jua.className} href="/local-photographers">Search</StyledLink>
      </StyledBanner>
    </StyledHome>
  )
}
